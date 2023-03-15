<template>
	<section>
		<div class="grid gap-4" :class="[maxWidth, gridColumnsCount]">
			<slot />
		</div>
		<Caption :noborder="noborder" :caption="caption">
			<slot name="caption" />
		</Caption>
	</section>
</template>
<script setup>
const props = defineProps(["width", "columns", "noborder", "caption"]);
const gridColumnsCount = computed(() => {
	return `col-${props.columns}`;
});
const maxWidth = computedMaxWidth(props.width);
</script>
<style scoped>
.col-4 {
	@apply grid-cols-1 md:grid-cols-2 xl:grid-cols-4;
}
.col-3 {
	@apply grid-cols-1 lg:grid-cols-3;
}
.col-2 {
	@apply grid-cols-1 md:grid-cols-2;
}
</style>
