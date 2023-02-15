<template>
	<div class="display">
		<nuxt-img :src="src" :alt="alt" lazy preset="work" />
	</div>
</template>
<script setup>
const props = defineProps(["src", "alt"]);
</script>
<style scoped>
.display {
	border: 2px solid black;
	border-radius: 15px;
	/* max-height: 60vh; */
	overflow: hidden;
	/* overflow-y: auto; */
	/* user-select: none; */
	/* ms-overflow-style: none;  */
	/* scrollbar-width: none;  */
	/* scroll-behavior: smooth; */
	/* aspect-ratio: 1.77777778; */
}

.display::-webkit-scrollbar {
	/* display: none; */
}
</style>
