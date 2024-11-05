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
	<ContentDoc :path="`/work/`" v-slot="{ doc }" class="w-full flex flex-col items-center justify-start" />
	<div class="w-full flex flex-col items-center justify-start">
		<div v-for="(project, index) in filtered" class="w-full mt-16" :class="[maxWidth]">
			<!-- <NuxtLink :to="project._path">
				<h2 class="text-2xl">{{ project.title }}</h2>
				<span class="text-sm">{{ project.description }}</span>
				<display alt="project image" :src="project.thumbnail" :src-width= 200 :src-height=200 />
				
			</NuxtLink> -->

			<card :title="project.title" :image="project.thumbnail" 
				:description="project.description" :link="project._path"/>
		</div>
	</div>
</template>
