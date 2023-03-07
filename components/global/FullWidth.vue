<template>
	<figure
		class="full-width flex flex-col"
		:class="[cap ? 'capped' : '', maxWidth]"
	>
		<div :class="[scroll ? `scroll` : '']">
			<slot name="image" />
		</div>
		<Caption :align="caption">
			<slot name="caption" />
		</Caption>
	</figure>
</template>
<script setup>
const props = defineProps(["cap", "scroll", "width", "caption"]);
const maxWidth = computedMaxWidth(props.width);
</script>
<style scoped>
.capped {
	max-height: v-bind("cap");
	overflow: hidden;
}
.scroll {
	overflow: hidden;
	overflow-y: auto;
	user-select: none;
	ms-overflow-style: none;
	scrollbar-width: none;
	scroll-behavior: smooth;
}
.scroll::-webkit-scrollbar {
	display: none;
}
</style>
