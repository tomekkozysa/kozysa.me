// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from "@tailwindcss/typography";
export default defineNuxtConfig({
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxt/content",
		"@nuxt/image-edge",
		"@vueuse/nuxt",
		"@tailwindcss/typography",
	],
	// plugins: [
	// 	{ src: "@/plugins/vue-dragandscroll", ssr: false, mode: "client" },
	// ],
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
			// search for markdown containing
			// only `specialNotice` property.
			if (document.extension === ".md" && document.thumbnail) {
				// Replace Markdown string in database
				// with the JSON ATS version
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
		target: "static",
		// The screen sizes predefined by `@nuxt/image`:
		screens: {
			xs: 320,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			xxl: 1536,
			"2xl": 1536,
		},
		presets: {
			work: {
				modifiers: {
					format: "jpg",
				},
			},
		},
	},
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
					},
				},
			},
		},
	},
	// tailwindcss: {
	// 	cssPath: "~/assets/css/tailwind.css",
	// 	configPath: "tailwind.config",
	// 	exposeConfig: false,
	// 	config: {
	// 		theme: {},
	// 		plugins: [tailwindTypography],
	// 		content: [
	// 			`/components/**/*.{vue,js,ts}`,
	// 			`/layouts/**/*.vue`,
	// 			`/pages/**/*.vue`,
	// 			`/composables/**/*.{js,ts}`,
	// 			`/plugins/**/*.{js,ts}`,
	// 			`/App.{js,ts,vue}`,
	// 			`/app.{js,ts,vue}`,
	// 			`/Error.{js,ts,vue}`,
	// 			`/error.{js,ts,vue}`,
	// 		],
	// 	},
	// 	injectPosition: 0,
	// 	viewer: true,
	// },
});
