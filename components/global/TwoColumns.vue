<template>
	<div class="flex flex-col">
		<div class="flex gap-x-4" :class="[cap ? 'capped' : '', maxWidth]">
			<figure
				class="flex flex-col min-w-1/2 flex-1 items-center"
				:class="[scroll ? `scroll` : '']"
			>
				<slot name="left" />
			</figure>
			<figure
				class="flex flex-col min-w-1/2 flex-1 items-center"
				:class="[scroll ? `scroll` : '']"
			>
				<slot name="right" />
			</figure>
		</div>
		<Caption :align="caption">
			<slot name="caption" />
		</Caption>
	</div>
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
