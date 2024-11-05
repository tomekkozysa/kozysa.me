<template>
	<div class="testimonial align-center flex flex-col w-full" :class="[align == 'right' ? 'text-end' : align == 'center' ? 'text-center' : 'text-start',
		maxWidth]">

		<div class="max-w-ch">
            <div class="testimonial-quote">
                <slot name="quote" />
            </div>
		    <div class="mt-2 testimonial-source">
			    <slot name="source" />
		    </div>
        </div>

	</div>
</template>
<script setup>

const props = defineProps({
	align: { type: String, default: "left", required: false },
	width: { type: String, default: '', required: false }
})

const maxWidth = computedMaxWidth(props.width);

</script>
