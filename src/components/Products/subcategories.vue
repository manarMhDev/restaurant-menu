<script setup>
import { computed , watch , ref} from "vue";
 import { useRoute } from 'vue-router'
 import { useStore } from 'vuex';
import { useI18n } from "vue-i18n";

const route = useRoute();
const i18n = useI18n();
const store = useStore();
// const props = defineProps(['categorySlug']);

watch(() => route.params.type, fetchData, { immediate: true })

async function fetchData(type) {
     store.state.currentCategory = computed(() =>   store.getters.getCategoryBySlug(type)[0]);
     store.state.currentSubcategories = computed(() =>   store.getters.getSubCategoriesByCategoryId(store.state.currentCategory.id));
}

</script>

<template> 

                 <div class="row"> 
                      <ul class="breadcrumb">
                         <li><a href="/"> <i class="fa fa-home"></i></a> </li>
                         <li v-if="store.state.culture === 'ar'">{{store.state.currentCategory .nameArabic}}</li>
                         <li v-if="store.state.culture === 'en'">{{store.state.currentCategory .nameEnglish}}</li>
                      </ul> 
                      <h1 v-if="store.state.culture === 'ar'">{{store.state.currentCategory .nameArabic}}</h1> 
                      <h1 v-if="store.state.culture === 'en'">{{store.state.currentCategory .nameEnglish}}</h1> 
                      <div class="col-6 col-lg-3 col-sm-6 col-md-4" 
                      v-for="(item, i) in store.state.currentSubcategories" :key="i" > 
                          <router-link :to="{ name: 'category', params: { type: store.state.currentCategory .slug , sub:item.slug} }" 
                             :title="item.nameEnglish" >
                               <div class="product box-shadow category-box"> 
                                   <div class="medium-img image" :data-src="store.state.currentCategory .image">
                                       <img class="blur no-blur"
                                            title="item.nameEnglish"
                                             alt="item.nameEnglish" 
                                             :src="store.state.currentCategory.image">
                                   </div> 
                                   <div class="detail"> 
                                       <span class="name" v-if="store.state.culture === 'ar'">{{item.nameArabic}}</span> 
                                       <span class="name" v-if="store.state.culture === 'en'">{{item.nameEnglish}}</span> 
                                   </div> 
                             </div> 
                          </router-link> 
                     </div>
                
                    </div>
</template>
<style scoped>

</style>

