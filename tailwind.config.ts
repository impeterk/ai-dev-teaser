import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		container: {
		center: true,
		padding: '2rem',
		screens: {
			'2xl': '1400px'
		}
	},
		extend: {}
	},
	daisyui: {
		themes: [
		  {
			light: {
			  ...require("daisyui/src/theming/themes")["light"],
			  success: "#82dd55"
			},
			dark: {
				...require("daisyui/src/theming/themes")["dark"],
				success: "#82dd55"
			  },
		  },
		],
	  },
	plugins: [require('@tailwindcss/typography'), require('daisyui')]


} as Config;
