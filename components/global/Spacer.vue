<template>
	<div class="spacer" :class="[size ? size : 'default']" role="presentation" />
</template>
<script setup>
	const props = defineProps(["size"]);
</script>
