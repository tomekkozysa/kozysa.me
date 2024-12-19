<script setup>
const route = useRoute();
const { data } = await useAsyncData(`layouts`, () =>
	queryContent("/layouts", route.params.slug).findOne()
);

useHead({
	titleTemplate: "%s | Tomasz Kozysa",
});

const maxWidth = computedMaxWidth("default");
</script>
<template>
	<section class="intro w-full flex flex-col items-center w-full" >
		<div class="w-full" :class="maxWidth">
			<h2 class="title" :key="data.title">{{ data.title }}</h2>
			<p class="description" :key="data.description">{{ data.description }}</p>
		</div>
	</section>
	<section>
		<ContentDoc :document="data" class="content flex flex-col items-center justify-start" />
	</section>
</template>