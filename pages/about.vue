<template>


	<ContentQuery :path="$route.path" find="one" v-slot="{ data }">
		<section class="intro w-full" :class="maxWidth">
			<div>
				<h2 class="title">{{ data.title }}</h2>
			</div>
		</section>
		<section>
			<ContentRenderer :value="data" class="content w-full flex flex-col items-center justify-start" />
		</section>
	</ContentQuery>


</template>
<script setup>
const maxWidth = computedMaxWidth('default');
</script>