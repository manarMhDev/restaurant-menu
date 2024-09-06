<script setup>
import { useI18n } from "vue-i18n";
import { useRoute } from 'vue-router'
import { useStore } from 'vuex';
const i18n = useI18n();
const store = useStore();
const route = useRoute();
</script>

<template> 
       <ul id="menu">
          <li :class="item.slug === route.params.type? 'active' : ''" v-for="(item, i) in store.state.categories" :key="i" >
             <router-link :to="{ name: 'category', params: { type: item.slug} }" :title="item.nameEnglish">
                <img :src="item.image" />
                <span class="name" v-if="store.state.culture === 'ar'">{{ item.nameArabic }}</span> 
                <span class="name" v-if="store.state.culture === 'en'">{{ item.nameEnglish }}</span> 
             </router-link>
             <i v-if="item.has_childs && store.state.culture === 'en'" class="fa fa-arrow-right expand_menu"></i>
             <i v-if="item.has_childs && store.state.culture  === 'ar'" class="fa fa-arrow-left expand_menu"></i>
          </li>
       </ul>
</template>
<style scoped>

</style>

