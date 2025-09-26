<script lang="ts">
	import { Send, MessageCircle, Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-svelte';
	import { cn } from '$lib/utils';

	let formData = $state({
		name: '',
		email: '',
		company: '',
		phone: '',
		projectType: '',
		budget: '',
		message: ''
	});

	let isSubmitting = $state(false);
	let isSubmitted = $state(false);

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1500));

		isSubmitting = false;
		isSubmitted = true;

		// Reset form after 3 seconds
		setTimeout(() => {
			isSubmitted = false;
			formData = {
				name: '',
				email: '',
				company: '',
				phone: '',
				projectType: '',
				budget: '',
				message: ''
			};
		}, 3000);
	}

	function openWhatsApp() {
		const phone = '5515996241329';
		const message = encodeURIComponent(
			'Olá! Gostaria de saber mais sobre os serviços da Ma.ia.'
		);
		window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
	}
</script>

<section
	id="contact"
	class="from-primary/5 via-background to-primary/5 bg-gradient-to-br px-4 py-20"
>
	<div class="mx-auto max-w-6xl">
		<div class="mb-12 text-center">
			<div
				class="border-primary/20 bg-primary/5 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
			>
				<Send class="text-primary h-4 w-4" />
				<span>Vamos Conversar</span>
			</div>
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">
				Comece seu Projeto
				<span class="gradient-text">Hoje Mesmo</span>
			</h2>
			<p class="text-muted-foreground mx-auto max-w-2xl text-lg">
				Resposta em até 2 horas úteis. Sem compromisso, sem custo inicial.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2">
			<div>
				<form onsubmit={handleSubmit} class="space-y-4">
					<div class="grid grid-cols-2 gap-4">
						<div>
							<label for="name" class="mb-2 block text-sm font-medium"> Nome Completo * </label>
							<input
								id="name"
								type="text"
								bind:value={formData.name}
								required
								class="border-border bg-background focus:ring-primary w-full rounded-lg border px-4 py-2 transition-all focus:border-transparent focus:ring-2"
								placeholder="João Silva"
							/>
						</div>
						<div>
							<label for="email" class="mb-2 block text-sm font-medium"> E-mail * </label>
							<input
								id="email"
								type="email"
								bind:value={formData.email}
								required
								class="border-border bg-background focus:ring-primary w-full rounded-lg border px-4 py-2 transition-all focus:border-transparent focus:ring-2"
								placeholder="joao@empresa.com"
							/>
						</div>
					</div>

					<div class="grid grid-cols-2 gap-4">
						<div>
							<label for="company" class="mb-2 block text-sm font-medium"> Empresa </label>
							<input
								id="company"
								type="text"
								bind:value={formData.company}
								class="border-border bg-background focus:ring-primary w-full rounded-lg border px-4 py-2 transition-all focus:border-transparent focus:ring-2"
								placeholder="Sua Empresa"
							/>
						</div>
						<div>
							<label for="phone" class="mb-2 block text-sm font-medium"> WhatsApp </label>
							<input
								id="phone"
								type="tel"
								bind:value={formData.phone}
								class="border-border bg-background focus:ring-primary w-full rounded-lg border px-4 py-2 transition-all focus:border-transparent focus:ring-2"
								placeholder="(11) 99999-9999"
							/>
						</div>
					</div>

					<div class="grid grid-cols-2 gap-4">
						<div>
							<label for="projectType" class="mb-2 block text-sm font-medium">
								Tipo de Projeto *
							</label>
							<select
								id="projectType"
								bind:value={formData.projectType}
								required
								class="border-border bg-background focus:ring-primary w-full rounded-lg border px-4 py-2 transition-all focus:border-transparent focus:ring-2"
							>
								<option value="">Selecione...</option>
								<option value="web">Aplicação Web</option>
								<option value="mobile">App Mobile</option>
								<option value="ai">IA/Machine Learning</option>
								<option value="automation">Automação</option>
								<option value="consulting">Consultoria</option>
								<option value="other">Outro</option>
							</select>
						</div>
						<div>
							<label for="budget" class="mb-2 block text-sm font-medium">
								Orçamento Estimado
							</label>
							<select
								id="budget"
								bind:value={formData.budget}
								class="border-border bg-background focus:ring-primary w-full rounded-lg border px-4 py-2 transition-all focus:border-transparent focus:ring-2"
							>
								<option value="">Selecione...</option>
								<option value="10-30">R$ 10k - 30k</option>
								<option value="30-50">R$ 30k - 50k</option>
								<option value="50-100">R$ 50k - 100k</option>
								<option value="100+">R$ 100k+</option>
								<option value="discuss">A definir</option>
							</select>
						</div>
					</div>

					<div>
						<label for="message" class="mb-2 block text-sm font-medium">
							Descreva seu Projeto *
						</label>
						<textarea
							id="message"
							bind:value={formData.message}
							required
							rows="4"
							class="border-border bg-background focus:ring-primary w-full resize-none rounded-lg border px-4 py-2 transition-all focus:border-transparent focus:ring-2"
							placeholder="Conte-nos sobre seu projeto, desafios e objetivos..."
						></textarea>
					</div>

					<button
						type="submit"
						disabled={isSubmitting || isSubmitted}
						class={cn(
							'w-full rounded-lg px-6 py-3 font-semibold transition-all duration-300',
							'flex items-center justify-center gap-2',
							isSubmitted
								? 'bg-green-500 text-white'
								: 'bg-primary text-primary-foreground hover:bg-primary/90',
							(isSubmitting || isSubmitted) && 'cursor-not-allowed opacity-75'
						)}
					>
						{#if isSubmitting}
							<div
								class="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"
							></div>
							<span>Enviando...</span>
						{:else if isSubmitted}
							<CheckCircle class="h-5 w-5" />
							<span>Mensagem Enviada!</span>
						{:else}
							<Send class="h-5 w-5" />
							<span>Enviar Proposta</span>
						{/if}
					</button>
				</form>

				<div class="bg-primary/5 border-primary/20 mt-6 rounded-lg border p-4">
					<p class="text-muted-foreground text-sm">
						<strong class="text-foreground">Garantia MAIA:</strong> Desenvolvemos 50% do projeto antes
						do primeiro pagamento. Zero risco para você.
					</p>
				</div>
			</div>

			<div>
				<div class="bg-card border-border mb-6 rounded-lg border p-6">
					<h3 class="mb-6 text-xl font-semibold">Prefere WhatsApp?</h3>
					<button
						onclick={openWhatsApp}
						class="flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-green-600"
					>
						<MessageCircle class="h-5 w-5" />
						<span>Iniciar Conversa no WhatsApp</span>
					</button>
					<p class="text-muted-foreground mt-3 text-center text-sm">
						Resposta imediata em horário comercial
					</p>
				</div>

				<div class="space-y-4">
					<div class="flex items-start gap-4">
						<div class="bg-primary/10 rounded-lg p-2">
							<Phone class="text-primary h-5 w-5" />
						</div>
						<div>
							<p class="font-semibold">Telefone</p>
							<p class="text-muted-foreground text-sm">+55 15 99624-1329</p>
						</div>
					</div>

					<div class="flex items-start gap-4">
						<div class="bg-primary/10 rounded-lg p-2">
							<Mail class="text-primary h-5 w-5" />
						</div>
						<div>
							<p class="font-semibold">E-mail</p>
							<p class="text-muted-foreground text-sm">contato@maiasolutions.tech</p>
						</div>
					</div>

					<div class="flex items-start gap-4">
						<div class="bg-primary/10 rounded-lg p-2">
							<MapPin class="text-primary h-5 w-5" />
						</div>
						<div>
							<p class="font-semibold">Localização</p>
							<p class="text-muted-foreground text-sm">São Paulo, Brasil</p>
							<p class="text-muted-foreground text-xs">Atendimento remoto para todo Brasil</p>
						</div>
					</div>

					<div class="flex items-start gap-4">
						<div class="bg-primary/10 rounded-lg p-2">
							<Clock class="text-primary h-5 w-5" />
						</div>
						<div>
							<p class="font-semibold">Horário de Atendimento</p>
							<p class="text-muted-foreground text-sm">Segunda a Sexta: 9h - 18h</p>
							<p class="text-muted-foreground text-sm">Sábado: 9h - 13h</p>
						</div>
					</div>
				</div>

				<div class="from-primary/10 to-primary/5 mt-6 rounded-lg bg-gradient-to-r p-4">
					<p class="mb-1 text-sm font-semibold">CNPJ: 40.144.618/0001-40</p>
					<p class="text-muted-foreground text-xs">
						Ma.ia - Tecnologia e Inovação<br />
						Agente Comercial: Geovane Aparecido de Oliveira
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
