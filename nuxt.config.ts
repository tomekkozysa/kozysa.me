// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from "@tailwindcss/typography";
export default defineNuxtConfig({
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxt/content",
		"@nuxt/image-edge",
		"@vueuse/nuxt",
		// "@tailwindcss/typography",
	],

	// plugins: [
	// 	{ src: "@/plugins/vue-dragandscroll", ssr: false, mode: "client" },
	// ],
	target: "static",

	app: {
		head: {
			charset: "utf-16",
			viewport: "width=500, initial-scale=1",
			title: "Tomasz Kozysa",
			meta: [
				// <meta name="description" content="My amazing site">
				{
					name: "description",
					content:
						"Selection of design and development works by Tomasz",
				},
				{
					name: "viewport",
					content:
						"user-scalable=yes, initial-scale=1.0, maximum-scale=3.0, minimum-scale=.2, width=device-width",
				},
			],
		},
	},

	hooks: {
		// Doc: https://content.nuxtjs.org/advanced#contentfilebeforeinsert
		"content:file:beforeInsert": async (document, database) => {
			if (document.extension === ".md" && document.thumbnail) {
				document.thumbnail = await database.markdown.toJSON(
					document.thumbnail
				);
			}
			if (document.extension === ".md" && document.order) {
				document.order = await database.markdown.toJSON(document.order);
			}
		},
	},

	image: {
		// The screen sizes predefined by `@nuxt/image`:
		screens: {
			xs: 320,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			xxl: 1536,
			"2xl": 1800,
		},
		presets: {
			work: {
				modifiers: {
					format: "jpg",
				},
			},
		},
	},

	css: ['~/assets/css/main.css'],
	tailwindcss: {
		config: {
			plugins: [tailwindTypography],
			content: [
				`/components/**/*.{vue,js,ts}`,
				`/layouts/**/*.vue`,
				`/pages/**/*.vue`,
				`/composables/**/*.{js,ts}`,
				`/plugins/**/*.{js,ts}`,
				`/App.{js,ts,vue}`,
				`/app.{js,ts,vue}`,
				`/Error.{js,ts,vue}`,
				`/error.{js,ts,vue}`,
				"content/**/*.md",
			],
			theme: {
				extend: {
					maxWidth: {
						"8xl": "96rem",
						"ch": "50ch",
					},
					minHeight: {
						"90vh": "90vh",
						"80vh": "80vh",
						"70vh": "70vh",
					}
				},
			},
		},
	},
	content: {
		highlight: {
		  // Theme used in all color schemes.
		  theme: 'github-light',
		  // OR
		//   theme: {
		// 	// Default theme (same as single string)
		// 	default: 'github-light',
		// 	// Theme used if `html.dark`
		// 	dark: 'github-dark',
		// 	// Theme used if `html.sepia`
		// 	sepia: 'monokai'
		//   }
		},
		markdown:{
			anchorLinks:false,
			mdc:true,
		},
	  },
	  

	compatibilityDate: "2024-10-22",
});