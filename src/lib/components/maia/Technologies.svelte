<script lang="ts">
	import { cn } from '$lib/utils';

	const technologies = {
		Frontend: [
			{
				name: 'React',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
			},
			{
				name: 'Vue.js',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
			},
			{
				name: 'Svelte',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg'
			},
			{
				name: 'Next.js',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
			},
			{
				name: 'Angular',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
			},
			{
				name: 'TypeScript',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
			}
		],
		Backend: [
			{
				name: 'Node.js',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
			},
			{ name: 'Go', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
			{
				name: 'Python',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
			},
			{
				name: 'Java',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
			},
			{
				name: 'Rust',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg'
			},
			{
				name: 'PHP',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
			}
		],
		Database: [
			{
				name: 'PostgreSQL',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
			},
			{
				name: 'MongoDB',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
			},
			{
				name: 'Redis',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
			},
			{
				name: 'MySQL',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
			},
			{
				name: 'Elasticsearch',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg'
			},
			{
				name: 'DynamoDB',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg'
			}
		],
		'Cloud & DevOps': [
			{
				name: 'AWS',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'
			},
			{
				name: 'Google Cloud',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'
			},
			{
				name: 'Azure',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
			},
			{
				name: 'Docker',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
			},
			{
				name: 'Kubernetes',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg'
			},
			{
				name: 'Terraform',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg'
			}
		],
		'AI & Machine Learning': [
			{
				name: 'TensorFlow',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
			},
			{
				name: 'PyTorch',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg'
			},
			{
				name: 'OpenAI',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg'
			},
			{
				name: 'Pandas',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg'
			},
			{
				name: 'NumPy',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg'
			},
			{
				name: 'Jupyter',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg'
			}
		],
		Mobile: [
			{
				name: 'React Native',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
			},
			{
				name: 'Flutter',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'
			},
			{
				name: 'Swift',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg'
			},
			{
				name: 'Kotlin',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg'
			},
			{
				name: 'Android',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg'
			},
			{
				name: 'iOS',
				logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg'
			}
		]
	};

	let selectedCategory = $state('Frontend');
</script>

<section id="technologies" class="bg-background px-4 py-20">
	<div class="mx-auto max-w-6xl">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">
				Stack Tecnológico
				<span class="gradient-text">Completo</span>
			</h2>
			<p class="text-muted-foreground mx-auto max-w-2xl text-lg">
				Dominamos as tecnologias mais modernas para entregar soluções robustas e escaláveis.
			</p>
		</div>

		<div class="mb-8 flex flex-wrap justify-center gap-2">
			{#each Object.keys(technologies) as category}
				<button
					onclick={() => (selectedCategory = category)}
					class={cn(
						'rounded-lg px-4 py-2 font-medium transition-all duration-200',
						selectedCategory === category
							? 'bg-primary text-primary-foreground'
							: 'bg-card border-border hover:bg-accent border'
					)}
				>
					{category}
				</button>
			{/each}
		</div>

		<div class="grid grid-cols-3 gap-4 md:grid-cols-6">
			{#each technologies[selectedCategory] as tech}
				<div
					class={cn(
						'group bg-card border-border rounded-lg border p-4',
						'hover:border-primary/50 hover:scale-110 hover:shadow-lg',
						'cursor-pointer transition-all duration-300'
					)}
				>
					<div class="flex flex-col items-center gap-2">
						<img
							src={tech.logo}
							alt={tech.name}
							class="h-12 w-12 object-contain filter transition-transform duration-300 group-hover:scale-125"
						/>
						<span
							class="text-muted-foreground group-hover:text-foreground text-xs transition-colors"
						>
							{tech.name}
						</span>
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-12 text-center">
			<p class="text-muted-foreground mb-4">Não encontrou sua tecnologia preferida?</p>
			<p class="text-primary text-lg font-semibold">
				Nossa equipe se adapta às necessidades do seu projeto.
			</p>
		</div>
	</div>
</section>
