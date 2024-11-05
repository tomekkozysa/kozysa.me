<template>
	<div class="px-8">
		<header ref="header" class="flex w-full pt-4 relative"
			:class="is_mobile ? 'flex-col' : 'items-center justify-between'">
			<h1 class="relative z-20 shrink-0">
				<NuxtLink to="/">Portfolio</NuxtLink>
			</h1>

			<NavigationToggle v-if="is_mobile" @mousedown="toggleNav" :expanded="isNavOpen"
				class="absolute toggle top-7 right-0" />
			<NavigationPanel v-if="is_mobile" :is_open="isNavOpen" @toggle="toggleNav" />

			<Navigation v-else />
		</header>

		<main class="mx-auto min-h-90vh py-48 flex flex-col items-center">
			<NuxtPage />
		</main>

	</div>
	<footer class="py-32 text-white bg-black min-h-64">Footer</footer>
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
	console.log(breakpoints.smallerOrEqual('md').value)
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
