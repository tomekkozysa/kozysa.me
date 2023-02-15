<template>
	<nav
		class="navigation bg-black fixed top-0 min-h-full text-white flex items-center pl-24 z-100"
		:class="expanded ? 'is_open' : 'is_closed'"
	>
		<ul class="w-full text-left text-3xl underline">
			<li><NuxtLink to="/work">Work</NuxtLink></li>
			<li><NuxtLink to="/about">About</NuxtLink></li>
		</ul>
		<NavigationToggle :expanded="expanded" />
	</nav>
</template>
<script setup>
const props = defineProps(["expanded"]);
</script>
<style scoped>
.navigation {
	width: 400px;
}
.navigation.is_closed {
	left: calc(-400px + 80px);
}
.navigation.is_open {
	left: 0;
}
</style>
