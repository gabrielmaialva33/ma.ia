<script lang="ts">
	import { cn } from '$lib/utils';
	import { Code2, Globe, Cloud, Database, MessageSquare, Wrench, Briefcase } from '@lucide/svelte';

	interface SkillCategory {
		title: string;
		icon: any;
		color: string;
		skills: string[];
	}

	const skillCategories: SkillCategory[] = [
		{
			title: 'Linguagens Backend',
			icon: Code2,
			color: 'violet',
			skills: ['Node.js', 'Go', 'Python', 'Elixir', 'TypeScript', 'JavaScript']
		},
		{
			title: 'Frontend',
			icon: Globe,
			color: 'cyan',
			skills: ['React.js', 'Next.js', 'React Native', 'Flutter', 'Svelte', 'Vue.js']
		},
		{
			title: 'Cloud & Infraestrutura',
			icon: Cloud,
			color: 'blue',
			skills: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD']
		},
		{
			title: 'Banco de Dados',
			icon: Database,
			color: 'green',
			skills: ['PostgreSQL', 'Redis', 'MongoDB', 'MySQL', 'Elasticsearch', 'DynamoDB']
		},
		{
			title: 'Mensageria & APIs',
			icon: MessageSquare,
			color: 'yellow',
			skills: ['Kafka', 'RabbitMQ', 'REST', 'GraphQL', 'WebSocket', 'gRPC']
		},
		{
			title: 'Ferramentas',
			icon: Wrench,
			color: 'orange',
			skills: ['Git', 'GitHub', 'Jira', 'Postman', 'JetBrains', 'VS Code']
		},
		{
			title: 'Metodologias',
			icon: Briefcase,
			color: 'purple',
			skills: ['Scrum', 'Kanban', 'TDD', 'Clean Architecture', 'DDD', 'Microservices']
		}
	];

	const getColorClasses = (color: string) => {
		const colors: Record<string, { bg: string; border: string; text: string }> = {
			violet: {
				bg: 'bg-violet-500/10',
				border: 'border-violet-500/20',
				text: 'text-violet-600 dark:text-violet-400'
			},
			cyan: {
				bg: 'bg-cyan-500/10',
				border: 'border-cyan-500/20',
				text: 'text-cyan-600 dark:text-cyan-400'
			},
			blue: {
				bg: 'bg-blue-500/10',
				border: 'border-blue-500/20',
				text: 'text-blue-600 dark:text-blue-400'
			},
			green: {
				bg: 'bg-green-500/10',
				border: 'border-green-500/20',
				text: 'text-green-600 dark:text-green-400'
			},
			yellow: {
				bg: 'bg-yellow-500/10',
				border: 'border-yellow-500/20',
				text: 'text-yellow-600 dark:text-yellow-400'
			},
			orange: {
				bg: 'bg-orange-500/10',
				border: 'border-orange-500/20',
				text: 'text-orange-600 dark:text-orange-400'
			},
			purple: {
				bg: 'bg-purple-500/10',
				border: 'border-purple-500/20',
				text: 'text-purple-600 dark:text-purple-400'
			}
		};
		return colors[color] || colors.violet;
	};
</script>

<section class="px-4 py-20" id="skills">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">
			<span class="gradient-text">Habilidades Técnicas</span>
		</h2>

		<!-- Skills Grid -->
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each skillCategories as category}
				{@const colorClasses = getColorClasses(category.color)}
				<div
					class={cn(
						'border-border bg-card rounded-lg border p-6',
						'transition-all duration-300 hover:shadow-lg',
						`hover:shadow-${category.color}-500/20`,
						'group'
					)}
				>
					<!-- Header -->
					<div class="mb-4 flex items-center gap-3">
						<div
							class={cn(
								'rounded-lg p-2.5',
								colorClasses.bg,
								colorClasses.text,
								'border',
								colorClasses.border
							)}
						>
							<svelte:component this={category.icon} class="h-5 w-5" />
						</div>
						<h3 class="text-lg font-semibold">{category.title}</h3>
					</div>

					<!-- Skills -->
					<div class="flex flex-wrap gap-2">
						{#each category.skills as skill}
							<span
								class={cn(
									'rounded-full px-3 py-1.5 text-sm font-medium',
									'bg-secondary hover:bg-accent hover:text-accent-foreground',
									'cursor-default transition-all duration-300',
									'hover:scale-105'
								)}
							>
								{skill}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<!-- Additional Skills Summary -->
		<div
			class="border-border mt-12 rounded-lg border bg-gradient-to-br from-violet-600/5 to-cyan-500/5 p-8"
		>
			<h3 class="mb-4 text-center text-xl font-semibold">Competências Adicionais</h3>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div>
					<h4 class="mb-3 font-medium text-violet-600 dark:text-violet-400">Produto & Gestão</h4>
					<ul class="text-muted-foreground space-y-2 text-sm">
						<li>• Análise de Requisitos e Gestão de Backlog</li>
						<li>• Histórias de Usuário e Testes de Aceitação (UAT)</li>
						<li>• Colaboração com stakeholders multidisciplinares</li>
						<li>• Transformação de requisitos de negócio em soluções técnicas</li>
					</ul>
				</div>
				<div>
					<h4 class="mb-3 font-medium text-cyan-600 dark:text-cyan-400">Arquitetura & Design</h4>
					<ul class="text-muted-foreground space-y-2 text-sm">
						<li>• Arquitetura de Microsserviços e Sistemas Distribuídos</li>
						<li>• Design Patterns e Clean Architecture</li>
						<li>• Otimização de Performance e Escalabilidade</li>
						<li>• Segurança e Compliance em aplicações</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
