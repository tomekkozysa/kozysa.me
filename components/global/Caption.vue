<template>
	<figcaption
		class="mt-4 max-w-xl flex-0 border-white"
		:class="[align == 'right' ? 'md:self-end md:text-right' : '', border]"
	>
		<slot />
	</figcaption>
</template>
<script setup>
const props = defineProps(["align", "noborder"]);
const border = computed(() => {
	if (!props.noborder && props.align == "right") {
		return "md:border-r-4 md:pr-4";
	} else if (!props.noborder) {
		return "md:border-l-4 md:pl-4";
	}
	return "";
});
</script>
