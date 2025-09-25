<script lang="ts">
	import { ArrowRight, Shield, Zap, TrendingUp } from 'lucide-svelte';
	import { cn } from '$lib/utils';

	function scrollToContact() {
		document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<section class="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20">
	<div
		class="from-primary/5 to-primary/5 absolute inset-0 bg-gradient-to-br via-transparent opacity-30"
	></div>

	<div class="relative z-10 mx-auto max-w-6xl text-center">
		<div
			class="border-primary/20 bg-primary/5 text-primary mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
		>
			<Shield class="h-4 w-4" />
			<span>Desenvolvimento com Garantia de Satisfação</span>
		</div>

		<h1 class="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
			Desenvolva Primeiro,
			<span class="gradient-text block">Pague Depois</span>
		</h1>

		<p class="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl leading-relaxed md:text-2xl">
			Transformamos sua ideia em software funcional.
			<span class="text-foreground font-semibold"
				>50% do desenvolvimento antes do primeiro pagamento.</span
			>
			Zero risco, máximo resultado.
		</p>

		<div class="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
			<button
				onclick={scrollToContact}
				class={cn(
					'inline-flex items-center gap-2 rounded-lg px-8 py-4',
					'bg-primary text-primary-foreground font-semibold',
					'hover:bg-primary/90 transition-all duration-200',
					'shadow-lg hover:scale-105 hover:shadow-xl'
				)}
			>
				Começar Projeto Agora
				<ArrowRight class="h-5 w-5" />
			</button>

			<a
				href="#how-it-works"
				class={cn(
					'inline-flex items-center gap-2 rounded-lg px-8 py-4',
					'border-border bg-background/50 border backdrop-blur',
					'hover:bg-accent transition-all duration-200',
					'font-semibold'
				)}
			>
				Como Funciona
			</a>
		</div>

		<div class="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
			<div
				class="bg-card/50 border-border flex items-center gap-3 rounded-lg border p-4 backdrop-blur"
			>
				<Zap class="text-primary h-8 w-8 flex-shrink-0" />
				<div class="text-left">
					<p class="font-semibold">Entrega Rápida</p>
					<p class="text-muted-foreground text-sm">MVPs em 30 dias</p>
				</div>
			</div>

			<div
				class="bg-card/50 border-border flex items-center gap-3 rounded-lg border p-4 backdrop-blur"
			>
				<Shield class="text-primary h-8 w-8 flex-shrink-0" />
				<div class="text-left">
					<p class="font-semibold">Zero Risco</p>
					<p class="text-muted-foreground text-sm">Pague só se gostar</p>
				</div>
			</div>

			<div
				class="bg-card/50 border-border flex items-center gap-3 rounded-lg border p-4 backdrop-blur"
			>
				<TrendingUp class="text-primary h-8 w-8 flex-shrink-0" />
				<div class="text-left">
					<p class="font-semibold">ROI Garantido</p>
					<p class="text-muted-foreground text-sm">+300% em 6 meses</p>
				</div>
			</div>
		</div>
	</div>
</section>
