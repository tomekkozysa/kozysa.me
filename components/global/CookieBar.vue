<template>
    <div  v-show="!hasAccepted" 
        :class="[isHidden ?  'is_hidden' : '' ]"
        class="cookie-bar py-4 px-8 flex flex-wrap items-center gap-4">
        I use Google Analytics to know how my website is performing, hope that's ok
        <div class="actions flex">
            <div class="cookie-bar-action" @click="acceptCookies">
                Yes, that's fine
            </div>
            <div class="cookie-bar-action" @click="rejectCookies">
                Please don't do it!
            </div>
        </div>
    </div>
</template>
<script setup>

const gtag = useGtag()
const analyticsCookie = useCookie('analyticsCookie')
const hasAccepted = computed(()=>analyticsCookie.value)
const isHidden = ref(false)
const route = useRoute();
watch(() => route.fullPath, () => {
    if(!hasAccepted.value){
        isHidden.value = false
    }
});
  onMounted(()=>{
    if(analyticsCookie.value){
        isHidden.value = true
        gtag.gtag('consent','default',{
            'analytics_storage':'granted',
        })
    }
    else{
        isHidden.value = false
    }
})
const acceptCookies = ()=>{
    analyticsCookie.value = true
    isHidden.value = true
    gtag.gtag('consent','update',{
        'analytics_storage':'granted',
        'wait_for_update':500
    })
}
const rejectCookies = ()=>{
    analyticsCookie.value = false
    isHidden.value = true
    console.log('hide')
    gtag.gtag('consent','update',{
        'analytics_storage':'denied',
        'wait_for_update':500
    })
}
</script>
<style>
.cookie-bar{
    position: sticky;
    bottom:0;
    transition: transform .3s ease-in-out, opacity .1s ease-in .2s;
    border-top:2px solid black;
    background-color: rgb(250,250,249);
    transition-delay: 1s;
    opacity: 1;
}
.cookie-bar.is_hidden{
    transition-delay: .1s;
    transform: translateY(100px);
    opacity: 0;
}
.cookie-bar-action{
    @apply py-3 px-4 bg-gray-800 text-white mx-2 rounded;
    white-space: nowrap;
    cursor: pointer;
    
}
</style>	
    
    