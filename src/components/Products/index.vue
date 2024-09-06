<script setup>
import { computed , watch} from "vue";
 import Sidebar from "/src/layouts/sidebar.vue";
 import { useRoute } from 'vue-router'
 import { useStore } from 'vuex';
import { useI18n } from "vue-i18n";
import  subcategories  from './subcategories.vue';
import  subCategoryProducts  from './subCategoryProducts.vue';
import  categoryProducts  from './categoryProducts.vue';
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
       <subcategories :categorySlug="category.slug" v-if="category.has_childs === true && route.params.sub == undefined" />
       <categoryProducts :categoryId="category.id" v-if="category.has_childs === false" />
       <subCategoryProducts :subCategoryId="subCategory.id" :categoryId="category.id" v-if="category.has_childs === true && route.params.sub !== undefined && subCategory != undefined" />
 </Sidebar>
</template>
<style scoped>

</style>

