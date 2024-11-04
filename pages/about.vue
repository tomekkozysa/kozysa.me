<template>


	<ContentQuery :path="$route.path" find="one" v-slot="{ data }">
		<section class="flex flex-col items-center w-full">
			<div class="w-full" :class="maxWidth">
				<h2>{{ data.title }}</h2>
			</div>
		</section>
		<div class="w-full">
			<ContentRenderer :value="data" class="flex flex-col items-center" />
		</div>
	</ContentQuery>


</template>
<script setup>
const maxWidth = computedMaxWidth('default');
</script>