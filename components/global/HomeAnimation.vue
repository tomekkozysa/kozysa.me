<template>
    <svg class="anim" :class="{is_loading}" width="300px" height="450px" viewBox="0 0 300 450" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">      
        <g id="drawthis" :class="{is_loading}">
            <rect class="strk"  x="8.00346021" y="7" width="286" height="71"></rect>
            <rect class="strk"  x="7" y="372" width="286" height="68.1981424"></rect>
            <rect class="strk" x="8.00346021" y="92" width="71" height="266"></rect>
            <rect class="strk"  x="92" y="92" width="201" height="76"></rect>
            <rect class="strk"  x="92" y="312" width="201" height="46"></rect>
            <rect class="strk"  x="92" y="217" width="91" height="76"></rect>
            <rect class="strk"  x="202" y="217" width="91" height="76"></rect>
            <path class="strk" d="M90,185 L295,185" ></path>
            <path class="strk" d="M90,200.5 L295,200.5" ></path>
        </g>

        <g id="pencil"style="transform: translateX(-200%) translateY(455px) " >
            <g transform="scale(1.5)">
                <polygon id="body" class="pencil pencil-body" points="10.2,-31.1 -0.7,-4.7 0.7,0 5.1,-2.3 16,-28.7 	"/>
                <polygon id="tip" class="pencil pencil-tip" points="0.9,-0.5 0.3,-2.7 1.2,-2.4 2,-2.1 3,-1.5 	"/>
                <polygon id="blink" class="pencil pencil-blink" points="0.9,-0.5 -0.2,-4.6 10.4,-30.1 11.7,-29.4 1.3,-4.2 	"/>
                <g id="lines">
                    <line class="pencil pencil-line" x1="12.1" y1="-30.3" x2="1.3" y2="-4.2"/>
                    <line class="pencil pencil-line" x1="13.9" y1="-29.5" x2="3.1" y2="-3.4"/>
                </g>
                <g id="end">
                    <ellipse transform="matrix(0.3827 -0.9239 0.9239 0.3827 36.277 -6.4349)" class="pencil-end" cx="13.3" cy="-30.4" rx="1.2" ry="3.1"/>
                    <ellipse transform="matrix(0.3827 -0.9239 0.9239 0.3827 36.2769 -6.435)" class="pencil-end" cx="13.3" cy="-30.4" rx="0.4" ry="1.1"/>
                </g>        
            </g>
        </g>
    </svg>
    
</template>
<script setup>
useHead({
  script: [{ src: "js/anime.js" }],
});


const svgNS = "http://www.w3.org/2000/svg";
const in_drawing_mode = ref(false);
const is_loading = ref(true)

const getLength = (item) => {
  if (item.nodeName == "rect") {
    return item.getAttribute("width") * 2 + item.getAttribute("height") * 2;
  } else return item.getTotalLength();
};

const resetCollection = (coll) => {
  coll.forEach(function (item, index) {
    const path = anime.path(item);
    item.style.strokeDasharray = getLength(item) + "px";
    item.style.strokeDashoffset = getLength(item) + "px";
  });
};

const getCollection = (coll) => {
  return document.querySelectorAll("#drawthis > *");
};

const rectToPath = (item) => {
  let x = parseInt(item.getAttribute("x")),
    y = parseInt(item.getAttribute("y")),
    width = parseInt(item.getAttribute("width")),
    height = parseInt(item.getAttribute("height")),
    x2 = x + width,
    y2 = y + height,
    css = item.getAttribute("class");

  let d = `M${x},${y} L${x2},${y} L${x2},${y2} L${x},${y2} Z`;
  let path = document.createElementNS(svgNS, "path");
  path.setAttribute("d", d);
  path.setAttribute("class", css);
  item.parentNode.replaceChild(path, item);

};

var fixRects = (collection) => {
  collection.forEach(function (item, index) {
    if (item.nodeName == "rect") {
      rectToPath(item);
    }
  });
};



const pencilRest = () => {
  anime({
    targets: "#pencil",
    translateX: 280,
    translateY: 455,
    rotate: -22.5,
    duration: 300,
  });
};

const pencilRollIn = () => {
  anime({
    targets: "#pencil",
    translateX: 280,
    translateY: 455,
    elasticity: 100,
    duration: 700,
    complete: pencilRest,
  });
};



const draw = (collection, doneCallback) => {
  in_drawing_mode.value = true;
  var speed = 0.75;
  var grow = 3000;

  var animate = function (index) {
    if (index >= collection.length) {
      doneCallback(1);
      return;
    }

    let item = collection[index];
    let path = anime.path(item);
    var pathLength = item.getTotalLength(); //getLength(path);

    speed += (speed / grow) * 100;

    anime({
      targets: "#pencil",
      translateX: path,
      translateY: path,
      rotate: path,
      easing: "easeInOutQuad",
      duration: pathLength / speed,
      complete: function (anim) {
        animate(index + 1);
      },
    });

    anime({
      targets: collection[index],
      strokeDasharray: [pathLength, pathLength],
      strokeDashoffset: [pathLength, 0],
      easing: "easeInOutQuad",
      duration: pathLength / speed,
      complete: function (anim) {
        collection[index].style.strokeDasharray = 0;
        collection[index].style.strokeDashoffset = 0;
      },
    });
  };

  animate(0);
}

const drop =()=> {
  in_drawing_mode.value = false;
  pencilRest();
  return;
}



onMounted(()=>{

  // return;

  let collection = getCollection();
  fixRects(collection);

  collection = document.querySelectorAll("#drawthis > *");
  resetCollection(collection);

  setTimeout(() => {
    document.querySelector("svg").classList.remove("is_loading");
    pencilRollIn();
  }, 300);

  document.querySelector("svg").addEventListener("click", (e) => {
    if (!in_drawing_mode.value) {
      resetCollection(collection);
      draw(getCollection(), drop);
    } else {
      return;
    }
  });

  document.querySelector("#pencil").addEventListener("click", (e) => {
    if (!in_drawing_mode.value) {
      resetCollection(collection);
      draw(getCollection(), drop);
    } else {
      return;
    }
  });


  setTimeout(() => {
    if (!in_drawing_mode.value) {
      draw(collection, drop);
    }
  }, 3000);

  is_loading.value = false
}
);






</script>
<style>
.is_loading{
    opacity:.5
}
.anim {
    overflow: visible;
}
#pencil{
    cursor:pointer;
}
.strk{
stroke-width:3;
stroke:rgb(31, 41, 55);
fill:none;
}
.pencil-body{
stroke-width:1;
stroke:black;
fill:white;

}
.pencil-line{
stroke-width:1;
stroke:rgba(0,0,0,.2);

}
.pencil-blink{
stroke:none;
fill:rgba(250,160,40,.8);
}
.pencil-end,
.pencil-tip{
stroke:none;
fill:black;

}
</style>