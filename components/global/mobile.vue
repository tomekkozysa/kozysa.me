<template>
	<div class="display-wrapper">
		<div class="display">
			<nuxt-img :src="image" :alt="alt" lazy preset="work" />
		</div>
	</div>
</template>
<script setup>
const props = defineProps(["image", "alt"]);
</script>
<style scoped>
.display-wrapper {
	border: 1px solid black;
	border-radius: 15px;
}
.display {
	user-select: none;
	border: 2px solid white;
	border-radius: 15px;
	aspect-ratio: 0.5625;
	overflow-y: scroll;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	scroll-behavior: smooth;
}
.display::-webkit-scrollbar {
	display: none;
}
</style>
