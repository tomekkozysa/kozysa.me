<template>
	<div
		class="flex lg:items-center w-full flex-wrap"
		:class="[
			reverse ? 'lg:flex-row-reverse justify-start' : '',
			flexible ? '' : 'split',
			maxWidth,
		]"
	>
		<div
			class="image flex flex-col"
			:class="[
				cap ? 'capped' : '',
				scroll ? `scroll` : '',
				column
					? 'flex-col space-y-4'
					: 'lg:space-x-4 space-y-4 lg:space-y-0 lg:flex-row',
			]"
		>
			<slot name="image" />
		</div>
		<div
			v-if="showText"
			class="text"
			:class="[
				text == 'bottom' ? 'self-end' : '',
				reverse ? 'lg:pr-8' : 'lg:pl-8',
			]"
		>
			<Caption :noborder="noborder" :align="reverse ? 'left' : 'right'">
				<slot name="caption" />
			</Caption>
		</div>
	</div>
</template>

<script setup>
const props = defineProps([
	"reverse",
	"text",
	"cap",
	"scroll",
	"flexible",
	"column",
	"width",
	"noborder",
]);
const maxWidth = computedMaxWidth(props.width);
const slots = useSlots();
const showText = () => {
	return !!slots.caption;
};
</script>
<style scoped>
.split .image {
	@apply lg:w-8/12;
}
.split .text {
	@apply lg:w-4/12;
}
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
