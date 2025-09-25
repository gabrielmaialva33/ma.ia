<script lang="ts">
	import { Calculator, TrendingUp, DollarSign, Clock, Users } from 'lucide-svelte';
	import { cn } from '$lib/utils';

	let hoursPerWeek = $state(40);
	let hourlyRate = $state(150);
	let automationPercentage = $state(30);
	let projectDuration = $state(3);

	let manualCost = $derived(hoursPerWeek * hourlyRate * projectDuration * 4);
	let automatedHours = $derived(hoursPerWeek * (1 - automationPercentage / 100));
	let automatedCost = $derived(automatedHours * hourlyRate * projectDuration * 4);
	let savings = $derived(manualCost - automatedCost);
	let roi = $derived(((savings / automatedCost) * 100).toFixed(0));
	let paybackMonths = $derived((automatedCost / (savings / projectDuration)).toFixed(1));

	function formatCurrency(value: number) {
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(value);
	}
</script>

<section
	id="roi-calculator"
	class="from-primary/5 via-background to-primary/5 bg-gradient-to-br px-4 py-20"
>
	<div class="mx-auto max-w-6xl">
		<div class="mb-12 text-center">
			<div
				class="border-primary/20 bg-primary/5 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
			>
				<Calculator class="text-primary h-4 w-4" />
				<span>Calculadora Interativa</span>
			</div>
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">
				Calcule seu
				<span class="gradient-text">Retorno sobre Investimento</span>
			</h2>
			<p class="text-muted-foreground mx-auto max-w-2xl text-lg">
				Veja quanto sua empresa pode economizar com automação e otimização de processos.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2">
			<div class="bg-card border-border rounded-lg border p-6">
				<h3 class="mb-6 flex items-center gap-2 text-xl font-semibold">
					<DollarSign class="text-primary h-5 w-5" />
					Seus Parâmetros
				</h3>

				<div class="space-y-6">
					<div>
						<label class="mb-2 block text-sm font-medium"> Horas de trabalho por semana </label>
						<input type="range" bind:value={hoursPerWeek} min="10" max="80" class="w-full" />
						<div class="text-muted-foreground mt-1 flex justify-between text-sm">
							<span>10h</span>
							<span class="text-foreground font-semibold">{hoursPerWeek}h</span>
							<span>80h</span>
						</div>
					</div>

					<div>
						<label class="mb-2 block text-sm font-medium"> Custo por hora (R$) </label>
						<input type="range" bind:value={hourlyRate} min="50" max="500" class="w-full" />
						<div class="text-muted-foreground mt-1 flex justify-between text-sm">
							<span>R$ 50</span>
							<span class="text-foreground font-semibold">R$ {hourlyRate}</span>
							<span>R$ 500</span>
						</div>
					</div>

					<div>
						<label class="mb-2 block text-sm font-medium"> Automação de processos (%) </label>
						<input
							type="range"
							bind:value={automationPercentage}
							min="10"
							max="70"
							class="w-full"
						/>
						<div class="text-muted-foreground mt-1 flex justify-between text-sm">
							<span>10%</span>
							<span class="text-foreground font-semibold">{automationPercentage}%</span>
							<span>70%</span>
						</div>
					</div>

					<div>
						<label class="mb-2 block text-sm font-medium"> Duração do projeto (meses) </label>
						<input type="range" bind:value={projectDuration} min="1" max="12" class="w-full" />
						<div class="text-muted-foreground mt-1 flex justify-between text-sm">
							<span>1 mês</span>
							<span class="text-foreground font-semibold">{projectDuration} meses</span>
							<span>12 meses</span>
						</div>
					</div>
				</div>
			</div>

			<div class="bg-card border-border rounded-lg border p-6">
				<h3 class="mb-6 flex items-center gap-2 text-xl font-semibold">
					<TrendingUp class="text-primary h-5 w-5" />
					Resultados Projetados
				</h3>

				<div class="space-y-4">
					<div class="bg-background border-border rounded-lg border p-4">
						<div class="mb-2 flex items-center justify-between">
							<span class="text-muted-foreground text-sm">Custo Manual</span>
							<span class="text-lg font-semibold">{formatCurrency(manualCost)}</span>
						</div>
						<div class="mb-2 flex items-center justify-between">
							<span class="text-muted-foreground text-sm">Custo com Automação</span>
							<span class="text-primary text-lg font-semibold">{formatCurrency(automatedCost)}</span
							>
						</div>
						<div class="border-border mt-2 border-t pt-2">
							<div class="flex items-center justify-between">
								<span class="text-sm font-medium">Economia Total</span>
								<span class="text-xl font-bold text-green-500">{formatCurrency(savings)}</span>
							</div>
						</div>
					</div>

					<div class="grid grid-cols-2 gap-4">
						<div class="bg-primary/10 rounded-lg p-4 text-center">
							<div class="text-primary mb-1 text-2xl font-bold">{roi}%</div>
							<div class="text-muted-foreground text-xs">ROI Projetado</div>
						</div>
						<div class="bg-primary/10 rounded-lg p-4 text-center">
							<div class="text-primary mb-1 text-2xl font-bold">{paybackMonths}</div>
							<div class="text-muted-foreground text-xs">Meses para Payback</div>
						</div>
					</div>

					<div class="from-primary/10 to-primary/5 rounded-lg bg-gradient-to-r p-4">
						<h4 class="mb-2 flex items-center gap-2 font-semibold">
							<Clock class="text-primary h-4 w-4" />
							Tempo Economizado
						</h4>
						<p class="text-muted-foreground text-sm">
							{((hoursPerWeek - automatedHours) * 4 * projectDuration).toFixed(0)} horas economizadas
							em {projectDuration}
							{projectDuration === 1 ? 'mês' : 'meses'}
						</p>
					</div>

					<div class="from-primary/10 to-primary/5 rounded-lg bg-gradient-to-r p-4">
						<h4 class="mb-2 flex items-center gap-2 font-semibold">
							<Users class="text-primary h-4 w-4" />
							Impacto na Equipe
						</h4>
						<p class="text-muted-foreground text-sm">
							Sua equipe pode focar em tarefas estratégicas enquanto processos repetitivos são
							automatizados
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-8 text-center">
			<p class="text-muted-foreground mb-4">
				Estes são apenas valores estimados. O ROI real pode ser ainda maior com nossa expertise.
			</p>
			<button
				onclick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
				class="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all"
			>
				<Calculator class="h-5 w-5" />
				Solicitar Análise Personalizada
			</button>
		</div>
	</div>
</section>
