<template>
	<section class="grid-item" :class="[area, justify == 'start' ? 'justify-self-start': justify == 'end' ? 'justify-self-end': '',
		, align == 'start' ? 'self-start': align == 'end' ? 'self-end': 'self-center'
	]">
		<slot />
	</section>
</template>
<script setup>
	const props = defineProps({
		area:{
			type:String,
			default:'a b c',
			required:true
		},
		align:{
			type:String,
			default:'start',
			required:false
		},
		justify:{
			type:String,
			default:'start',
			required:false
		}
	});
</script>
<style scoped>
.grid-item{
	grid-area: v-bind(area)
}
</style>
