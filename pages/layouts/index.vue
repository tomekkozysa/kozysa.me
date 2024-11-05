<script setup>

const projects = await queryContent("/layouts").find();
const projectsByOrder = projects.sort((a, b) => {
	if (a.order == null) a.order = 100;
	const sorted = a.order > b.order ? 1 : -1
	return sorted
});

const filtered = projectsByOrder.filter(p => !p._file.includes('index.md'))
const maxWidth = computedMaxWidth("default");

</script>
<template>

	<ContentDoc :path="`/layouts/`" v-slot="{ doc }" class="w-full flex flex-col items-center justify-start" />

	<div class="w-full flex flex-col items-center justify-start">
		<div v-for="(project, index) in filtered" class="w-full mt-16" :class="[maxWidth]">
			<NuxtLink v-if="project.online" :to="project._path">
				<h2 class="text-2xl">{{ project.title }}</h2>
				<span class="text-sm">{{ project.description }}</span>
			</NuxtLink>
		</div>
	</div>


</template>
