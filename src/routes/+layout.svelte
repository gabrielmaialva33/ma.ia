<script lang="ts">
	import '../app.css';
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	let { children } = $props();

	onMount(() => {
		theme.init();
	});
</script>

<svelte:head>
	<title>Gabriel Maia - Engenheiro de Software Sênior</title>
	<meta
		name="description"
		content="Portfólio de Gabriel Maia - Engenheiro de Software Sênior com +6 anos de experiência em Node.js, Go, Python e arquiteturas escaláveis."
	/>
	<meta
		name="keywords"
		content="Gabriel Maia, Desenvolvedor, Software Engineer, Node.js, Go, Python, Full Stack"
	/>
	<meta name="author" content="Gabriel Maia" />
	<meta property="og:title" content="Gabriel Maia - Engenheiro de Software Sênior" />
	<meta
		property="og:description"
		content="Portfólio de Gabriel Maia - Engenheiro de Software Sênior com +6 anos de experiência."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://gabrielmaia.dev" />
	<link rel="canonical" href="https://gabrielmaia.dev" />
</svelte:head>

<div class="bg-background min-h-screen">
	<!-- Fixed Theme Toggle -->
	<div class="fixed top-4 right-4 z-50">
		<ThemeToggle />
	</div>

	<!-- Main Content -->
	<main>
		{@render children?.()}
	</main>

	<!-- Footer -->
	<footer class="border-border border-t px-4 py-8">
		<div class="text-muted-foreground mx-auto max-w-6xl text-center text-sm">
			<p>© {new Date().getFullYear()} Gabriel Maia. Todos os direitos reservados.</p>
			<p class="mt-2">
				Feito com <span class="gradient-text">Svelte</span> +
				<span class="gradient-text">Tailwind CSS</span>
			</p>
		</div>
	</footer>
</div>
