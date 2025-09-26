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
	<title>Ma.ia - Desenvolva Primeiro, Pague Depois | Software House & IA</title>
	<meta
		name="description"
		content="Ma.ia - Software house especializada em desenvolvimento sob medida, IA e automação. 50% do desenvolvimento antes do primeiro pagamento. Zero risco, máximo resultado."
	/>
	<meta
		name="keywords"
		content="Ma.ia, desenvolvimento software, inteligência artificial, automação, software house, desenvolvimento web, desenvolvimento mobile, consultoria tecnológica, transformação digital, São Paulo"
	/>
	<meta name="author" content="Ma.ia" />
	<meta property="og:title" content="Ma.ia - Desenvolva Primeiro, Pague Depois" />
	<meta
		property="og:description"
		content="Software house que desenvolve 50% do seu projeto antes do primeiro pagamento. Especialistas em IA, automação e desenvolvimento sob medida."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://maiasolutions.tech" />
	<meta property="og:image" content="https://maiasolutions.tech/og-image.png" />
	<link rel="canonical" href="https://maiasolutions.tech" />
	<meta name="robots" content="index, follow" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
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
			<p>© {new Date().getFullYear()} Ma.ia. Todos os direitos reservados.</p>
			<p class="mt-2">CNPJ: 40.144.618/0001-40</p>
			<p class="mt-2">
				Tecnologia de ponta com <span class="gradient-text">IA</span> e
				<span class="gradient-text">Automação</span>
			</p>
		</div>
	</footer>
</div>
