<script setup>
const projects = await queryContent("/work").find();
const projectsByOrder = projects.sort((a, b) => (a.order > b.order ? 1 : -1));
console.log(projects);
</script>
<template>
	<main class="flex flex-col items-center">
		<section
			class="sticky top-10 bg-stone-50 pb-4 w-full flex flex-col items-center max-w-6xl"
		>
			<!-- <div
				v-for="(project, index) in projects"
				class="w-full flex py-8"
				:class="index % 2 == 0 ? 'flex-row-reverse' : ''"
			>
				<div class="flex-1 p-8">
					<h2 class="text-4xl">{{ project.title }}</h2>
					{{ project.description }}
				</div>
				<div class="flex-1">
					<NuxtLink :to="project._path">
						<Display :src="project.thumbnail" />
					</NuxtLink>
				</div>
			</div> -->

			<div
				v-for="(project, index) in projectsByOrder"
				class="w-full mt-16 pl-32 pr-10"
			>
				<NuxtLink :to="project._path">
					<h2 class="text-2xl">{{ project.title }}</h2>
					<span class="text-sm">{{ project.description }}</span>
				</NuxtLink>
			</div>
		</section>
	</main>
</template>
