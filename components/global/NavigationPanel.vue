<template>
    <nav class="navigation flex w-full  align-center" :class="[is_open ? 'is_open ' : 'is_closed']">
        <ul class="flex flex-col items-center justify-center w-full text-3xl text-left navigation-list gap-y-4">
            <li>
                <NuxtLink to="/components">Components</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/layouts">Layouts</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">About</NuxtLink>
            </li>
        </ul>
    </nav>
</template>
<script setup>
const props = defineProps(["is_open"]);
</script>
<style scoped>
.navigation {
    height: 0
}

.navigation.is_closed {
    transform: translateY(-50vh);
    transition: all .3s ease-in-out;
    min-height: 0;
}

.navigation.is_open {
    transition: all .7s ease-in-out;
    top: 0;
    min-height: 50vh;
}
</style>
