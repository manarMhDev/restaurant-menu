<script setup>
import { computed , onMounted ,ref} from "vue";
 import Categories from "./categories.vue";
 import { useRoute } from 'vue-router'
 import { useStore } from 'vuex';
import { useI18n } from "vue-i18n";

const route = useRoute();
const i18n = useI18n();
const store = useStore();
const props = defineProps(['subCategoryId','categoryId']);

const subCategory = computed(() =>   store.getters.getSubCategoryById(props.subCategoryId)[0]);
const category = computed(() =>   store.getters.getCategoryById(props.categoryId)[0]);
const products  = computed(() =>   store.getters.getProductsBySubCategoryId(subCategory.value.id));
let loading = ref(true);
onMounted( () => {
  setTimeout(function() {
         loading.value = false;
      
    }, 400)
})
</script>

<template> 
 <div>
    <div class="row"> 
                      <ul class="breadcrumb">
                         <li><a href="/"> <i class="fa fa-home"></i></a> </li>
                         <li v-if="store.state.culture === 'ar'">{{subCategory.nameArabic}}</li>
                         <li v-if="store.state.culture === 'en'">{{subCategory.nameEnglish}}</li>
                      </ul> 
                      <h1 v-if="store.state.culture === 'ar'">{{subCategory.nameArabic}}</h1> 
                      <h1 v-if="store.state.culture === 'en'">{{subCategory.nameEnglish}}</h1> 
                     
                     <div class="col-6 col-lg-3 col-sm-6 col-md-4"
                         v-for="(item, i) in products" :key="i" 
                        >
                         <router-link :to="{ name: 'details', params: { cat :category.id, sub:subCategory.id , id: item.id} }"  :title="item.nameEnglish"> 
                             <div class="product box-shadow"> 
                                <div class="medium-img image" 
                                     :data-src="item.image">
                                     <img class="blur"  :class="loading === true ? '' : 'no-blur'"
                                        :title="item.nameEnglish"
                                         :alt="item.nameEnglish"
                                           :src="item.image"> 
                                </div> 
                                <div class="detail"> 
                                   <span class="name" v-if="store.state.culture === 'ar'">{{item.nameArabic}}</span>
                                   <span class="name" v-if="store.state.culture === 'en'">{{item.nameEnglish}}</span>
                                   <span class="price">{{item.price}}</span>
                                </div>
                            </div>
                         </router-link> 
                     </div>
                
                    </div>
</div>
</template>
<style scoped>

</style>

