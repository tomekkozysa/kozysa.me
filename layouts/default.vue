<template>
	
		<header ref="header" class="header flex w-full relative"
			:class="is_mobile ? 'flex-col' : 'items-center justify-between'">
			
			<h1 class="relative z-20 shrink-0">
				<NuxtLink to="/">Portfolio</NuxtLink>
			</h1>

			<NavigationToggle v-if="is_mobile" @mousedown="toggleNav" :expanded="isNavOpen"
				class="absolute toggle top-7 right-8" />
			<NavigationPanel v-if="is_mobile" :is_open="isNavOpen" @toggle="toggleNav" />

			<Navigation v-else />
		</header>
		<main class="page mx-auto min-h-90vh flex flex-col items-center" :class="$route.name">
			<NuxtPage />
		</main>

		<FooterStrip />
</template>
<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const is_mobile = ref(false)
const isNavOpen = ref(false)

const toggleNav = () => {
	isNavOpen.value = !isNavOpen.value
};

onMounted(() => {
	is_mobile.value = breakpoints.smallerOrEqual('md').value
	window.addEventListener(
		'resize',
		() => {
			is_mobile.value = breakpoints.smallerOrEqual('md').value
		},
		false
	)
})

</script>
