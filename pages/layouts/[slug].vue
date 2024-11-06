<script setup>
const route = useRoute();
const { data } = await useAsyncData("layouts", () =>
	queryContent("/layouts", route.params.slug).findOne()
);

useHead({
	titleTemplate: "%s | Tomasz Kozysa",
});

const maxWidth = computedMaxWidth("default");
</script>
<template>
	<section class="flex flex-col items-center w-full">
		<div class="w-full" :class="maxWidth">
			<h2>{{ data.title }}</h2>
			<p>{{ data.description }}</p>
		</div>
	</section>
	<div class="w-full">
		<ContentDoc :document="data" class="flex flex-col items-center justify-start content" />
	</div>
</template>