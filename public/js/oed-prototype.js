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
        charsset: "abcdefghijklmnopqrstuvwxyz",
        
        spinToLetter: function () {


        },
        randomChar: function () {
            const chars = c.charsset.split("")
            const charlen = chars.length
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


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}