<template>
	<figcaption
		class="mt-4 max-w-xl flex-0 border-black"
		:class="[align == 'right' ? 'self-end text-right' : '', border]"
	>
		<slot />
	</figcaption>
</template>
<script setup>
const props = defineProps(["align", "noborder"]);
const border = computed(() => {
	if (!props.noborder && props.align == "right") {
		return "border-r-4 pr-4";
	} else if (!props.noborder) {
		return "border-l-4 pl-4";
	}
	return "";
});
</script>
