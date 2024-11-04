<script setup>

const page = await queryContent("/about.md").find();
console.log({ page })
const filtered = projectsByOrder.filter(p => !p._file.includes('index.md'))
const maxWidth = computedMaxWidth("default");

</script>
<template>



	<ContentDoc :path="`/work/`" v-slot="{ doc }" class="w-full flex flex-col items-center justify-start" />

	<div class="w-full flex flex-col items-center justify-start">
		<div v-for="(project, index) in filtered" class="w-full mt-16" :class="[maxWidth]">
			<NuxtLink v-if="project.online" :to="project._path">
				<h2 class="text-2xl">{{ project.title }}</h2>
				<span class="text-sm">{{ project.description }}</span>
			</NuxtLink>
		</div>
	</div>

</template>
