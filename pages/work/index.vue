<script setup>

const projects = await queryContent("/work").find();
const projectsByOrder = projects.sort((a, b) => {
	if (a.order == null) a.order = 100;
	const sorted = a.order > b.order ? 1 : -1
	return sorted
});

const filtered = projectsByOrder.filter(p => !p._file.includes('index.md') && p.online)
const maxWidth = computedMaxWidth("default");

</script>
<template>
	<div class="slug-intro w-full" :class="[maxWidth]">
		<ContentDoc :path="`/components/`" v-slot="{ doc }" class="w-full"/>
	</div>	
	<div v-for="(project, index) in filtered" class="slug-content w-full" :class="[maxWidth]">
		<card :title="project.title" :image="project.thumbnail" 
	:description="project.description" :link="project._path"/>
	</div>
</template>

