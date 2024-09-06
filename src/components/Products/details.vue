<script setup>
import { computed , onMounted} from "vue";
import Sidebar from "/src/layouts/sidebar.vue";
 import { useRoute } from 'vue-router'
 import { useStore } from 'vuex';
import { useI18n } from "vue-i18n";
import  Carousel  from './carousel.vue'
const route = useRoute();
const i18n = useI18n();
const store = useStore();
const category = computed(() =>   store.getters.getCategoryById(route.params.cat)[0]);

let  subCategory = computed(() =>   store.getters.getSubCategoryById(route.params.sub)[0]);
let product = computed(() =>   store.getters.getProductById(route.params.id)[0]);

</script>

<template> 
 <Sidebar>
                <div class="row"> 
                      <ul class="breadcrumb" v-if="category != undefined">
                         <li><a href="/"> <i class="fa fa-home"></i></a> </li>
                         <li v-if="store.state.culture === 'ar'">
                            <router-link  :to="{ name: 'category', params: { type: category.slug} }" >{{category.nameArabic}}</router-link>
                        </li>
                         <li v-if="store.state.culture === 'en'">   
                            <router-link  :to="{ name: 'category', params: { type: category.slug} }" > {{category.nameEnglish}}</router-link>
                        </li>
                         <li v-if="subCategory != undefined && store.state.culture === 'ar'">
                            <router-link  :to="{ name: 'category', params: {type: category.slug, sub: subCategory.slug} }" > {{subCategory.nameArabic}}</router-link>
                         </li>
                         <li v-if="subCategory != undefined && store.state.culture === 'en'">
                            <router-link  :to="{ name: 'category', params: {type: category.slug, sub: subCategory.slug} }" > {{subCategory.nameEnglish}}</router-link>
                        </li>
                         <li v-if="store.state.culture === 'ar'">{{product.nameArabic}}</li>
                         <li v-if="store.state.culture === 'en'">{{product.nameEnglish}}</li>
                      </ul> 
                      <!-- <h1 v-if="store.state.culture === 'ar'">{{category.nameArabic}}</h1> 
                      <h1 v-if="store.state.culture === 'en'">{{category.nameEnglish}}</h1>  -->
                      <div class="product_detail medium-img" :data-src="product.image"> 
                           <img class="box-shadow blur no-blur" :alt="product.nameEnglish" :title="product.nameEnglish" :src="product.image"> 
                                <div class="detail"> 
                                    <div class="bordered_area"> 
                                        <span class="product_name" v-if="store.state.culture === 'ar'">{{ product.nameArabic }}</span>
                                        <span class="product_name" v-if="store.state.culture === 'en'">{{ product.nameEnglish }}</span>
                                        <span class="product_price">{{ product.price }}</span> 
                                    </div> <!--<span class="product_description2" style="display:none;"></span>-->
                                     <span class="product_description">
                                         <p style="margin-bottom: 15px;" v-if="store.state.culture === 'ar'"> {{ product.descriptionArabic }}</p>
                                         <p style="margin-bottom: 15px;" v-if="store.state.culture === 'en'"> {{ product.descriptionEnglish }}</p>
                                     </span> 
                                </div>
                     </div>
                <Carousel />    
                    </div>
                  </Sidebar>
</template>
<style scoped>

</style>

