<script setup>
import { computed , watch} from "vue";
 import Sidebar from "/src/layouts/sidebar.vue";
 import { useRoute } from 'vue-router'
 import { useStore } from 'vuex';
import { useI18n } from "vue-i18n";
import  subcategories  from './subcategories.vue';
const route = useRoute();
const i18n = useI18n();
const store = useStore();
const category = computed(() =>   store.getters.getCategoryBySlug(route.params.type)[0]);

let  subCategory = computed(() =>   store.getters.getSubCategoryBySlug(route.params.sub)[0]);
watch(route, async (newValue, oldValue) => {
     subCategory = computed(() =>   store.getters.getSubCategoryBySlug(route.params.sub)[0]);
});
</script>

<template> 
<Sidebar>
        <subcategories />
 </Sidebar>
</template>
<style scoped>

</style>

