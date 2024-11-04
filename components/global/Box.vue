<template>
    <div class="relative" @mouseover="showScrollTag = false" @mouseout="showScrollTag = true">
        <div class="box" :class="[hideScrollbar ? 'hide-scrollbar' : '']">
            <slot></slot>
        </div>
        <div class="scroll-info w-full text-center text-sm absolute bottom-2" :class="[showScrollTag ? 'show' : '']">
            Scroll content
        </div>
    </div>
</template>
<script setup>
const showScrollTag = ref(true)
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
    overflowX: {
        type: String,
        default: 'auto',
        required: false,
    },
    overflowY: {
        type: String,
        default: 'auto',
        required: false,
    },
    grow: {
        type: String,
    },
    hideScrollbar: {
        type: Boolean,
        default: true,
        required: false,
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
    overflow-x: v-bind(overflowX);
    overflow-y: v-bind(overflowY);

    aspect-ratio: v-bind(aspectRatio);
}

.hide-scrollbar {
    overflow: hidden;
    overflow-y: auto;
    user-select: none;
    ms-overflow-style: none;
    scrollbar-width: none;
    scroll-behavior: smooth;
    position: relative;
    --scroll-tip-opacity: 1;
}

.scroll-info {
    opacity: 0;
}

.scroll-info.show {
    opacity: 1
}
</style>
