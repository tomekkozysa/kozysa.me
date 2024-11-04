<script setup>
const route = useRoute();
const { data } = await useAsyncData("work", () =>
	queryContent("/work", route.params.slug).findOne()
);

useHead({
	titleTemplate: "%s | Tomasz Kozysa",
});

const maxWidth = computedMaxWidth("default");
const { headerState, setHeaderState } = useHeaderState()

</script>
<template>

	<section class="flex flex-col items-center w-full">
		<div class="w-full" :class="maxWidth">
			<h1 v-if="!headerState">{{ data.title }}</h1>
			<h2 v-else>{{ data.title }}</h2>
			<p>{{ data.description }}</p>
		</div>
	</section>
	<div class="w-full">
		<ContentDoc :document="data" class="flex flex-col items-center justify-start content" />
	</div>

</template>
<style scoped>
/* ::v-deep p {

	align-self: flex-start;
	width: 100%;
} */
</style>