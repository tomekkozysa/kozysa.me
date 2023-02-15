// import Vue from "vue";
import VueDragscroll from "vue-dragscroll";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(VueDragscroll);
});
// trackRouter(useRouter())
