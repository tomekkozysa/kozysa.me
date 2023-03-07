<template>
	<ul
		class="text flex flex-col w-full justify-self-start"
		:class="[maxWidth]"
	>
		<li v-for="tag in list" class="max-w-xl">
			{{ tag }}
		</li>
	</ul>
</template>
<script setup>
const props = defineProps(["list"]);
const maxWidth = computedMaxWidth("default");
</script>
