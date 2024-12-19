<template>
	<svg class="navigation-toggle":class="[expanded ? 'expanded' : '']" width="24" height="24" viewBox="0 0 24 24" fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<line class="bar bar-top" x1="0" y1="12" y2="12" x2="24" stroke-width="2" stroke="white" />
		<line class="bar bar-bottom" stroke-width="2" stroke="white" x1="0" y1="12" y2="12" x2="24" />
	</svg>
</template>
<script setup>
const props = defineProps(["expanded"]);
</script>
<style scoped>

.toggle {
	z-index: 50;
	--yspread1: -3px;
	--yspread2: 3px;
	--sw: 3px;
	/* --sc: black; */

	--r1: 0deg;
	--r2: 0;
}

.toggle:hover {
	--yspread1: -5px;
	--yspread2: 5px;
}

.toggle.expanded {
	--yspread1: 0;
	--yspread2: 0;
	--r1: 135deg;
	--r2: -135deg;
}

.bar {
	stroke-width: var(--sw);
	/* stroke: var(--sc); */
	stroke:currentColor;
	transition: transform 0.23s;
	transform-origin: 50%;
}

.bar-top {
	transform: rotate(var(--r1)) translateY(var(--yspread1));
}

.bar-bottom {
	transform: rotate(var(--r2)) translateY(var(--yspread2));
}
</style>
