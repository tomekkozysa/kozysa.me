<template>
	<svg
		version="1.1"
		id="Layer_1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		x="0px"
		y="0px"
		viewBox="0 0 870 1750"
		style="enable-background: new 0 0 870 1750"
		@mousedown="startdrag"
		@mouseup="stopdrag"
		@mousemove="drag"
	>
		<g>
			<image
				width="750"
				height="3820"
				:href="image"
				x="60"
				:y="currentY"
				mask="url(#mask)"
				ref="img"
				@mousemove="interact"
			/>
		</g>
		<mask
			id="mask"
			style="mask-type: alpha"
			maskUnits="userSpaceOnUse"
			x="0"
			y="0"
			width="870"
			height="1750"
		>
			<rect x="60" y="210" width="750" height="1335" fill="white" />
		</mask>
		<g>
			<path
				class="outer"
				d="M728.2,1745.4c70.3,0,127.8-57.4,127.8-127.6l0-1118.2c4.3-1.7,8-3.8,8-8.7V385c0-4.9-3.6-7.3-8-9.3V131.2
		C856,61,798.5,3.6,728.2,3.6H141.8C71.5,3.6,14,61,14,131.2v91.5c-4.3,2-8,4.4-8,9.3v51.5c0,4.9,3.6,6,8,7.7l0,84.3
		c-4.3,2-8,4.4-8,9.3v105.9c0,4.9,3.6,7,8,8.7l0,35.6c-4.3,2-8,4.4-8,9.3v108.4c0,4.9,3.6,7,8,8.7l0,956.1
		c0,70.2,57.5,127.6,127.8,127.6H728.2z"
			/>
			<circle class="outer" cx="437.8" cy="1640.2" r="62.4" />
			<rect
				x="60"
				y="210"
				width="750"
				height="1335"
				class="display"
				ref="display"
			/>
			<path
				class="decor"
				d="M138.8,1733.1c-62.8,0-114.1-51.3-114.1-114l0-1489.8c0-62.7,51.4-114,114.1-114h591.6
		c62.8,0,114.1,51.3,114.1,114v1489.8c0,62.7-51.4,114-114.1,114H138.8z"
			/>
			<ellipse cx="301.3" cy="111.7" rx="15.3" ry="15.2" class="decor" />
			<ellipse cx="301.3" cy="111.7" rx="11" ry="11" class="decor" />
			<ellipse cx="301.3" cy="110.9" rx="3.6" ry="3.6" class="decor" />
			<path
				class="decor"
				d="M503.4,120.8H373c-0.7,0-1.3-0.6-1.3-1.3v-13.8c0-0.7,0.6-1.3,1.3-1.3h130.3c0.7,0,1.3,0.6,1.3,1.3v13.8
		C504.7,120.2,504.1,120.8,503.4,120.8z"
			/>
		</g>
	</svg>
</template>
<script setup>
const props = defineProps(["image"]);
const isDragged = ref(false);
const img = ref(null);
const display = ref(null);
const startY = 210;
const currentY = ref(startY);
const imgh = ref(0);
const displayh = ref(0);

onMounted(() => {
	window.addEventListener("mouseup", stopdrag);
});

const stopdrag = (e) => {
	isDragged.value = false;
};
const startdrag = (e) => {
	isDragged.value = true;
	imgh.value = img.value.getBoundingClientRect().height;
	displayh.value = display.value.getBoundingClientRect().height;
};
const drag = (e) => {
	console.log(startY, currentY.value, -1 * imgh.value, displayh.value);
	if (!isDragged.value) {
		return;
	}
	currentY.value += e.movementY * 10;
	if (currentY.value > startY) {
		currentY.value = startY;
	}
	if (currentY.value < -1 * (imgh.value + displayh.value + startY * 2)) {
		console.log("------");
		currentY.value = -1 * (imgh.value + displayh.value + startY * 2);
	}
};
</script>
<style scoped>
.outer {
	fill: none;
	stroke: black;
	stroke-width: 4;
}
.display {
	fill: none;
	stroke: black;
	stroke-width: 2;
}
.decor {
	fill: none;
	stroke: black;
	stroke-width: 1;
}
</style>
