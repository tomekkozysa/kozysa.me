<template>
	<div class="mediatext" :class="[
		reverse ? 'reverse justify-start' : '',
		flexible ? 'flexible' : 'split',
		maxWidth,
	]">
		<div class="media flex flex-col" 
		:class="[ landscape ? 'landscape' : 'portrait', size
	]">
			<slot name="media" />
		</div>
		<div class="text" :class="[
		textAlign == 'bottom' ? 'bottom' : textAlign == 'top' ? 'top' : '',
		reverse ? 'reverse' : '',
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
	landscape: {
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