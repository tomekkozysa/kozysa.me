<script setup>
const route = useRoute();
const { data } = await useAsyncData("layouts", () =>
	queryContent("/layouts", route.params.slug).findOne()
);

useHead({
	titleTemplate: "%s | Tomasz Kozysa",
});

const maxWidth = computedMaxWidth("default");
// const { headerState, setHeaderState } = useHeaderState()

</script>
<template>
	<main class="flex flex-col items-center">
		<section class="flex flex-col items-center w-full pb-4 pl-32 pr-10 top-10 bg-stone-50">
			<div class="w-full" :class="maxWidth">
				<h2>{{ data.title }}</h2>
				<p>{{ data.description }}</p>
			</div>
		</section>
		<div class="w-full">
			<ContentDoc :document="data" class="flex flex-col items-center justify-start pl-32 pr-10 content" />
		</div>
	</main>
</template>
<style scoped>
::v-deep p {

	align-self: flex-start;
	width: 100%;
}
</style>