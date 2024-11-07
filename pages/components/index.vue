<script setup>

const projects = await queryContent("/components").find();
const projectsByOrder = projects.sort((a, b) => {
	if (a.order == null) a.order = 100;
	const sorted = a.order > b.order ? 1 : -1
	return sorted
});

projectsByOrder.forEach(p => console.log(p))
const filtered = projectsByOrder.filter(p => !p._file.includes('index.md'))
const maxWidth = computedMaxWidth("default");

</script>
<template>
	<div class="slug-intro w-full" :class="[maxWidth]">
		<ContentDoc :path="`/components/`" v-slot="{ doc }" class="w-full flex flex-col items-center justify-start"/>
	</div>	
	<div v-for="(project, index) in filtered" class="slug-content w-full" :class="[maxWidth]">
		<NuxtLink v-if="project.online" :to="project._path" class="slug-link">
			<h2 class="slug-link-title">{{ project.title }}</h2>
			<span class="slug-link-description">{{ project.description }}</span>
		</NuxtLink>
	</div>
</template>
