<template>
	<section>
		<div class="grid gap-4 min-h-64" :class="[maxWidth]">
			<slot />
		</div>
	</section>
</template>
<script setup>
const props = defineProps(["width", "areas","columns"]);
const maxWidth = computedMaxWidth(props.width);
</script>
<style scoped>
.grid{
	grid-template-areas: v-bind(areas);
	grid-template-columns: v-bind(columns)
	/* grid-template-columns: */
}
</style>
