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

const maxWidth = computedMaxWidth("default");
</script>
<template>
	<main class="flex flex-col items-center">
		<section
			class="sticky top-10 bg-stone-50 pb-4 w-full flex flex-col items-center pl-32 pr-10"
		>
			<div class="w-full" :class="maxWidth">
				<h1>{{ data.title }}</h1>
				<p>{{ data.description }}</p>
			</div>
		</section>
		<div>
			<ContentDoc
				:document="data"
				class="content flex flex-col items-center pl-32 pr-10"
			/>
		</div>
	</main>
</template>
<style scoped>
h1 {
	@apply text-4xl;
}
</style>
