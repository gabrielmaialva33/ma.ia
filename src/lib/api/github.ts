export interface GitHubUser {
	login: string;
	name: string;
	bio: string;
	avatar_url: string;
	html_url: string;
	public_repos: number;
	followers: number;
	following: number;
	created_at: string;
	company: string | null;
	location: string | null;
	blog: string | null;
}

export interface GitHubRepo {
	id: number;
	name: string;
	full_name: string;
	description: string | null;
	html_url: string;
	homepage: string | null;
	language: string | null;
	stargazers_count: number;
	watchers_count: number;
	forks_count: number;
	topics: string[];
	created_at: string;
	updated_at: string;
	pushed_at: string;
	size: number;
	default_branch: string;
	fork: boolean;
}

export interface GitHubStats {
	totalStars: number;
	totalForks: number;
	languages: Record<string, number>;
	topLanguages: Array<{ name: string; percentage: number; color: string }>;
}

const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_USERNAME = 'gabrielmaialva33';

// Language colors from GitHub
const LANGUAGE_COLORS: Record<string, string> = {
	JavaScript: '#f1e05a',
	TypeScript: '#2b7489',
	Python: '#3572A5',
	Go: '#00ADD8',
	Elixir: '#6e4a7e',
	HTML: '#e34c26',
	CSS: '#563d7c',
	Vue: '#4FC08D',
	React: '#61DAFB',
	Svelte: '#ff3e00',
	Ruby: '#701516',
	Java: '#b07219',
	'C++': '#f34b7d',
	C: '#555555',
	PHP: '#4F5D95',
	Shell: '#89e051',
	Rust: '#dea584',
	Swift: '#FA7343',
	Kotlin: '#A97BFF',
	Dart: '#00B4AB'
};

async function fetchFromGitHub<T>(endpoint: string): Promise<T> {
	const response = await fetch(`${GITHUB_API_BASE}${endpoint}`, {
		headers: {
			Accept: 'application/vnd.github.v3+json'
		}
	});

	if (!response.ok) {
		throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
	}

	return response.json();
}

export async function getGitHubUser(): Promise<GitHubUser> {
	try {
		return await fetchFromGitHub<GitHubUser>(`/users/${GITHUB_USERNAME}`);
	} catch (error) {
		console.error('Error fetching GitHub user:', error);
		// Return fallback data
		return {
			login: GITHUB_USERNAME,
			name: 'Gabriel Maia',
			bio: 'Engenheiro de Software Sênior | Full Stack Developer',
			avatar_url: `https://github.com/${GITHUB_USERNAME}.png`,
			html_url: `https://github.com/${GITHUB_USERNAME}`,
			public_repos: 0,
			followers: 0,
			following: 0,
			created_at: new Date().toISOString(),
			company: 'Wave Technologies',
			location: 'São Paulo, Brasil',
			blog: null
		};
	}
}

export async function getGitHubRepos(sort: 'updated' | 'stars' = 'updated'): Promise<GitHubRepo[]> {
	try {
		const repos = await fetchFromGitHub<GitHubRepo[]>(
			`/users/${GITHUB_USERNAME}/repos?sort=${sort}&per_page=100`
		);

		// Filter out forks and sort by stars
		return repos
			.filter((repo) => !repo.fork)
			.sort((a, b) => b.stargazers_count - a.stargazers_count);
	} catch (error) {
		console.error('Error fetching GitHub repos:', error);
		return [];
	}
}

export async function getGitHubStats(): Promise<GitHubStats> {
	try {
		const repos = await getGitHubRepos();

		let totalStars = 0;
		let totalForks = 0;
		const languages: Record<string, number> = {};

		// Get language stats for each repo
		for (const repo of repos) {
			totalStars += repo.stargazers_count;
			totalForks += repo.forks_count;

			if (repo.language) {
				try {
					const langData = await fetchFromGitHub<Record<string, number>>(
						`/repos/${GITHUB_USERNAME}/${repo.name}/languages`
					);

					for (const [lang, bytes] of Object.entries(langData)) {
						languages[lang] = (languages[lang] || 0) + bytes;
					}
				} catch (error) {
					// Silently continue if we can't get language data for a repo
					if (repo.language) {
						languages[repo.language] = (languages[repo.language] || 0) + repo.size * 1024;
					}
				}
			}
		}

		// Calculate percentages
		const totalBytes = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0);
		const topLanguages = Object.entries(languages)
			.map(([name, bytes]) => ({
				name,
				percentage: Math.round((bytes / totalBytes) * 1000) / 10,
				color: LANGUAGE_COLORS[name] || '#858585'
			}))
			.sort((a, b) => b.percentage - a.percentage)
			.slice(0, 8); // Top 8 languages

		return {
			totalStars,
			totalForks,
			languages,
			topLanguages
		};
	} catch (error) {
		console.error('Error calculating GitHub stats:', error);
		return {
			totalStars: 0,
			totalForks: 0,
			languages: {},
			topLanguages: []
		};
	}
}

// Cache implementation
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

export async function getCachedGitHubData<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
	const cached = cache.get(key);

	if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
		return cached.data;
	}

	const data = await fetcher();
	cache.set(key, { data, timestamp: Date.now() });
	return data;
}
