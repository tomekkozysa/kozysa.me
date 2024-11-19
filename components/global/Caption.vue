<template>
	<figcaption 
		class="caption max-w-ch flex-0"
		:class="[align, noborder ? 'noborder' : '']">
			<ContentSlot :use="$slots.default" unwrap="p" />
	</figcaption>
</template>
<script setup>
const props = defineProps({
	align:{
		type:String,
		default:"left",
		required:false
	},
	noborder:{
		type:Boolean,
		default:false,
		required:false
	}
});
</script>
