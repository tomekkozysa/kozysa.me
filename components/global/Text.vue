<template>
	<div
		class="text flex flex-col w-full"
		:class="[
			align == 'left' ? 'justify-self-start' : 'justify-self-end',
			maxWidth,
		]"
	>
		<div class="max-w-xl">
			<slot />
		</div>
	</div>
</template>
<script setup>
const props = defineProps(["align"]);
const maxWidth = computedMaxWidth("wide");
</script>
