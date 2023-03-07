<template>
	<div class="flex flex-col mt-8 max-w-5xl border border-green-600">
		<div class="flex space-x-8">
			<slot name="image" />
		</div>

		<slot name="caption" />
	</div>
</template>
