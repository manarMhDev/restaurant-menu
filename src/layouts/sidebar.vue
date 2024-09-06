<script setup>
 import Footer from "./footer/index.vue";
 import HeaderTwo from "./header/headerTwo.vue";
 import Categories from "../components/Products/categories.vue";
 import { useI18n } from "vue-i18n";
import { useRoute,useRouter } from 'vue-router'
import { useStore } from 'vuex';
const router = useRouter()
import { ref} from "vue";
const i18n = useI18n();
const store = useStore();
const route = useRoute();
const toggleSidebar = () =>{
      store.state.isSidebarOpen = !store.state.isSidebarOpen;
}
</script>
<template>
     <div id="catalog" :class="store.state.isSidebarOpen === true ? 'catalog menu-visible' : 'catalog'">
      <Categories/>
       <div id="page"  :class="store.state.isSidebarOpen === true ? 'content-catalog' : 'content-catalog content'">
           <HeaderTwo />
           <div class="d-flex align-items-center justify-content-between top_bar"> 
           <a href="#" id="toggle-menu" @click.prevent="toggleSidebar()">
              <div id="nav-icon1" class="open">
                 <span></span><span></span><span></span>
              </div>
              <div class="text">{{ $t('menu') }}</div>
           </a> 
           <a @click.prevent="router.go(-1)" class="go_home" v-if="store.state.culture === 'en'" >⇐</a>
           <a @click.prevent="router.go(-1)" class="go_home" v-if=" store.state.culture === 'ar'" >⇒</a>
           </div>
           <div class="main category">
             <div class="container">

                <slot />
            </div>
           </div> 
       </div>
</div>
   <Footer />            
</template>
<style scoped>
.go_home{
   cursor: pointer;
}
</style>