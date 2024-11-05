<template>
	<div class="lg:flex w-full lg:items-center mediatext" :class="[
		reverse ? 'lg:flex-row-reverse justify-start' : '',
		flexible ? '' : 'split',
		maxWidth,
	]">
		<div class="flex flex-col media" :class="[
		column ? 'flex-col space-y-8' : 'lg:space-x-8 space-y-8 lg:space-y-0 lg:flex-row', size
	]">
			<slot name="media" />
		</div>
		<div class="text" :class="[
		textAlign == 'bottom' ? 'self-end' : textAlign == 'top' ? 'self-start' : '',
		reverse ? 'lg:pr-8' : 'lg:pl-8',
	]">
			<div class="max-w-ch">
				<slot name="text" />
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	reverse: {
		type: Boolean,
		default: false,
		required: false
	},
	column: {
		type: Boolean,
		default: false,
		required: false
	},
	flexible: {
		type: Boolean,
		default: false,
		required: false
	},
	width: {
		type: String,
		default: "default",
		required: false
	},
	textAlign: {
		type: String,
		default: "center",
		required: false
	},
	size: {
		type: String,
		default: 'half',
		required: false
	}
});
const maxWidth = computedMaxWidth(props.width);

</script>
<style scoped >
.media {
	/* width: v-bind(mediaWidth); */
	width: fit-content;
}

.text {
	width: fit-content;
	flex-shrink: 1;
}

.split{
	.lg{
		@apply w-8/12;
	}
	.md{
		@apply w-7/12;
	}
	.sm{
		@apply w-4/12;
	}
	.half{
		@apply w-6/12;
	}
}
</style>
