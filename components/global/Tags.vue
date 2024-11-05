<template>
	<ul
		class="tags flex w-full justify-self-start"
		:class="[horizontal ? 'flex-row space-x-2' : 'flex-col', maxWidth]"
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
