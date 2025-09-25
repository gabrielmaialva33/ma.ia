<script lang="ts">
	import { cn } from '$lib/utils';
	import { Calendar, MapPin, Building2, ChevronRight } from '@lucide/svelte';

	interface Experience {
		title: string;
		company: string;
		location: string;
		period: string;
		current?: boolean;
		description: string;
		achievements: string[];
		technologies: string[];
	}

	const experiences: Experience[] = [
		{
			title: 'Senior Software Developer (Contractor)',
			company: 'Wave Technologies',
			location: 'São Paulo, Brasil (Remoto)',
			period: 'Fevereiro 2025 - Atual',
			current: true,
			description:
				'Colaboração com stakeholders para definir o escopo e desenvolver APIs escaláveis.',
			achievements: [
				'Arquitetura e deploy em AWS e Azure, garantindo eficiência e segurança',
				'Modelagem e otimização de PostgreSQL, assegurando alta disponibilidade',
				'Implementação de microsserviços com Kafka para mensageria',
				'Liderança técnica na melhoria da infraestrutura com CI/CD'
			],
			technologies: ['Go', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Azure', 'PostgreSQL', 'Kafka']
		},
		{
			title: 'Desenvolvedor Backend',
			company: 'Yazo',
			location: 'Londrina, Paraná (Remoto)',
			period: 'Novembro 2020 - Fevereiro 2025',
			description:
				'Desenvolvimento de aplicações escaláveis atendendo mais de 5 milhões de usuários ativos.',
			achievements: [
				'Criação e manutenção de APIs RESTful e GraphQL usando Node.js, Go, e TypeScript',
				'Implementação de filas e eventos assíncronos com Redis',
				'Colaboração na redução de custos operacionais em nuvem (AWS e Azure)',
				'Aplicação de metodologias ágeis para garantir eficiência no ciclo de desenvolvimento',
				'Deploy e manutenção de aplicações em Google Play e Apple Store',
				'Criação do Yazo CLI - ferramenta de automação de publicações'
			],
			technologies: ['Node.js', 'Go', 'TypeScript', 'Redis', 'AWS', 'Azure', 'GraphQL', 'REST']
		}
	];

	const education = [
		{
			title: 'Tecnologia em Gestão de Tecnologia da Informação',
			institution: 'Fatec Tatuí',
			period: '2017 - 2021',
			icon: '🎓'
		},
		{
			title: 'Curso Técnico em Edificações',
			institution: 'ETEC Dr. Celso Charuri',
			period: '2016',
			icon: '🏗️'
		}
	];

	const certifications = [
		{
			title: 'Monitoria do Curso de GTI',
			institution: 'Fatec Tatuí',
			period: '2017',
			hours: '180h',
			description: 'Monitoria em Java e C, suporte técnico a professores e alunos'
		},
		{
			title: 'Difusores Culturais',
			institution: 'Secretaria da Cultura do Estado de São Paulo',
			period: '2018',
			hours: '119:30h',
			description: 'Monitoria e discussão sobre a importância da Língua Portuguesa'
		},
		{
			title: 'Fundamentos de TI e Lógica de Programação',
			institution: 'Fundação Bradesco',
			period: '2019',
			hours: '30h',
			description: 'Hardware, Software e fundamentos de programação'
		}
	];
</script>

<section class="px-4 py-20" id="experience">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">
			<span class="gradient-text">Experiência Profissional</span>
		</h2>

		<!-- Timeline -->
		<div class="relative">
			<!-- Timeline line -->
			<div
				class="absolute top-0 bottom-0 left-8 hidden w-0.5 bg-gradient-to-b from-violet-600 to-cyan-500 md:block"
			></div>

			<!-- Experience Items -->
			<div class="space-y-12">
				{#each experiences as exp, index}
					<div class="relative flex gap-8">
						<!-- Timeline dot -->
						<div class="hidden w-16 flex-shrink-0 items-start justify-center md:flex">
							<div
								class={cn(
									'h-4 w-4 rounded-full border-2',
									exp.current
										? 'animate-pulse-glow border-violet-600 bg-violet-600'
										: 'bg-background border-violet-600'
								)}
							></div>
						</div>

						<!-- Content -->
						<div
							class={cn(
								'border-border bg-card flex-1 rounded-lg border p-6',
								'transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10',
								'group'
							)}
						>
							<!-- Header -->
							<div class="mb-4 flex flex-wrap items-start justify-between gap-4">
								<div>
									<h3 class="group-hover:gradient-text mb-1 text-xl font-semibold transition-all">
										{exp.title}
									</h3>
									<div class="text-muted-foreground flex flex-wrap items-center gap-4 text-sm">
										<span class="flex items-center gap-1">
											<Building2 class="h-4 w-4" />
											{exp.company}
										</span>
										<span class="flex items-center gap-1">
											<MapPin class="h-4 w-4" />
											{exp.location}
										</span>
										<span class="flex items-center gap-1">
											<Calendar class="h-4 w-4" />
											{exp.period}
										</span>
									</div>
								</div>
								{#if exp.current}
									<span
										class="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500"
									>
										Atual
									</span>
								{/if}
							</div>

							<!-- Description -->
							<p class="text-muted-foreground mb-4">{exp.description}</p>

							<!-- Achievements -->
							<div class="mb-4 space-y-2">
								{#each exp.achievements as achievement}
									<div class="flex items-start gap-2 text-sm">
										<ChevronRight class="mt-0.5 h-4 w-4 flex-shrink-0 text-violet-500" />
										<span>{achievement}</span>
									</div>
								{/each}
							</div>

							<!-- Technologies -->
							<div class="flex flex-wrap gap-2">
								{#each exp.technologies as tech}
									<span
										class="bg-secondary rounded-full px-3 py-1 text-xs font-medium transition-colors hover:bg-violet-500/20"
									>
										{tech}
									</span>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Education Section -->
		<div class="mt-20">
			<h3 class="mb-8 text-center text-2xl font-bold">Formação Acadêmica</h3>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				{#each education as edu}
					<div
						class={cn(
							'border-border bg-card rounded-lg border p-6',
							'transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10'
						)}
					>
						<div class="flex items-start gap-4">
							<span class="text-3xl">{edu.icon}</span>
							<div>
								<h4 class="mb-1 font-semibold">{edu.title}</h4>
								<p class="text-muted-foreground text-sm">{edu.institution}</p>
								<p class="text-muted-foreground mt-1 text-xs">{edu.period}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Certifications -->
		<div class="mt-12">
			<h3 class="mb-8 text-center text-2xl font-bold">Certificações e Cursos</h3>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
				{#each certifications as cert}
					<div
						class={cn(
							'border-border bg-card rounded-lg border p-6',
							'transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10'
						)}
					>
						<h4 class="mb-2 font-semibold">{cert.title}</h4>
						<p class="text-muted-foreground mb-1 text-sm">{cert.institution}</p>
						<div class="text-muted-foreground flex items-center gap-4 text-xs">
							<span>{cert.period}</span>
							{#if cert.hours}
								<span>• {cert.hours}</span>
							{/if}
						</div>
						{#if cert.description}
							<p class="text-muted-foreground mt-3 text-sm">{cert.description}</p>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
