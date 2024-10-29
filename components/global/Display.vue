<template>
	<div class="display w-full" :class="[is_loading ? 'is_loading' : '', maxWidthCSS]">
		<nuxt-img ref="image" :src="imageSource" :alt="alt" :placeholder="placeholder" lazy :width="srcWidth"
			:quality="90" :height="srcHeight" sizes="sm:100vw md:100vw lg:100vw xl:100vw" format="webp"
			@load="onImageLoaded" />
	</div>
</template>
<script setup>
const props = defineProps({
	src: {
		type: String,
		required: true,
		default: () => '/img/placeholder.png'
	},
	alt: {
		type: String,
	},
	srcWidth: {
		type: Number,
	},
	srcHeight: {
		type: Number,
	},
	fg: {
		type: String,
	},
});

const maxWidthCSS = computed(() => `${props.maxWidth}`)

const img = useImage()
const is_loading = ref(true)

const onImageLoaded = () => {
	is_loading.value = false
}
const imageSource = computed(() => {
	if (props.src !== null)
		return props.src
	else {
		return placeholder.value
	}
})
const placeholder = computed(() => {
	return img(imageSource.value, { h: 10, f: 'png', blur: 2, q: 50 })
})
const flexGrow = computed(() => `${props.fg}`)

</script>
<style scoped>
.display {
	flex: v-bind(flexGrow)
}


.display img {
	transition: opacity .3s ease-in-out;
}

.display.is_loading {
	background: var(--svgicon) no-repeat center;
	--svgicon: url('data:image/svg+xml;utf-8,<svg width="200px" height="200px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><line x1="100.00" y1="91.00" x2="100.00" y2="91.00" stroke-width="5.50" stroke="violet" stroke-linecap="round"><animate dur="2180ms" repeatCount="indefinite" attributeName="stroke" values="violet;indigo;blue;lightgreen;yellow;darkorange;red" begin="0ms"></animate></line><line x1="107.79" y1="104.50" x2="107.79" y2="104.50" stroke-width="5.50" stroke="indigo" stroke-linecap="round"><animate dur="2180ms" repeatCount="indefinite" attributeName="stroke" values="violet;indigo;blue;lightgreen;yellow;darkorange;red" begin="726.6666666666666ms"></animate></line><line x1="92.21" y1="104.50" x2="92.21" y2="104.50" stroke-width="5.50" stroke="blue" stroke-linecap="round"><animate dur="2180ms" repeatCount="indefinite" attributeName="stroke" values="violet;indigo;blue;lightgreen;yellow;darkorange;red" begin="1453.3333333333333ms"></animate></line></g></svg>');


	img {
		opacity: .1;
	}
}
</style>
