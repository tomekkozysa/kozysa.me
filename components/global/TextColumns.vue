<template>
	<div class="md:columns-2" :class="maxWidth">
		<slot />
	</div>
</template>
<script setup>
const props = defineProps(["width"]);
const maxWidth = computedMaxWidth(props.width);
</script>
