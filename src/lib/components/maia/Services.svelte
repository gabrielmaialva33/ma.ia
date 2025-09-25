<script lang="ts">
	import { Code2, Bot, Workflow, Users, Sparkles, Shield, TrendingUp, Zap } from 'lucide-svelte';
	import { cn } from '$lib/utils';

	const services = [
		{
			icon: Code2,
			title: 'Desenvolvimento de Software',
			description:
				'Aplicações web e mobile sob medida usando tecnologias modernas como React, Node.js, Go e Python.',
			features: ['APIs RESTful e GraphQL', 'Microserviços', 'Cloud Native', 'DevOps'],
			highlight: true
		},
		{
			icon: Bot,
			title: 'Inteligência Artificial',
			description:
				'Soluções de IA para automatizar processos e extrair insights valiosos dos seus dados.',
			features: ['ChatBots Inteligentes', 'Análise Preditiva', 'Computer Vision', 'NLP']
		},
		{
			icon: Workflow,
			title: 'Automação de Processos',
			description: 'Automatize tarefas repetitivas e integre sistemas para aumentar a eficiência.',
			features: ['RPA', 'Integração de APIs', 'Workflows Automatizados', 'Webhooks']
		},
		{
			icon: Users,
			title: 'Consultoria Tecnológica',
			description: 'Orientação estratégica para transformação digital e escolhas tecnológicas.',
			features: ['Arquitetura de Software', 'Migração Cloud', 'Code Review', 'Tech Stack']
		}
	];

	function scrollToContact() {
		document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<section id="services" class="bg-background px-4 py-20">
	<div class="mx-auto max-w-6xl">
		<div class="mb-12 text-center">
			<div
				class="border-border bg-card/50 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
			>
				<Sparkles class="text-primary h-4 w-4" />
				<span>Soluções End-to-End</span>
			</div>
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">
				Serviços que
				<span class="gradient-text">Transformam Negócios</span>
			</h2>
			<p class="text-muted-foreground mx-auto max-w-2xl text-lg">
				Expertise completa para levar sua empresa ao próximo nível tecnológico.
			</p>
		</div>

		<div class="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
			{#each services as service}
				<div
					class={cn(
						'group bg-card rounded-lg border p-6 transition-all duration-300',
						'hover:border-primary/50 hover:scale-105 hover:shadow-xl',
						service.highlight && 'border-primary from-primary/5 bg-gradient-to-br to-transparent'
					)}
				>
					<div class="mb-4 flex items-start gap-4">
						<div class="bg-primary/10 group-hover:bg-primary/20 rounded-lg p-3 transition-colors">
							<svelte:component this={service.icon} class="text-primary h-6 w-6" />
						</div>
						<div class="flex-1">
							<h3 class="mb-2 flex items-center gap-2 text-xl font-semibold">
								{service.title}
								{#if service.highlight}
									<span class="bg-primary/20 text-primary rounded-full px-2 py-1 text-xs">
										Mais Popular
									</span>
								{/if}
							</h3>
							<p class="text-muted-foreground mb-4">{service.description}</p>
							<div class="flex flex-wrap gap-2">
								{#each service.features as feature}
									<span class="bg-background border-border rounded-md border px-2 py-1 text-xs">
										{feature}
									</span>
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div
			class="from-primary/10 via-primary/5 to-primary/10 rounded-lg bg-gradient-to-r p-8 text-center"
		>
			<div class="mx-auto max-w-3xl">
				<h3 class="mb-4 text-2xl font-bold">Não encontrou o que procura?</h3>
				<p class="text-muted-foreground mb-6">
					Nossa equipe está pronta para criar soluções personalizadas para seu desafio específico.
				</p>
				<button
					onclick={scrollToContact}
					class="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all"
				>
					<Zap class="h-5 w-5" />
					Solicitar Proposta Personalizada
				</button>
			</div>
		</div>
	</div>
</section>
