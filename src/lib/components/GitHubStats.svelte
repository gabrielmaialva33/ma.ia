<script lang="ts">
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils';
	import { Star, GitFork, GitPullRequest, Users } from '@lucide/svelte';
	import { getCachedGitHubData, getGitHubUser, getGitHubStats } from '$lib/api/github';
	import type { GitHubUser, GitHubStats } from '$lib/api/github';

	let user = $state<GitHubUser | null>(null);
	let stats = $state<GitHubStats | null>(null);
	let loading = $state(true);

	onMount(async () => {
		try {
			const [userData, statsData] = await Promise.all([
				getCachedGitHubData('user', getGitHubUser),
				getCachedGitHubData('stats', getGitHubStats)
			]);

			user = userData;
			stats = statsData;
		} catch (error) {
			console.error('Error loading GitHub data:', error);
		} finally {
			loading = false;
		}
	});
</script>

<section class="px-4 py-20">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">
			<span class="gradient-text">GitHub Stats</span>
		</h2>

		{#if loading}
			<div class="flex justify-center">
				<div class="border-primary h-12 w-12 animate-spin rounded-full border-b-2"></div>
			</div>
		{:else if user && stats}
			<div class="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
				<!-- Repositories -->
				<div
					class={cn(
						'border-border bg-card rounded-lg border p-6',
						'transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10'
					)}
				>
					<div class="mb-2 flex items-center gap-3">
						<GitPullRequest class="h-5 w-5 text-violet-500" />
						<span class="text-muted-foreground text-sm">Repositórios</span>
					</div>
					<p class="text-3xl font-bold">{user.public_repos}</p>
				</div>

				<!-- Stars -->
				<div
					class={cn(
						'border-border bg-card rounded-lg border p-6',
						'transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10'
					)}
				>
					<div class="mb-2 flex items-center gap-3">
						<Star class="h-5 w-5 text-yellow-500" />
						<span class="text-muted-foreground text-sm">Total de Stars</span>
					</div>
					<p class="text-3xl font-bold">{stats.totalStars}</p>
				</div>

				<!-- Forks -->
				<div
					class={cn(
						'border-border bg-card rounded-lg border p-6',
						'transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10'
					)}
				>
					<div class="mb-2 flex items-center gap-3">
						<GitFork class="h-5 w-5 text-green-500" />
						<span class="text-muted-foreground text-sm">Total de Forks</span>
					</div>
					<p class="text-3xl font-bold">{stats.totalForks}</p>
				</div>

				<!-- Followers -->
				<div
					class={cn(
						'border-border bg-card rounded-lg border p-6',
						'transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10'
					)}
				>
					<div class="mb-2 flex items-center gap-3">
						<Users class="h-5 w-5 text-blue-500" />
						<span class="text-muted-foreground text-sm">Seguidores</span>
					</div>
					<p class="text-3xl font-bold">{user.followers}</p>
				</div>
			</div>

			<!-- Language Distribution -->
			{#if stats.topLanguages.length > 0}
				<div class="bg-card border-border rounded-lg border p-6">
					<h3 class="mb-6 text-xl font-semibold">Linguagens Mais Usadas</h3>

					<div class="space-y-4">
						{#each stats.topLanguages as lang}
							<div class="space-y-2">
								<div class="flex items-center justify-between">
									<div class="flex items-center gap-2">
										<span class="h-3 w-3 rounded-full" style="background-color: {lang.color}"
										></span>
										<span class="text-sm font-medium">{lang.name}</span>
									</div>
									<span class="text-muted-foreground text-sm">{lang.percentage}%</span>
								</div>
								<div class="bg-secondary h-2 w-full rounded-full">
									<div
										class="h-2 rounded-full transition-all duration-500"
										style="width: {lang.percentage}%; background-color: {lang.color}"
									></div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		{:else}
			<div class="text-muted-foreground text-center">
				<p>Não foi possível carregar os dados do GitHub</p>
			</div>
		{/if}
	</div>
</section>
