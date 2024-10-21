<template>
	<div>
		<header
			class="sticky pl-24 z-10 top-0 h-12 flex items-center"
			:class="navigationExpanded ? 'text-white' : 'text-black'"
		>
			<h1 class="relative z-20">
				<NuxtLink to="/">Tomasz Kozysa</NuxtLink>
			</h1>
		</header>
		<div
			class="sticky z-90 top-0 bg-stone-50 h-12"
			aria-role="decorative"
		></div>
		<Navigation
			:expanded="navigationExpanded"
			@mouseover="navigationExpanded = true"
			@toggle="(toggleVal) => (navigationExpanded = toggleVal)"
		/>
		<section class="mx-auto py-64" @mouseover="navigationExpanded = false">
			<NuxtPage />
		</section>
	</div>
	<footer class="min-h-64 py-32 bg-black pl-24">Footer</footer>
</template>
<script setup>
const navigationExpanded = ref(false);
</script>
