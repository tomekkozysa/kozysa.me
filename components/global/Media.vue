<template>
    <div class="flex flex-col" :class="[is_cap ? 'capped' : '', is_stacked ? 'mb-8' : '', maxWidth]">
        <div class="flex flex-1"
            :class="[is_scroll ? `scroll` : '', is_column ? 'flex-col space-y-8' : 'flex-row space-x-8']">

            <slot name="image" />
        </div>
        <Caption v-if="!is_stacked" :align="caption">
            <slot name="caption" />
        </Caption>
    </div>
</template>
<script setup>
const props = defineProps(
    {
        cap: {
            type: String,
            required: false,
            default: 'none'
        },
        scroll: {
            type: String,
            required: false,
            default: "false"
        },
        caption: {
            type: String,
            required: false,
            default: "left"
        },
        width: {
            type: String,
            required: false,
            default: "default"
        },
        ascolumn: {
            type: String,
            required: false,
            default: "false"
        },
        stacked: {
            type: String,
            required: false,
            default: "false"
        },
    });


const maxWidth = computedMaxWidth(props.width);
const slots = useSlots();
const is_stacked = computed(() => props.stacked == 'true')
const is_column = computed(() => props.ascolumn == 'true')
const is_scroll = computed(() => props.scroll == 'true')
const is_cap = computed(() => props.cap != "none")

</script>
<style scoped>
.capped {
    max-height: v-bind("cap");
    overflow: hidden;
}

.scroll {
    overflow: hidden;
    overflow-y: auto;
    user-select: none;
    ms-overflow-style: none;
    scrollbar-width: none;
    scroll-behavior: smooth;
}

.scroll::-webkit-scrollbar {
    display: none;
}
</style>
