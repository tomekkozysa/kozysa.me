<script setup>
const route = useRoute();

const { data } = await useAsyncData("work", () =>
	queryContent("/work", route.params.slug).findOne()
);

useHead({
	// as a string,
	// where `%s` is replaced with the title
	titleTemplate: "%s | Tomasz Kozysa",
	// ... or as a function
	// titleTemplate: (productCategory) => {
	//   return productCategory
	//     ? `${productCategory} - Site Title`
	//     : 'Site Title'
	// }
});
</script>
<template>
	<main>
		<section class="sticky top-10 bg-white pb-4">
			<h1>{{ data.title }}</h1>
			<p>{{ data.description }}</p>
		</section>
		<div class="mt-8 content">
			<ContentDoc :document="data" />
		</div>
	</main>
</template>
<style scoped>
h1 {
	@apply text-4xl;
}
</style>
