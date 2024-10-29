<template>
    <div class="box">
        <slot></slot>
    </div>
</template>
<script setup>
const props = defineProps({
    width: {
        type: String,
        default: '300px',
        required: false,
    },
    height: {
        type: String,
        default: '300px',
        required: false,
    },
    maxWidth: {
        type: String,
        default: 'none',
        required: false,
    },
    maxHeight: {
        type: String,
        default: 'none',
        required: false,
    },
    minWidth: {
        type: String,
        default: 'none',
        required: false,
    },
    minHeight: {
        type: String,
        default: 'none',
        required: false,
    },
    aspectRatio: {
        type: String,

    },
    grow: {
        type: String,
    },
    shrink: {
        type: String,
    },
});

const flexGrow = computed(() => `${props.grow}`)

</script>
<style scoped>
.box {
    /* flex: v-bind(flexGrow) */
    width: v-bind(width);
    height: v-bind(height);
    max-width: v-bind(maxWidth);
    max-height: v-bind(maxHeight);
    min-width: v-bind(minWidth);
    min-height: v-bind(minHeight);
    aspect-ratio: v-bind(aspectRatio);
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
