<script lang="ts">
	import { TrendingUp, Clock, Users, Trophy, Star, Shield } from 'lucide-svelte';
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';

	let visible = $state(false);
	let counters = $state({
		projects: 0,
		hours: 0,
		satisfaction: 0,
		roi: 0
	});

	const metrics = [
		{
			icon: Trophy,
			value: 127,
			label: 'Projetos Entregues',
			suffix: '+',
			key: 'projects'
		},
		{
			icon: Clock,
			value: 48,
			label: 'Horas para MVP',
			suffix: 'h',
			key: 'hours'
		},
		{
			icon: Star,
			value: 98,
			label: 'Satisfação Cliente',
			suffix: '%',
			key: 'satisfaction'
		},
		{
			icon: TrendingUp,
			value: 300,
			label: 'ROI Médio',
			suffix: '%',
			key: 'roi'
		}
	];

	function animateCounter(target: number, key: keyof typeof counters) {
		const duration = 2000;
		const steps = 60;
		const increment = target / steps;
		let current = 0;

		const timer = setInterval(() => {
			current += increment;
			if (current >= target) {
				counters[key] = target;
				clearInterval(timer);
			} else {
				counters[key] = Math.floor(current);
			}
		}, duration / steps);
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !visible) {
						visible = true;
						metrics.forEach((metric) => {
							animateCounter(metric.value, metric.key as keyof typeof counters);
						});
					}
				});
			},
			{ threshold: 0.1 }
		);

		const element = document.getElementById('metrics');
		if (element) observer.observe(element);

		return () => observer.disconnect();
	});
</script>

<section
	id="metrics"
	class="from-primary/5 via-background to-primary/5 bg-gradient-to-br px-4 py-20"
>
	<div class="mx-auto max-w-6xl">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">
				Números que
				<span class="gradient-text">Falam por Si</span>
			</h2>
			<p class="text-muted-foreground mx-auto max-w-2xl text-lg">
				Resultados comprovados em mais de 6 anos transformando ideias em software de sucesso.
			</p>
		</div>

		<div class="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
			{#each metrics as metric}
				<div
					class="bg-card border-border rounded-lg border p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
				>
					<div class="bg-primary/10 mb-4 inline-flex rounded-lg p-3">
						<svelte:component this={metric.icon} class="text-primary h-6 w-6" />
					</div>
					<div class="mb-2 text-3xl font-bold md:text-4xl">
						{counters[metric.key]}{metric.suffix}
					</div>
					<p class="text-muted-foreground text-sm">{metric.label}</p>
				</div>
			{/each}
		</div>

		<div class="bg-card border-border rounded-lg border p-8">
			<div class="grid gap-6 md:grid-cols-3">
				<div class="text-center md:text-left">
					<h3 class="mb-4 text-xl font-semibold">Cases de Sucesso</h3>
					<ul class="text-muted-foreground space-y-2">
						<li class="flex items-center gap-2">
							<Shield class="text-primary h-4 w-4" />
							<span>FinTech: -70% fraudes</span>
						</li>
						<li class="flex items-center gap-2">
							<Shield class="text-primary h-4 w-4" />
							<span>E-commerce: +200% conversão</span>
						</li>
						<li class="flex items-center gap-2">
							<Shield class="text-primary h-4 w-4" />
							<span>SaaS: 5M+ usuários ativos</span>
						</li>
					</ul>
				</div>

				<div class="text-center md:text-left">
					<h3 class="mb-4 text-xl font-semibold">Tecnologias Dominadas</h3>
					<ul class="text-muted-foreground space-y-2">
						<li class="flex items-center gap-2">
							<Shield class="text-primary h-4 w-4" />
							<span>React, Vue, Svelte, Angular</span>
						</li>
						<li class="flex items-center gap-2">
							<Shield class="text-primary h-4 w-4" />
							<span>Node.js, Go, Python, Rust</span>
						</li>
						<li class="flex items-center gap-2">
							<Shield class="text-primary h-4 w-4" />
							<span>AWS, GCP, Azure, Vercel</span>
						</li>
					</ul>
				</div>

				<div class="text-center md:text-left">
					<h3 class="mb-4 text-xl font-semibold">Certificações</h3>
					<ul class="text-muted-foreground space-y-2">
						<li class="flex items-center gap-2">
							<Shield class="text-primary h-4 w-4" />
							<span>AWS Solutions Architect</span>
						</li>
						<li class="flex items-center gap-2">
							<Shield class="text-primary h-4 w-4" />
							<span>Google Cloud Professional</span>
						</li>
						<li class="flex items-center gap-2">
							<Shield class="text-primary h-4 w-4" />
							<span>ISO 27001 Compliance</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
