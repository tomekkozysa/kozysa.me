<template>
    <figure class="media flex flex-col" :class="[stacked ? 'stacked' : '', maxWidth]">
        <div class="flex media-content"
            :class="[landscape ? 'landscape' : 'portrait']">
            <ContentSlot :use="$slots.media" unwrap="p" />
        </div>
        <Caption v-if="!stacked" :align="caption">
            <slot name="caption" />
        </Caption>
    </figure>
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
        landscape: {
            type: Boolean,
            default: true,
            required: false
        },
        stacked: {
            type: Boolean,
            required: false,
            default: false
        },
    });

const maxWidth = computedMaxWidth(props.width);
</script>