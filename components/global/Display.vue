<template>
	<div class="display" :class="[is_loading ? 'is_loading' : '']">
		<nuxt-img ref="image" :src="imageSource" :alt="alt" :placeholder="placeholder" lazy :width="width" :quality="90"
			:height="height" sizes="sm:100vw md:100vw lg:100vw xl:100vw" format="webp" @load="onImageLoaded" />
	</div>
</template>
<script setup>
const img = useImage()
const is_loading = ref(true)
const placeholder = computed(() => {
	return img(imageSource.value, { h: 10, f: 'png', blur: 2, q: 50 })
})
const props = defineProps({
	src: {
		type: String,
		required: true,
		default: () => '/img/placeholder.png'
	},
	alt: {
		type: String,
	},
	width: {
		type: Number,
	},
	height: {
		type: Number,
	}
});

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

</script>
<style scoped>
.display img {
	transition: opacity .3s ease-in-out;
}

.display.is_loading {
	background: var(--svgicon) no-repeat center;

	--svgicon: url('data:image/svg+xml;utf-8,<svg width="200px" height="200px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><line x1="100.00" y1="82.00" x2="100.00" y2="83.00" stroke-width="10.40" stroke="violet" stroke-linecap="round"><animate dur="840ms" repeatCount="indefinite" attributeName="stroke" values="violet;indigo;blue;lightgreen;yellow;darkorange;red" begin="0ms"></animate></line><line x1="115.59" y1="91.00" x2="114.72" y2="91.50" stroke-width="10.40" stroke="indigo" stroke-linecap="round"><animate dur="840ms" repeatCount="indefinite" attributeName="stroke" values="violet;indigo;blue;lightgreen;yellow;darkorange;red" begin="140ms"></animate></line><line x1="115.59" y1="109.00" x2="114.72" y2="108.50" stroke-width="10.40" stroke="blue" stroke-linecap="round"><animate dur="840ms" repeatCount="indefinite" attributeName="stroke" values="violet;indigo;blue;lightgreen;yellow;darkorange;red" begin="280ms"></animate></line><line x1="100.00" y1="118.00" x2="100.00" y2="117.00" stroke-width="10.40" stroke="lightgreen" stroke-linecap="round"><animate dur="840ms" repeatCount="indefinite" attributeName="stroke" values="violet;indigo;blue;lightgreen;yellow;darkorange;red" begin="420ms"></animate></line><line x1="84.41" y1="109.00" x2="85.28" y2="108.50" stroke-width="10.40" stroke="yellow" stroke-linecap="round"><animate dur="840ms" repeatCount="indefinite" attributeName="stroke" values="violet;indigo;blue;lightgreen;yellow;darkorange;red" begin="560ms"></animate></line><line x1="84.41" y1="91.00" x2="85.28" y2="91.50" stroke-width="10.40" stroke="darkorange" stroke-linecap="round"><animate dur="840ms" repeatCount="indefinite" attributeName="stroke" values="violet;indigo;blue;lightgreen;yellow;darkorange;red" begin="700ms"></animate></line></g></svg>');

	img {
		opacity: .1;
	}
}
</style>
