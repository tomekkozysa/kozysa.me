<template>
    <div class="cookie-bar py-4 px-8 mb-4">
        Hi, I use Google Analytics to know how my website is performing, hope that's ok
        <span class="cookie-bar-action" @click="acceptCookies">
            Yes it's fine
        </span>
        <span class="cookie-bar-action" @click="rejectCookies">
            Please don't do it
        </span>
    </div>
    <div v-if="hasAccepted" >🍪 </div>
</template>
<script setup>

const analyticsCookie = useCookie('analyticsCookie')
const hasAccepted = computed(()=>analyticsCookie.value)
const gtag = useGtag()

onMounted(()=>{
    if(analyticsCookie.value){
        // useTrackEvent('page_view')
        gtag.gtag('consent','default',{
            'analytics_storage':'granted',
        })
    }
})
const acceptCookies = ()=>{
    analyticsCookie.value = true
    gtag.gtag('consent','update',{
        'analytics_storage':'granted',
        'wait_for_update':500
    })
    // gtag.enableAnalytics()
}
const rejectCookies = ()=>{
    analyticsCookie.value = false
    gtag.gtag('consent','update',{
        'analytics_storage':'denied',
        'wait_for_update':500
    })
    // gtag.disableAnalytics()
}
</script>
<style>
.cookie-bar{
    position: sticky;
    bottom:1rem;
}
.cookie-bar-action{
    @apply py-4 px-4 bg-gray-800 text-white mx-2 rounded;
    white-space: nowrap;
    
}
</style>	
    
    