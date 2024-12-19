<template>
    <div class="relative box-wrap">
        <div class="box" :class="[hideScrollbar ? 'hide-scrollbar' : '']" ref="boxelement">
            <div ref="scrollcontent">
                <slot></slot>
            </div>
        </div>
        <div v-show="shouldScroll" class="scroll-info w-full absolute bottom-0" :class="[showScrollTag ? 'show' : '']">
            <span class="scroll-info-content">
                ↓
            </span>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        width: {
            type: String,
            default: '300px',
            required: false,
        },
        height: {
            type: String,
            default: '300px',
            required: false,
        },
        maxWidth: {
            type: String,
            default: 'none',
            required: false,
        },
        maxHeight: {
            type: String,
            default: 'none',
            required: false,
        },
        minWidth: {
            type: String,
            default: 'none',
            required: false,
        },
        minHeight: {
            type: String,
            default: 'none',
            required: false,
        },
        aspectRatio: {
            type: String,

        },
        overflowX: {
            type: String,
            default: 'auto',
            required: false,
        },
        overflowY: {
            type: String,
            default: 'auto',
            required: false,
        },
        grow: {
            type: String,
        },
        hideScrollbar: {
            type: Boolean,
            default: true,
            required: false,
        },
        shrink: {
            type: String,
        },
    });


    const updateIndex = ref(0)

    onMounted(()=>{
        testScroll()
        window.addEventListener('resize',testScroll)
        const imgs= document.querySelectorAll('img:not(.placeholder)', scrollcontent)
        imgs.forEach((img)=>{
            img.addEventListener('load',()=>{
                setTimeout(()=>{
                    testScroll()
                },100)
            })  
        })
    })

const scrollcontent = ref(false)
const boxelement = ref(false)
const showScrollTag = ref(true)

const shouldScroll = ref(false)
const testScroll = ()=>{
    console.log('should scroll',shouldScroll.value)
    shouldScroll.value = doesItScroll()
}

const doesItScroll = ()=>{
    // console.log(updateIndex.value)
    return (props.overflowY === 'auto' && isBigger() )|| (props.overflowY === 'scroll' && isBigger())
}

const isBigger = ()=>{
    // console.log(updateIndex.value)
    if(boxelement.value && scrollcontent.value){
        const content = scrollcontent.value.getBoundingClientRect().height
        const box = boxelement.value.getBoundingClientRect().height
        return content > box
    }
    return false
}

</script>
<style scoped>
.box {
    /* flex: v-bind(flexGrow) */
    width: v-bind(width);
    height: v-bind(height);
    max-width: v-bind(maxWidth);
    max-height: v-bind(maxHeight);
    min-width: v-bind(minWidth);
    min-height: v-bind(minHeight);
    overflow-x: v-bind(overflowX);
    overflow-y: v-bind(overflowY);
    aspect-ratio: v-bind(aspectRatio);
    
}

.hide-scrollbar {
    overflow: hidden;
    overflow-y: auto;
    user-select: none;
    ms-overflow-style: none;
    scrollbar-width: none;
    scroll-behavior: smooth;
    position: relative;
    --scroll-tip-opacity: 1;
}
.scroll-info {
    transition:opacity .2s;
}
.box-wrap:hover .scroll-info {
    opacity: 0;
}

.scroll-info.show {
    opacity: 1
}
</style>
