import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{html,js,ts,jsx,tsx}'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				brand: {
					black: '#0a0a0a',
					dark: '#121212',
					card: '#18181b',
					border: '#27272a',
					light: '#fafafa',
					red: '#dc2626',
					'red-bright': '#ef4444',
					blue: '#2563eb',
					'blue-bright': '#3b82f6',
					green: '#16a34a',
					'green-bright': '#22c55e',
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Plus Jakarta Sans', 'sans-serif'],
				mono: ['Fira Code', 'monospace'],
			}
		}
	},
	plugins: [typography, forms, containerQueries]
} satisfies Config;
