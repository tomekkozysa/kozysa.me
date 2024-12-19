<template>
    <section class="demo bg-white w-full">
        <div class="container" ref="frame" @mousedown="onMouseDown" @mouseout="onMouseOut">
            <section ref="disp" class="cubes"></section>
        </div>
    </section>
</template>
<script setup>

const ang = 0;
const angStep = 16;



const cubes = [];

const disp = ref(null)
const frame = ref(null)

const dir = 1;
const pause = ref(false);

const waitforCubes = ()=>{
    if(Cube === undefined){
        setTimeout(waitforCubes,300)
    }
    else{

        addCubes(60);
    }
}
onMounted(()=>{
    waitforCubes();    
})

useHead({
  script: [{ src: "/js/oed-prototype.js" }],
});

const onMouseDown = ()=>{
    for (let ii = 0; ii < cubes.length; ii++) {
        const cub = cubes[ii]
        cub.el.style.zIndex = 100000 - ii;
        cub.explode();
    }
}

const onMouseOut = ()=>{
    pause.value = true;
}


function addCubes(no) {

    for (var i = 0; i < no; i++) {

        var c = new Cube();
        cubes.push(c);
        disp.value.appendChild(c.wrap)
    }


}













</script>
<style>
#display{
		pointer-events: none;
	}
	.container {

  		width: 100%;
  		height: 0px;
  		position: relative;
 		padding:0px;

		margin:0 auto;

		perspective: 5000px;
		perspective-origin: 50% 51%;
		transform-style: preserve-3d;



    	height:600px;

		display: flex;
  	align-items: center;
  	justify-content: center;


	}
.cubes{

	width:calc(12 * 25px);



	transform-style: preserve-3d


}

.cube {
	width: 24px;
	height: 24px;
	transform-style: preserve-3d;
	float:left;
    font-weight: 600;
	margin: 0;
	display:inline-block;
	transform-origin: 50%;
	 backface-visibility: hidden;
	pointer-events: none;


	transition: transform 1.2s ease-in-out, top 1s ease-in, left 1s ease-in;
transition-timing-function: ease-in-out;
position: relative;
width:24px;
height:24px;
top:0;
left:0;
}


.cube-wrap{
	width:25px;
	height:25px;
	position:relative;
	float:left;
	transition: transform 1.2s, top 1s ease-in, left 1s ease-in;
	top:0;left:0;
	transform-style: preserve-3d;


}

.cube .cube-side {

  margin:0;
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  background: black;
  color:black;
  text-align: center;
  font-size: 16px;
  line-height: 22px;
  text-transform: uppercase;
  backface-visibility: hidden;
border-radius:2px;


}

.cube-side-inner {
	border-radius:2px;
	background: white;


	width: 80%;
	height:80%;
	margin:10% ;


}

.cube .front  {   transform: rotateY(   0deg ) translateZ( 12px ); }
.cube .back   {    transform: rotateX( 180deg ) translateZ( 12px ); }
.cube .right  {    transform: rotateY(  90deg ) translateZ( 12px ); }
.cube .left   {    transform: rotateY( -90deg ) translateZ( 12px ); }
.cube .top    {    transform: rotateX(  90deg ) translateZ( 12px ); }
.cube .bottom {  transform: rotateX( -90deg ) translateZ( 12px ); }


.cube.show-front  { transform: translateZ( -20px ) rotateY(    0deg ); }
.cube.show-back   { transform: translateZ( -20px ) rotateX( -180deg ); }
.cube.show-right  { transform: translateZ( -20px ) rotateY(  -90deg ); }
.cube.show-left   { transform: translateZ( -20px ) rotateY(   90deg ); }
.cube.show-top    { transform: translateZ( -20px ) rotateX(  -90deg ); }
.cube.show-bottom { transform: translateZ( -20px ) rotateX(   90deg ); }


	</style>
