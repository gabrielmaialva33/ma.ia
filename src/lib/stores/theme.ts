import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

function createThemeStore() {
	const { subscribe, set, update } = writable<Theme>('dark');

	return {
		subscribe,
		toggle: () =>
			update((theme) => {
				const newTheme = theme === 'dark' ? 'light' : 'dark';
				if (browser) {
					localStorage.setItem('theme', newTheme);
					document.documentElement.classList.remove('light', 'dark');
					document.documentElement.classList.add(newTheme);
				}
				return newTheme;
			}),
		init: () => {
			if (browser) {
				const savedTheme = localStorage.getItem('theme') as Theme | null;
				const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
				const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
				set(initialTheme);
				document.documentElement.classList.add(initialTheme);
			}
		},
		set: (theme: Theme) => {
			if (browser) {
				localStorage.setItem('theme', theme);
				document.documentElement.classList.remove('light', 'dark');
				document.documentElement.classList.add(theme);
			}
			set(theme);
		}
	};
}

export const theme = createThemeStore();
