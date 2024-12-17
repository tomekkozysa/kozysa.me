<script setup>

const projects = await queryContent("/experiments").find();
const projectsByOrder = projects.sort((a, b) => {
	if (a.order == null) a.order = 100;
	const sorted = a.order > b.order ? 1 : -1
	return sorted
});

const filtered = projectsByOrder.filter(p => !p._file.includes('index.md') && p.online)
const maxWidth = computedMaxWidth("default");

</script>
<template>
	<div class="content w-full" :class="[maxWidth]">
		<div class="intro w-full" :class="[maxWidth]">
			<ContentDoc :path="`/experiments/`" v-slot="{ doc }" class="w-full"/>
		</div>
		<div v-for="(project, index) in filtered">
			<!-- <card :title="project.title" :image="project.thumbnail"
		:description="project.description" :link="project._path"/> -->
			<NuxtLink :to="project._path" class="page-link">
				<h3 class="page-link-title">{{ project.title }}</h3>
				<span class="page-link-description">{{ project.description }}</span>
			</NuxtLink>
		</div>
	</div>
</template>

