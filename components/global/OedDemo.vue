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

const charsset = "abcdefghijklmnopqrstuvwxyz";
const chars = charsset.split("");
const charlen = chars.length;

const cubes = [];

onMounted(()=>{
    addCubes(60);
})

const Cube = function () {

    var c = {

        axis: 'X', // 'X','Y','Z'
        time: 100,
        angle: 0,
        speed: this.time / 10,
        el: null,
        wrap: null,
        rotation: { 'X': 0, 'Y': 0, 'Z': 0 },
        state: null,

        spinToLetter: function () {


        },
        randomChar: function () {
            return chars[Math.floor(Math.random() * charlen)]
        },
        reset: function () {

            this.rotate(0, 0, 0);

        },
        rotate: function (x, y, z) {


            this.rotation.X = 1 * x;
            this.rotation.Y = 1 * y;
            this.rotation.Z = 1 * z;


            let ts = "rotateX(" + x + "deg) "
            ts += "rotateY(" + y + "deg) "
            ts += "rotateZ(" + z + "deg)"

            this.el.style.transform = ts;


            console.log(ts)

        },
        spinToBack: function () {
            this.rotate(540, 0, 0)
            //
        },
        explode: function () {


            var ycrazy = 0;
            var xcrazy = 0;
            var deg = 720;
            var sc = "1.1,1.1,1.1";

            var del = Math.random() * .6 + 's';

            var _this = this;

            let ts = "rotateX(" + Math.random() * deg + "deg) "
            //ts += "rotateY("+Math.random()*deg+"deg) "
            ts += "rotateZ(" + Math.random() * deg + "deg)"

            ts += "scale3d(" + sc + ")";

            this.el.style.transform = ts;
            this.el.style.transitionDuration = '1.5s';


            this.el.style.transitionDelay = del;



            this.wrap.style.transitionDelay = del;
            this.wrap.style.transitionDuration = '1s';
            this.wrap.style.transform = "translateZ(" + getRandomInt(-8000, 3000) + "px)";//translateZ("+(Math.random()*200000-100000)+"px)";
            this.wrap.style.top = (-1 * ycrazy) + Math.random() * ycrazy * 2;
            this.wrap.style.left = (-1 * xcrazy) + Math.random() * xcrazy * 2;


            this.state = "exploded";

            // this.el.addEventListener("transitionend",this.tend);
            setTimeout(function () {
                _this.implode();
            }, 1500)


            if (this.state == null) { }



        },
        // tend:function(e){
        // 	e.target.removeEventListener("transitionend",this.tend);
        // 	//this.implode();
        // },
        implode: function () {

            var deg = "0deg";
            var _this = this;
            var del = Math.random() * 1 + 's';

            let ts = "rotateX(" + deg + ")"
            ts += "rotateY(-360deg)"
            ts += "rotateX(-180deg)"

            ts += "scale3d(1,1,1)";


            this.el.style.transitionDuration = '.5s';
            this.el.style.transform = ts;
            this.el.style.transitionDelay = del;

            this.wrap.style.transitionDuration = '.6s';
            this.wrap.style.transitionDelay = del;


            this.wrap.style.transform = "translateZ(0)";//
            this.wrap.style.top = 0;
            this.wrap.style.left = 0;
            //
            // setTimeout(function(){
            // 	_this.explode();
            // },300)

        },

        setBackTo: function (letter) {

            //.innerHTML= "New Text";
            //var elem = document.querySelector('#example');
            var firstElem = this.el.querySelector('.back');
            var node = firstElem.querySelector('.cube-side-inner')
            node.innerHTML = letter;

        },

        create: function () {

            this.el = document.createElement('div');
            this.el.className = "cube";

            this.wrap = document.createElement('div');
            this.wrap.className = "cube-wrap";

            var front = document.createElement('figure');
            front.className = "cube-side front letter";


            var side = front.appendChild(document.createElement("div"));
            side.appendChild(document.createTextNode(this.randomChar()));
            side.className = "cube-side-inner";

            var back = document.createElement('figure');
            back.className = "cube-side back letter"

            side = back.appendChild(document.createElement("div"));
            side.appendChild(document.createTextNode(this.randomChar()));
            side.className = "cube-side-inner";


            var right = document.createElement('figure');
            right.className = "cube-side right letter"

            side = right.appendChild(document.createElement("div"));
            side.appendChild(document.createTextNode(this.randomChar()));
            side.className = "cube-side-inner";


            var left = document.createElement('figure');
            left.className = "cube-side left letter"

            side = left.appendChild(document.createElement("div"));
            side.appendChild(document.createTextNode(this.randomChar()));
            side.className = "cube-side-inner";


            var top = document.createElement('figure');
            top.className = "cube-side top letter"

            side = top.appendChild(document.createElement("div"));
            side.appendChild(document.createTextNode(this.randomChar()));
            side.className = "cube-side-inner";


            var bottom = document.createElement('figure');
            bottom.className = "cube-side bottom letter";

            side = bottom.appendChild(document.createElement("div"));
            side.appendChild(document.createTextNode("n"));
            side.className = "cube-side-inner";





            this.el.appendChild(front)
            this.el.appendChild(back)
            this.el.appendChild(right)
            this.el.appendChild(left)
            this.el.appendChild(top)
            this.el.appendChild(bottom)

            this.wrap.appendChild(this.el);






        }

    }

    c.create();
    return c;
}



const disp = ref(null)
const frame = ref(null)

const dir = 1;
const pause = ref(false);


// frame.value.addEventListener('mousedown')

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

// frame.value.addEventListener('mouseout', function () {
//     // console.log('out');
// })




function addCubes(no) {

    for (var i = 0; i < no; i++) {

        var c = new Cube();
        cubes.push(c);
        disp.value.appendChild(c.wrap)
    }


}










function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
