<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { Moon, Sun } from '@lucide/svelte';
	import { cn } from '$lib/utils';

	let isDark = $state(true);

	$effect(() => {
		theme.subscribe((value) => {
			isDark = value === 'dark';
		});
	});

	function handleToggle() {
		theme.toggle();
	}
</script>

<button
	onclick={handleToggle}
	class={cn(
		'relative inline-flex h-10 w-10 items-center justify-center rounded-lg',
		'text-foreground/60 hover:text-foreground transition-colors',
		'hover:bg-accent hover:text-accent-foreground',
		'focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:outline-none'
	)}
	aria-label="Toggle theme"
>
	{#if isDark}
		<Sun class="h-5 w-5 transition-all" />
	{:else}
		<Moon class="h-5 w-5 transition-all" />
	{/if}
</button>
