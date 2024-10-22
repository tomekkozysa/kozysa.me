<template>
	<div class="flex flex-col mt-8 max-w-5xl border-4 w-full border-green-600" :class="maxWidth">
		<div class="flex space-x-8">
			<slot name="image" />
		</div>

		<slot name="caption" />
	</div>
</template>
<script setup>
const props = defineProps([
	"width"
]);
const maxWidth = computedMaxWidth(props.width);

</script>