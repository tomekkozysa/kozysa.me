<template>
    <div class="flex flex-col" :class="[stacked ? 'mb-8' : '', maxWidth]">
        <div class="flex flex-1 flex-col space-y-8"
            :class="[ascolumn ? '' : 'lg:flex-row lg: lg:space-y-0 lg:space-x-8']">

            <slot name="media" />
        </div>
        <Caption v-if="!stacked" :align="caption">
            <slot name="caption" />
        </Caption>
    </div>
</template>
<script setup>
const props = defineProps(
    {
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
            type: Boolean,
            required: false,
            default: false
        },
        stacked: {
            type: Boolean,
            required: false,
            default: false
        },
    });

const maxWidth = computedMaxWidth(props.width);
</script>
<style scoped></style>