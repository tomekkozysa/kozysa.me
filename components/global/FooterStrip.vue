<template>
    <CookieBar></CookieBar>
	<ContentQuery path="/footer" find="one" v-slot="{ data }">
        <footer class="footer w-full flex justify-center">
            <ContentRenderer :value="data" class="footer-content w-full flex flex-col justify-start" />

        </footer>
	</ContentQuery>
</template>
<script setup>
</script>
	
    
    