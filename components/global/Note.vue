<template>
	<div
		class="w-full flex flex-col"
		:class="[align ? `items-${align}` : '', textalign]"
	>
		<figcaption
			class="text-sm mt-2 max-w-xs py-1 border-t-2 w-64 border-black"
			:class="[`self-${align}`, textalign]"
		>
			{{ text }}
		</figcaption>
	</div>
</template>
<script setup>
const props = defineProps(["text", "align", "noborder"]);
const textalign = computed(() => {
	if (props.align == "center") {
		return "text-center";
	} else if (props.align == "end") {
		return "text-right";
	}
	return "text-left";
});
</script>
