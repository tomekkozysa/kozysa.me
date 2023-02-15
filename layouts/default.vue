<template>
	<div>
		<header
			class="sticky pl-24 z-10 top-0 h-12 flex items-center"
			:class="navigationExpanded ? 'text-white' : 'text-black'"
		>
			<h1 class="relative z-100">
				<NuxtLink to="/">Tomasz Kozysa</NuxtLink>
			</h1>
		</header>
		<div
			class="sticky z-9 top-0 bg-white h-12"
			aria-role="decorative"
		></div>
		<Navigation
			:expanded="navigationExpanded"
			@mouseover="navigationExpanded = true"
		/>
		<section
			class="pl-24 pr-3 max-w-7xl mx-auto pb-64"
			@mouseover="navigationExpanded = false"
		>
			<NuxtPage />
		</section>
	</div>
	<footer class="min-h-64 py-32 bg-black pl-24">Footer</footer>
</template>
<script setup>
const navigationExpanded = ref(false);
</script>
