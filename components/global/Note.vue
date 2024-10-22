<template>
	<div
		class="flex flex-col w-full"
		:class="[align ? `items-${align}` : '', textalign]"
	>
		<div
			class="w-64 max-w-xs py-1 mt-2 text-sm border-t-2 border-black"
			:class="[`self-${align}`, textalign]"
		>
			{{ text }}
		</div>
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
