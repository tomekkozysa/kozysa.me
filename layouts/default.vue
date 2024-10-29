<template>
	<div>
		<header ref="header" class="sticky top-0 z-10 flex items-center h-12 pl-24"
			:class="navigationExpanded ? 'text-white' : 'text-black'">
			<h1 class="relative z-20">
				<NuxtLink to="/">Tomasz Kozysa</NuxtLink>
			</h1>
		</header>
		<div class="sticky top-0 h-12 z-90 bg-stone-50" aria-role="decorative"></div>
		<Navigation :expanded="navigationExpanded" @mouseover="navigationExpanded = true"
			@toggle="(toggleVal) => (navigationExpanded = toggleVal)" />
		<section class="py-64 mx-auto min-h-90vh" @mouseover="navigationExpanded = false">
			<NuxtPage />
		</section>
	</div>
	<footer class="py-32 pl-24 bg-black min-h-64">Footer</footer>
</template>
<script setup>
const navigationExpanded = ref(false);
const header = useTemplateRef('header')
const offsetStore = ref(null)
const is_stuck = ref(false)

const { headerState, setHeaderState } = useHeaderState()

onMounted(() => {
	window.addEventListener('scroll', () => {
		if (header.value) {
			if (header.value.offsetTop > 300) {
				setHeaderState(true)
			}
			else {
				setHeaderState(false)
			}
		}
	})
})
</script>
