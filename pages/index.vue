<template>
	<MediaText :reverse="true" class="py-8 mx-auto home-hero">
		<template #media>
			<HomeAnimation class="mx-auto" />
		</template>
		<template #text>
			<h2>I design, prototype and build user interfaces for desktop & mobile web applications and responsive websites.</h2>
		</template>
	</MediaText>
</template>
<style>
.home-hero{
	min-height: 80vh;
}</style>
<script setup>
useHead({
	titleTemplate: "Tomasz Kozysa | UX & UI | Responsive Web Design | Design & Development",
});
</script>