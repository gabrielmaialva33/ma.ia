<script lang="ts">
	import { MessageCircle, Code2, Eye, CreditCard, Rocket } from 'lucide-svelte';
	import { cn } from '$lib/utils';

	const steps = [
		{
			icon: MessageCircle,
			title: 'Conversa Inicial',
			description: 'Entendemos seu negócio e objetivos em uma reunião gratuita de 30 minutos.',
			time: 'Dia 1'
		},
		{
			icon: Code2,
			title: 'Desenvolvimento',
			description: 'Criamos 50% do seu projeto com atualizações diárias e acesso total ao código.',
			time: 'Dias 2-15'
		},
		{
			icon: Eye,
			title: 'Validação',
			description: 'Você testa, valida e solicita ajustes. Garantimos sua satisfação completa.',
			time: 'Dias 16-20'
		},
		{
			icon: CreditCard,
			title: 'Pagamento',
			description: 'Pague apenas quando estiver 100% satisfeito com o resultado entregue.',
			time: 'Dia 21'
		},
		{
			icon: Rocket,
			title: 'Lançamento',
			description: 'Finalizamos o projeto e garantimos 90 dias de suporte técnico gratuito.',
			time: 'Dias 22-30'
		}
	];
</script>

<section id="how-it-works" class="bg-background/50 px-4 py-20">
	<div class="mx-auto max-w-6xl">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">
				Como Funciona o
				<span class="gradient-text">Desenvolvimento Sem Risco</span>
			</h2>
			<p class="text-muted-foreground mx-auto max-w-2xl text-lg">
				Processo transparente e focado em resultados. Você acompanha cada etapa.
			</p>
		</div>

		<div class="relative">
			<div
				class="bg-border absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 transform md:block"
			></div>

			{#each steps as step, index}
				<div
					class={cn(
						'relative mb-12 flex items-center last:mb-0',
						index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
					)}
				>
					<div class="flex-1 md:w-1/2">
						<div
							class={cn(
								'border-border bg-card rounded-lg border p-6',
								'transition-all duration-300 hover:scale-105 hover:shadow-lg',
								index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
							)}
						>
							<div class="flex items-start gap-4">
								<div class="bg-primary/10 rounded-lg p-3">
									<svelte:component this={step.icon} class="text-primary h-6 w-6" />
								</div>
								<div class="flex-1">
									<div class="mb-2 flex items-center justify-between">
										<h3 class="text-xl font-semibold">{step.title}</h3>
										<span class="text-primary text-sm font-medium">{step.time}</span>
									</div>
									<p class="text-muted-foreground">{step.description}</p>
								</div>
							</div>
						</div>
					</div>

					<div
						class="absolute left-1/2 hidden -translate-x-1/2 transform items-center justify-center md:flex"
					>
						<div
							class={cn(
								'border-primary bg-background h-12 w-12 rounded-full border-2',
								'text-primary flex items-center justify-center font-bold'
							)}
						>
							{index + 1}
						</div>
					</div>

					<div class="hidden flex-1 md:block md:w-1/2"></div>
				</div>
			{/each}
		</div>

		<div class="mt-12 text-center">
			<div
				class="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium"
			>
				<Rocket class="h-5 w-5" />
				<span>Tempo médio de entrega: 30 dias</span>
			</div>
		</div>
	</div>
</section>
