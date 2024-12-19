<template>
	<ContentQuery :path="$route.path" find="one" v-slot="{ data }">
		<section class="intro w-full" :class="maxWidth">
			<div>
				<h2 class="title">{{ data.title }}</h2>
			</div>
		</section>
		<section class="w-full" :class="maxWidth">
			<ContentRenderer :value="data" class="content w-full flex flex-col justify-start" />	
		</section>
	</ContentQuery>
</template>
<script setup>
const maxWidth = computedMaxWidth('default');
useHead({
	titleTemplate: "About me | Tomasz Kozysa",
});
</script>