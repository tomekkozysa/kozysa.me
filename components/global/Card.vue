<template>
	<div class="card flex w-full text-start" :class="[landscape ? 'landscape flex-row items-stretch': 'portrait flex-col items-start ', maxWidth]">
		<div class="card-image">
			<display :alt="`thumbnail image of project called ${title}`" :src="image" :src-width=600 :src-height=340 />
		</div>
		<div class="card-text flex flex-col justify-between">
			<div class="card-text-header">
                <h4 class="card-title">{{ title }}</h4>
                <p class="card-description">{{ description }}</p>
            </div>
			<NuxtLink class="card-link flex-end":to="link" >→ {{ linkLabel }}</NuxtLink>
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
	width: {
		type: String,
		default: "fit",
		required: false
	},
    title:{
        type: String,
		default: "Title here",
		required: true

    },
    description:{
        type: String,
		default: "Bit more info",
		required: false
    },
    link:{
        type: String,
		default: "#",
		required: true
    },
    linkLabel:{
        type: String,
		default: "More",
		required: false
    },
    image:{
        type: String,
		default: "img/full_size_169.png",
		required: true
    },
    imageWidth:{
        type: Number,
		default: 600,
		required: false
    },
    imageHeight:{
        type: Number,
		default: 340,
		required: false
    }
});
const maxWidth = computedMaxWidth(props.width);

</script>
