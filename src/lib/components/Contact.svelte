<script lang="ts">
	import { cn } from '$lib/utils';
	import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2 } from '@lucide/svelte';

	let formData = $state({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	let sending = $state(false);
	let sent = $state(false);

	function handleSubmit(e: Event) {
		e.preventDefault();

		// Construct mailto link
		const subject = encodeURIComponent(formData.subject || 'Contato via Portfólio');
		const body = encodeURIComponent(
			`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
		);

		window.location.href = `mailto:gabrielmaialva33@gmail.com?subject=${subject}&body=${body}`;

		// Show success message
		sent = true;
		setTimeout(() => {
			sent = false;
			formData = { name: '', email: '', subject: '', message: '' };
		}, 5000);
	}
</script>

<section class="px-4 py-20" id="contact">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">
			<span class="gradient-text">Entre em Contato</span>
		</h2>

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
			<!-- Contact Info -->
			<div class="space-y-8">
				<div>
					<h3 class="mb-4 text-2xl font-semibold">Vamos conversar!</h3>
					<p class="text-muted-foreground mb-6">
						Estou sempre aberto a novas oportunidades e projetos desafiadores. Se você tem uma ideia
						interessante ou precisa de ajuda com desenvolvimento, não hesite em entrar em contato.
					</p>
				</div>

				<!-- Contact Items -->
				<div class="space-y-4">
					<a
						href="mailto:gabrielmaialva33@gmail.com"
						class={cn(
							'flex items-center gap-4 rounded-lg p-4',
							'bg-card border-border border',
							'transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10',
							'group'
						)}
					>
						<div class="rounded-lg bg-violet-500/10 p-3 text-violet-600 dark:text-violet-400">
							<Mail class="h-5 w-5" />
						</div>
						<div>
							<p class="text-muted-foreground text-sm">E-mail</p>
							<p class="group-hover:gradient-text font-medium transition-all">
								gabrielmaialva33@gmail.com
							</p>
						</div>
					</a>

					<a
						href="https://wa.me/5515997204738"
						target="_blank"
						rel="noopener noreferrer"
						class={cn(
							'flex items-center gap-4 rounded-lg p-4',
							'bg-card border-border border',
							'transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10',
							'group'
						)}
					>
						<div class="rounded-lg bg-green-500/10 p-3 text-green-600 dark:text-green-400">
							<Phone class="h-5 w-5" />
						</div>
						<div>
							<p class="text-muted-foreground text-sm">WhatsApp</p>
							<p class="group-hover:gradient-text font-medium transition-all">+55 15 99720-4738</p>
						</div>
					</a>

					<div class={cn('flex items-center gap-4 rounded-lg p-4', 'bg-card border-border border')}>
						<div class="rounded-lg bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400">
							<MapPin class="h-5 w-5" />
						</div>
						<div>
							<p class="text-muted-foreground text-sm">Localização</p>
							<p class="font-medium">Capão Bonito, São Paulo, Brasil</p>
							<p class="text-muted-foreground mt-1 text-xs">Disponível para trabalho remoto</p>
						</div>
					</div>
				</div>

				<!-- Social Links -->
				<div>
					<h4 class="mb-4 font-medium">Conecte-se comigo</h4>
					<div class="flex gap-4">
						<a
							href="https://github.com/gabrielmaialva33"
							target="_blank"
							rel="noopener noreferrer"
							class={cn(
								'rounded-lg p-3',
								'bg-secondary hover:bg-accent transition-all duration-300',
								'hover:scale-110 active:scale-95'
							)}
							aria-label="GitHub"
						>
							<Github class="h-5 w-5" />
						</a>
						<a
							href="https://linkedin.com/in/maia-gabriel-183984239"
							target="_blank"
							rel="noopener noreferrer"
							class={cn(
								'rounded-lg p-3',
								'bg-secondary hover:bg-accent transition-all duration-300',
								'hover:scale-110 active:scale-95'
							)}
							aria-label="LinkedIn"
						>
							<Linkedin class="h-5 w-5" />
						</a>
					</div>
				</div>
			</div>

			<!-- Contact Form -->
			<div>
				<form onsubmit={handleSubmit} class="space-y-6">
					<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
						<div>
							<label for="name" class="mb-2 block text-sm font-medium">Nome</label>
							<input
								type="text"
								id="name"
								bind:value={formData.name}
								required
								class={cn(
									'w-full rounded-lg px-4 py-2',
									'bg-secondary border-border border',
									'focus:ring-2 focus:ring-violet-500 focus:outline-none',
									'placeholder:text-muted-foreground'
								)}
								placeholder="Seu nome"
							/>
						</div>
						<div>
							<label for="email" class="mb-2 block text-sm font-medium">E-mail</label>
							<input
								type="email"
								id="email"
								bind:value={formData.email}
								required
								class={cn(
									'w-full rounded-lg px-4 py-2',
									'bg-secondary border-border border',
									'focus:ring-2 focus:ring-violet-500 focus:outline-none',
									'placeholder:text-muted-foreground'
								)}
								placeholder="seu@email.com"
							/>
						</div>
					</div>

					<div>
						<label for="subject" class="mb-2 block text-sm font-medium">Assunto</label>
						<input
							type="text"
							id="subject"
							bind:value={formData.subject}
							class={cn(
								'w-full rounded-lg px-4 py-2',
								'bg-secondary border-border border',
								'focus:ring-2 focus:ring-violet-500 focus:outline-none',
								'placeholder:text-muted-foreground'
							)}
							placeholder="Sobre o que você quer falar?"
						/>
					</div>

					<div>
						<label for="message" class="mb-2 block text-sm font-medium">Mensagem</label>
						<textarea
							id="message"
							bind:value={formData.message}
							required
							rows="6"
							class={cn(
								'w-full resize-none rounded-lg px-4 py-2',
								'bg-secondary border-border border',
								'focus:ring-2 focus:ring-violet-500 focus:outline-none',
								'placeholder:text-muted-foreground'
							)}
							placeholder="Sua mensagem..."
						></textarea>
					</div>

					<button
						type="submit"
						disabled={sending || sent}
						class={cn(
							'inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3',
							'font-medium transition-all duration-300',
							sent
								? 'bg-green-500 text-white'
								: 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-violet-500/25',
							'hover:scale-105 active:scale-95',
							'disabled:cursor-not-allowed disabled:opacity-50'
						)}
					>
						{#if sent}
							<CheckCircle2 class="h-5 w-5" />
							Mensagem Enviada!
						{:else}
							<Send class="h-5 w-5" />
							Enviar Mensagem
						{/if}
					</button>
				</form>

				{#if sent}
					<p class="mt-4 text-center text-sm text-green-500">
						Obrigado pela mensagem! Entrarei em contato em breve.
					</p>
				{/if}
			</div>
		</div>
	</div>
</section>
