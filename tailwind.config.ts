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
				cyber: {
					bg: '#090d16',
					card: 'rgba(15, 23, 42, 0.75)',
					border: 'rgba(255, 255, 255, 0.1)',
					emerald: '#10b981',
					cyan: '#06b6d4',
					violet: '#8b5cf6',
					amber: '#f59e0b',
				}
			},
			animation: {
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'glow-spin': 'spin 8s linear infinite',
				'float': 'float 6s ease-in-out infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				}
			}
		}
	},
	plugins: [typography, forms, containerQueries]
} satisfies Config;

