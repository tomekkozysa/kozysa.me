<template>
	<div class="text flex flex-col w-full" :class="[align == 'right' ? 'text-end' : align == 'center' ? 'text-center' : 'text-start',
		maxWidth]">
		<div :class="[columns]">
			<slot />
		</div>
	</div>
</template>
<script setup>

const props = defineProps({
	align: { type: String, default: "left", required: false },
	columns: { type: Number, default: 0, required: false },
	width: { type: String, default: '', required: false }
})

const maxWidth = computedMaxWidth(props.width);
const columns = computed(() => props.columns >= 1 ? `md:columns-${props.columns}` : `max-w-ch`)

</script>
