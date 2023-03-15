<template>
	<div :class="[size ? size : 'default']" role="presentation" />
</template>
<script setup>
const props = defineProps(["size"]);
</script>
<style scoped>
.default {
	@apply my-8 lg:my-16;
}
.text {
	@apply mt-2 lg:mt-4;
}
.md {
	@apply my-4 lg:my-8;
}
.sm {
	@apply my-2 lg:my-4;
}
</style>
