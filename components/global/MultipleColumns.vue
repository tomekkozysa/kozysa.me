<template>
	<div class="multiple-columns flex flex-col mt-8" :class="maxWidth">
		<div class="flex space-x-8 flex-1">
			<slot name="image" />
		</div>
		<Caption :align="caption">
			<slot name="caption" />
		</Caption>
	</div>
</template>
<script setup>
	const props = defineProps(["width", "caption"]);
	const maxWidth = computedMaxWidth(props.width);
</script>
