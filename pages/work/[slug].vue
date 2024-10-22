<script setup>
const route = useRoute();
const { data } = await useAsyncData("work", () =>
	queryContent("/work", route.params.slug).findOne()
);

useHead({
	// as a string,
	// where `%s` is replaced with the title
	// title: `${data.title} | Tomasz Kozysa`,
	titleTemplate: "%s | Tomasz Kozysa",
	// ... or as a function
	// titleTemplate: (productCategory) => {
	//   return productCategory
	//     ? `${productCategory} - Site Title`
	//     : 'Site Title'
	// }
});

const maxWidth = computedMaxWidth("default");
const { headerState, setHeaderState } = useHeaderState()

</script>
<template>
	<main class="flex flex-col items-center">
		<section class="sticky flex flex-col items-center w-full pb-4 pl-32 pr-10 top-10 bg-stone-50">
			<div class="w-full" :class="maxWidth">
				<h1 v-if="!headerState">{{ data.title }}</h1>
				<h2 v-else>{{ data.title }}</h2>
				<p>{{ data.description }}</p>
			</div>
		</section>
		<div>
			<ContentDoc :document="data" class="flex flex-col items-center justify-start pl-32 pr-10 content" />
		</div>
	</main>
</template>
