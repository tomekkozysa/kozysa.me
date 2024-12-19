<script setup>
const route = useRoute();
const { data } = await useAsyncData(`work-${route.params.slug}`, () =>
	queryContent("/work", route.params.slug).findOne()
);

useHead({
	titleTemplate: "%s | Selected Projects | Tomasz Kozysa",
});

const maxWidth = computedMaxWidth("default");
</script>
<template>
	<section class="intro flex flex-col items-center w-full">
		<div class="w-full" :class="maxWidth">
			<h2 class="title" :key="data.title">{{ data.title }}</h2>
			<p class="description" :key="data.description">{{ data.description }}</p>
		</div>
	</section>
	<section class="w-full">
		<ContentDoc :document="data" class="content flex flex-col items-center justify-start" />
	</section>
</template>