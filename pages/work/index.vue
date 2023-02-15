<script setup>
const { data } = await useAsyncData("work", () =>
	queryContent("/work", "project1").findOne()
);
const projects = await queryContent("/work").find();
</script>
<template>
	<main>
		<div
			v-for="(project, index) in projects"
			class="w-full flex py-8"
			:class="index % 2 == 0 ? 'flex-row-reverse' : ''"
		>
			<div class="flex-1 p-8">
				<h2 class="text-4xl">{{ project.title }}</h2>
				{{ project.description }}
			</div>
			<div class="flex-1">
				<NuxtLink :to="project._path"
					><Display :src="project.thumbnail"
				/></NuxtLink>
			</div>
		</div>
	</main>
</template>
