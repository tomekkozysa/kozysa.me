<template>
	<div :class="[size ? size : 'default']" role="presentation" />
</template>
<script setup>
const props = defineProps(["size"]);
</script>
<style scoped>
.default {
	@apply my-16;
}
.text {
	@apply mt-4;
}
.md {
	@apply my-8;
}
.sm {
	@apply my-4;
}
</style>
