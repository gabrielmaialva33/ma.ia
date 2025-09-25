<script lang="ts">
	import { ChevronDown, Shield, HelpCircle, CheckCircle } from 'lucide-svelte';
	import { cn } from '$lib/utils';

	let openIndex = $state<number | null>(null);

	const faqs = [
		{
			question: 'Como funciona o modelo "Desenvolva Primeiro, Pague Depois"?',
			answer:
				'Desenvolvemos 50% do seu projeto sem custo inicial. Você só paga quando aprovar o resultado. Se não gostar, não paga nada. É nossa garantia de qualidade e compromisso com seu sucesso.'
		},
		{
			question: 'Quanto tempo leva para ter um MVP funcional?',
			answer:
				'Entregamos MVPs funcionais entre 15 a 30 dias, dependendo da complexidade. Nossa metodologia ágil permite entregas rápidas sem comprometer a qualidade.'
		},
		{
			question: 'Quais tecnologias vocês dominam?',
			answer:
				'Trabalhamos com todo o ecossistema moderno: React, Vue, Svelte, Node.js, Go, Python, AWS, GCP, Azure, e tecnologias de IA como TensorFlow e OpenAI. Adaptamos a stack às necessidades do projeto.'
		},
		{
			question: 'Como é o suporte após a entrega?',
			answer:
				'Oferecemos 90 dias de suporte técnico gratuito após a entrega. Isso inclui correções de bugs, ajustes menores e orientação técnica. Após esse período, oferecemos planos de manutenção personalizados.'
		},
		{
			question: 'Vocês trabalham com empresas de que tamanho?',
			answer:
				'Atendemos desde startups até grandes corporações. Nossa abordagem flexível se adapta a diferentes realidades e orçamentos, sempre focando em entregar o máximo valor.'
		},
		{
			question: 'Como garantem a segurança e propriedade intelectual?',
			answer:
				'Assinamos NDA antes de qualquer discussão técnica. Todo código desenvolvido é 100% propriedade do cliente. Seguimos as melhores práticas de segurança incluindo ISO 27001.'
		},
		{
			question: 'E se eu precisar escalar rapidamente?',
			answer:
				'Nossa arquitetura é cloud-native e preparada para escala desde o início. Utilizamos microserviços, containers e auto-scaling para garantir que sua aplicação cresça com seu negócio.'
		},
		{
			question: 'Vocês fazem integração com sistemas legados?',
			answer:
				'Sim! Temos experiência em integrar com ERPs, CRMs e sistemas legados diversos. Criamos APIs e middlewares para garantir comunicação perfeita entre sistemas.'
		}
	];

	const guarantees = [
		{
			icon: Shield,
			title: 'Garantia de Satisfação',
			description: 'Se não gostar do resultado, não paga. Simples assim.'
		},
		{
			icon: CheckCircle,
			title: 'Código Limpo e Documentado',
			description: 'Todo código segue padrões de qualidade e vem com documentação completa.'
		},
		{
			icon: Shield,
			title: 'Propriedade Intelectual',
			description: '100% do código desenvolvido é propriedade sua, com transferência total.'
		},
		{
			icon: CheckCircle,
			title: 'Suporte Pós-Entrega',
			description: '90 dias de suporte técnico gratuito para garantir sucesso na implementação.'
		}
	];

	function toggleFAQ(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<section id="faq" class="bg-background px-4 py-20">
	<div class="mx-auto max-w-6xl">
		<div class="mb-12 text-center">
			<div
				class="border-border bg-card/50 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
			>
				<HelpCircle class="text-primary h-4 w-4" />
				<span>Tire suas Dúvidas</span>
			</div>
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">
				Perguntas
				<span class="gradient-text">Frequentes</span>
			</h2>
			<p class="text-muted-foreground mx-auto max-w-2xl text-lg">
				Transparência total em cada etapa do processo. Sem letras miúdas.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2">
			<div>
				<h3 class="mb-6 text-xl font-semibold">FAQ</h3>
				<div class="space-y-4">
					{#each faqs as faq, index}
						<div class="border-border overflow-hidden rounded-lg border">
							<button
								onclick={() => toggleFAQ(index)}
								class="hover:bg-accent/50 flex w-full items-center justify-between p-4 text-left transition-colors"
							>
								<span class="font-medium">{faq.question}</span>
								<ChevronDown
									class={cn(
										'text-muted-foreground h-5 w-5 transition-transform duration-200',
										openIndex === index && 'rotate-180'
									)}
								/>
							</button>
							{#if openIndex === index}
								<div class="text-muted-foreground px-4 pb-4">
									{faq.answer}
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>

			<div>
				<h3 class="mb-6 text-xl font-semibold">Nossas Garantias</h3>
				<div class="space-y-4">
					{#each guarantees as guarantee}
						<div
							class="border-border bg-card rounded-lg border p-4 transition-all duration-300 hover:shadow-lg"
						>
							<div class="flex items-start gap-4">
								<div class="bg-primary/10 rounded-lg p-2">
									<svelte:component this={guarantee.icon} class="text-primary h-5 w-5" />
								</div>
								<div>
									<h4 class="mb-1 font-semibold">{guarantee.title}</h4>
									<p class="text-muted-foreground text-sm">{guarantee.description}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<div
					class="from-primary/10 via-primary/5 to-primary/10 mt-6 rounded-lg bg-gradient-to-r p-6"
				>
					<h4 class="mb-2 font-semibold">Ainda tem dúvidas?</h4>
					<p class="text-muted-foreground mb-4 text-sm">
						Nossa equipe está pronta para esclarecer qualquer questão sobre seu projeto.
					</p>
					<button
						onclick={() =>
							document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
						class="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all"
					>
						<HelpCircle class="h-4 w-4" />
						Falar com Especialista
					</button>
				</div>
			</div>
		</div>
	</div>
</section>
