<template>
	<div class="flex gap-x-4 mt-8 min-w-full">
		<figure class="flex flex-col min-w-1/2 flex-1 items-center">
			<slot name="left" />
		</figure>
		<figure class="flex flex-col min-w-1/2 flex-1 items-center">
			<slot name="right" />
		</figure>
	</div>
</template>
