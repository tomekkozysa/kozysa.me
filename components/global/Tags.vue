<template>
	<ul
		class="tags flex w-full justify-self-start text-zinc-600 text-sm lg:text-base"
		:class="[horizontal ? 'flex-row space-x-1' : 'flex-col', maxWidth]"
	>
		<li v-for="tag in list" class="tag-list-item">
			<span class="tag">{{ tag }}</span>
		</li>
	</ul>
</template>
<script setup>
const props = defineProps({
	list:{
		type:Array,
		default:()=>[],
		required:false
	},
	horizontal:{
		type:Boolean,
		default:false,
		required:false
	}
});
const maxWidth = computedMaxWidth("default");
</script>
