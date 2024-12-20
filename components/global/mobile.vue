<template>
	<div class="display-wrapper">
		<div class="display">
			<nuxt-img :src="imageSource" :alt="alt" lazy preset="mobile" ref="image" class="display-image"/>
		</div>
	</div>
</template>
<script setup>
const placeholder = ref('/img/placeholder.png')

const props = defineProps({
		src:{
			type:String,
			required:true,
			default:()=>'/img/placeholder.png'
		},
		alt:{
			type:String,
		}
	});

const imageSource = computed(() => {
  if(props.src!== null)
  	return props.src
else{
	return placeholder.value
}
})

const image = useTemplateRef('image')

const stopdrag = ()=>{}
const startdrag = (e)=>{}

</script>
<style scoped>
.display-image{
	width:100%
}
.display-wrapper {
	border: 1px solid black;
	border-radius: 15px;
}
.display {
	user-select: none;
	border: 2px solid white;
	border-radius: 15px;
	aspect-ratio: 0.5625;
	overflow-y: scroll;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	scroll-behavior: smooth;
}
.display::-webkit-scrollbar {
	display: none;
}
</style>
