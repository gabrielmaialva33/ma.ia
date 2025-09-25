<script lang="ts">
	import { cn } from '$lib/utils';
	import { Github, Linkedin, Mail, Phone, MapPin, Briefcase } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let mounted = $state(false);
	let textIndex = $state(0);
	const roles = [
		'Engenheiro de Software Sênior',
		'Desenvolvedor Full Stack',
		'Especialista em Node.js & Go',
		'Arquiteto de Microsserviços'
	];

	onMount(() => {
		mounted = true;
		const interval = setInterval(() => {
			textIndex = (textIndex + 1) % roles.length;
		}, 3000);

		return () => clearInterval(interval);
	});
</script>

<section class="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20">
	<!-- Background gradient animation -->
	<div
		class="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-cyan-500/10"
	></div>

	<!-- Animated circles -->
	<div class="absolute inset-0 overflow-hidden">
		<div
			class="animate-pulse-glow absolute -top-20 -left-20 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"
		></div>
		<div
			class="animate-pulse-glow animation-delay-2000 absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
		></div>
	</div>

	<div class="relative z-10 mx-auto max-w-6xl text-center">
		<!-- Badge PCD -->
		<div class="mb-6 inline-flex items-center gap-2">
			<span
				class={cn(
					'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
					'bg-violet-500/10 text-violet-600 dark:text-violet-400',
					'border border-violet-500/20 text-sm font-medium'
				)}
			>
				<Briefcase class="h-3.5 w-3.5" />
				Profissional com Deficiência (PCD)
			</span>
		</div>

		<!-- Name with gradient -->
		<h1
			class={cn(
				'mb-6 text-6xl font-bold md:text-7xl lg:text-8xl',
				'bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent',
				'transition-all duration-300',
				mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
			)}
		>
			Gabriel Maia
		</h1>

		<!-- Dynamic role -->
		<div class="mb-8 h-12">
			<p
				class={cn(
					'text-muted-foreground text-2xl transition-all duration-500 md:text-3xl',
					mounted ? 'opacity-100' : 'opacity-0'
				)}
			>
				{roles[textIndex]}
			</p>
		</div>

		<!-- Description -->
		<p
			class={cn(
				'text-muted-foreground mx-auto mb-8 max-w-3xl text-lg leading-relaxed md:text-xl',
				'transition-all delay-300 duration-700',
				mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
			)}
		>
			+6 anos transformando ideias em produtos digitais de alto impacto. Especializado em
			arquiteturas escaláveis, microsserviços e soluções cloud-native.
		</p>

		<!-- Location -->
		<div
			class={cn(
				'text-muted-foreground mb-10 flex items-center justify-center gap-2',
				'transition-all delay-500 duration-700',
				mounted ? 'opacity-100' : 'opacity-0'
			)}
		>
			<MapPin class="h-4 w-4" />
			<span>Capão Bonito, São Paulo, Brasil</span>
		</div>

		<!-- CTA Buttons -->
		<div
			class={cn(
				'flex flex-wrap items-center justify-center gap-4',
				'transition-all delay-700 duration-700',
				mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
			)}
		>
			<a
				href="https://github.com/gabrielmaialva33"
				target="_blank"
				rel="noopener noreferrer"
				class={cn(
					'inline-flex items-center gap-2 rounded-lg px-6 py-3',
					'bg-gradient-to-r from-violet-600 to-cyan-500 font-medium text-white',
					'transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25',
					'hover:scale-105 active:scale-95'
				)}
			>
				<Github class="h-5 w-5" />
				GitHub
			</a>

			<a
				href="https://linkedin.com/in/maia-gabriel-183984239"
				target="_blank"
				rel="noopener noreferrer"
				class={cn(
					'inline-flex items-center gap-2 rounded-lg px-6 py-3',
					'border-border bg-background/50 border backdrop-blur-sm',
					'hover:bg-accent hover:text-accent-foreground transition-all duration-300',
					'hover:scale-105 active:scale-95'
				)}
			>
				<Linkedin class="h-5 w-5" />
				LinkedIn
			</a>

			<a
				href="https://wa.me/5515997204738"
				target="_blank"
				rel="noopener noreferrer"
				class={cn(
					'inline-flex items-center gap-2 rounded-lg px-6 py-3',
					'border-border bg-background/50 border backdrop-blur-sm',
					'hover:bg-accent hover:text-accent-foreground transition-all duration-300',
					'hover:scale-105 active:scale-95'
				)}
			>
				<Phone class="h-5 w-5" />
				WhatsApp
			</a>

			<a
				href="mailto:gabrielmaialva33@gmail.com"
				class={cn(
					'inline-flex items-center gap-2 rounded-lg px-6 py-3',
					'border-border bg-background/50 border backdrop-blur-sm',
					'hover:bg-accent hover:text-accent-foreground transition-all duration-300',
					'hover:scale-105 active:scale-95'
				)}
			>
				<Mail class="h-5 w-5" />
				E-mail
			</a>
		</div>

		<!-- Scroll indicator -->
		<div
			class={cn(
				'absolute bottom-8 left-1/2 -translate-x-1/2',
				'transition-all delay-1000 duration-1000',
				mounted ? 'opacity-100' : 'opacity-0'
			)}
		>
			<div class="animate-bounce">
				<svg
					class="text-muted-foreground h-6 w-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes animation-delay-2000 {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}

	.animation-delay-2000 {
		animation: animation-delay-2000 2s ease-in-out infinite;
		animation-delay: 1s;
	}
</style>
