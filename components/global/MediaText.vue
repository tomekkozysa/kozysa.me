<template>
	<div class="lg:flex w-full lg:items-center mediatext" :class="[
		reverse ? 'lg:flex-row-reverse justify-start' : '',
		flexible ? '' : 'split',
		maxWidth,
	]">
		<div class="flex flex-col media" :class="[
		cap ? 'capped' : '',
		scroll ? `scroll` : '',
		column ? 'flex-col space-y-8' : 'lg:space-x-8 space-y-8 lg:space-y-0 lg:flex-row',
		mediaWidth
	]">
			<slot name="image" />
		</div>
		<div class="text" :class="[
		textAlign == 'bottom' ? 'self-end' : textAlign == 'top' ? 'self-start' : '',
		reverse ? 'lg:pr-8' : 'lg:pl-8',
	]">
			<div class="max-w-ch">
				<slot name="caption" />

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
	cap: {
		type: Boolean,
		default: false,
		required: false
	},
	scroll: {
		type: Boolean,
		default: false,
		required: false
	},
	column: {
		type: Boolean,
		default: true,
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
	mediaSize: {
		type: String,
		default: '7/12',
		required: false
	}
});
const maxWidth = computedMaxWidth(props.width);
const mediaWidth = computed(() => {
	const sizes = props.mediaSize.split('/')
	return sizes[0] * 100 / sizes[1] + '%'

})

</script>
<style scoped>
.media {
	width: v-bind(mediaWidth);
}

.capped {
	height: v-bind("cap");
	max-height: fit-content;
	overflow: hidden;
}

.scroll {
	overflow: hidden;
	overflow-y: auto;
	user-select: none;
	ms-overflow-style: none;
	scrollbar-width: none;
	scroll-behavior: smooth;
	position: relative;
	--scroll-tip-opacity: 1;
}

.scroll:hover {
	--scroll-tip-opacity: 0;
}

.scroll::-webkit-scrollbar {
	display: none;
}
</style>
