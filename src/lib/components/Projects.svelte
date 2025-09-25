<script lang="ts">
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils';
	import { Github, ExternalLink, Star, GitFork, Code2, Calendar } from '@lucide/svelte';
	import { getCachedGitHubData, getGitHubRepos } from '$lib/api/github';
	import type { GitHubRepo } from '$lib/api/github';

	let repos = $state<GitHubRepo[]>([]);
	let filteredRepos = $state<GitHubRepo[]>([]);
	let loading = $state(true);
	let selectedLanguage = $state<string>('all');
	let searchQuery = $state('');

	const languages = $derived(() => {
		const langs = new Set<string>();
		repos.forEach((repo) => {
			if (repo.language) langs.add(repo.language);
		});
		return Array.from(langs).sort();
	});

	$effect(() => {
		let filtered = repos;

		// Filter by language
		if (selectedLanguage !== 'all') {
			filtered = filtered.filter((repo) => repo.language === selectedLanguage);
		}

		// Filter by search query
		if (searchQuery) {
			const query = searchQuery.toLowerCase();
			filtered = filtered.filter(
				(repo) =>
					repo.name.toLowerCase().includes(query) ||
					repo.description?.toLowerCase().includes(query) ||
					repo.topics?.some((topic) => topic.toLowerCase().includes(query))
			);
		}

		filteredRepos = filtered.slice(0, 12); // Show max 12 projects
	});

	onMount(async () => {
		try {
			const reposData = await getCachedGitHubData('repos', getGitHubRepos);
			repos = reposData;
			filteredRepos = reposData.slice(0, 12);
		} catch (error) {
			console.error('Error loading repos:', error);
		} finally {
			loading = false;
		}
	});

	function formatDate(dateStr: string) {
		const date = new Date(dateStr);
		return new Intl.DateTimeFormat('pt-BR', {
			year: 'numeric',
			month: 'short'
		}).format(date);
	}
</script>

<section class="px-4 py-20" id="projects">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">
			<span class="gradient-text">Projetos em Destaque</span>
		</h2>

		{#if loading}
			<div class="flex justify-center">
				<div class="border-primary h-12 w-12 animate-spin rounded-full border-b-2"></div>
			</div>
		{:else}
			<!-- Filters -->
			<div class="mb-8 flex flex-col gap-4 md:flex-row">
				<!-- Search -->
				<div class="flex-1">
					<input
						type="text"
						bind:value={searchQuery}
						placeholder="Buscar projetos..."
						class={cn(
							'w-full rounded-lg px-4 py-2',
							'bg-secondary border-border border',
							'focus:ring-2 focus:ring-violet-500 focus:outline-none',
							'placeholder:text-muted-foreground'
						)}
					/>
				</div>

				<!-- Language Filter -->
				<div class="flex flex-wrap gap-2">
					<button
						onclick={() => (selectedLanguage = 'all')}
						class={cn(
							'rounded-lg px-4 py-2 font-medium transition-all',
							selectedLanguage === 'all'
								? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white'
								: 'bg-secondary hover:bg-accent'
						)}
					>
						Todas
					</button>
					{#each languages as lang}
						<button
							onclick={() => (selectedLanguage = lang)}
							class={cn(
								'rounded-lg px-4 py-2 font-medium transition-all',
								selectedLanguage === lang
									? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white'
									: 'bg-secondary hover:bg-accent'
							)}
						>
							{lang}
						</button>
					{/each}
				</div>
			</div>

			<!-- Projects Grid -->
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each filteredRepos as repo}
					<div
						class={cn(
							'border-border bg-card rounded-lg border p-6',
							'transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10',
							'group flex flex-col'
						)}
					>
						<!-- Header -->
						<div class="mb-4">
							<h3 class="group-hover:gradient-text mb-2 text-lg font-semibold transition-all">
								{repo.name}
							</h3>
							<p class="text-muted-foreground line-clamp-2 text-sm">
								{repo.description || 'Sem descrição disponível'}
							</p>
						</div>

						<!-- Language & Date -->
						<div class="text-muted-foreground mb-4 flex items-center gap-4 text-xs">
							{#if repo.language}
								<span class="flex items-center gap-1">
									<Code2 class="h-3 w-3" />
									{repo.language}
								</span>
							{/if}
							<span class="flex items-center gap-1">
								<Calendar class="h-3 w-3" />
								{formatDate(repo.updated_at)}
							</span>
						</div>

						<!-- Topics -->
						{#if repo.topics && repo.topics.length > 0}
							<div class="mb-4 flex flex-wrap gap-1">
								{#each repo.topics.slice(0, 3) as topic}
									<span
										class="rounded-full bg-violet-500/10 px-2 py-1 text-xs text-violet-600 dark:text-violet-400"
									>
										{topic}
									</span>
								{/each}
								{#if repo.topics.length > 3}
									<span class="text-muted-foreground px-2 py-1 text-xs">
										+{repo.topics.length - 3}
									</span>
								{/if}
							</div>
						{/if}

						<!-- Stats -->
						<div class="mb-4 flex items-center gap-4 text-sm">
							<span class="flex items-center gap-1">
								<Star class="h-4 w-4 text-yellow-500" />
								{repo.stargazers_count}
							</span>
							<span class="flex items-center gap-1">
								<GitFork class="h-4 w-4 text-green-500" />
								{repo.forks_count}
							</span>
						</div>

						<!-- Actions -->
						<div class="mt-auto flex gap-2">
							<a
								href={repo.html_url}
								target="_blank"
								rel="noopener noreferrer"
								class={cn(
									'inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2',
									'bg-secondary hover:bg-accent transition-all',
									'hover:scale-105 active:scale-95'
								)}
							>
								<Github class="h-4 w-4" />
								Código
							</a>
							{#if repo.homepage}
								<a
									href={repo.homepage}
									target="_blank"
									rel="noopener noreferrer"
									class={cn(
										'inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2',
										'bg-gradient-to-r from-violet-600 to-cyan-500 text-white',
										'transition-all hover:shadow-lg hover:shadow-violet-500/25',
										'hover:scale-105 active:scale-95'
									)}
								>
									<ExternalLink class="h-4 w-4" />
									Demo
								</a>
							{/if}
						</div>
					</div>
				{/each}
			</div>

			{#if filteredRepos.length === 0}
				<div class="py-12 text-center">
					<p class="text-muted-foreground">Nenhum projeto encontrado com os filtros aplicados.</p>
				</div>
			{/if}

			<!-- View More on GitHub -->
			<div class="mt-12 text-center">
				<a
					href="https://github.com/gabrielmaialva33?tab=repositories"
					target="_blank"
					rel="noopener noreferrer"
					class={cn(
						'inline-flex items-center gap-2 rounded-lg px-6 py-3',
						'border-border bg-background/50 border backdrop-blur-sm',
						'hover:bg-accent hover:text-accent-foreground transition-all duration-300',
						'hover:scale-105 active:scale-95'
					)}
				>
					<Github class="h-5 w-5" />
					Ver todos os projetos no GitHub
				</a>
			</div>
		{/if}
	</div>
</section>
