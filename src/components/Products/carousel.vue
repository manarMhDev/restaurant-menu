<script setup>
import { computed , onMounted} from "vue";
 import Footer from "/src/layouts/footer/index.vue";
 import HeaderTwo from "../../layouts/header/headerTwo.vue";
 import Categories from "./categories.vue";
 import { useRoute } from 'vue-router'
 import { useStore } from 'vuex';
import { useI18n } from "vue-i18n";
const route = useRoute();
const i18n = useI18n();
const store = useStore();
onMounted( () => {
    $(".owl-carousel").each(function(){
      var t=$(this);
      t.owlCarousel({
        items:t.data("items"),
        lazyLoad:!0,
        autoplayHoverPause:!0,
        autoplaySpeed:5e3,
        slideBy:t.data("slideby"),
        center:t.data("center"),
        loop:true,
        margin:t.data("margin"),
        dots:t.data("dots"),
        nav:t.data("nav"),
        autoplay:t.data("autoplay"),
        autoplayTimeout:t.data("autoplay-timeout"),
        navText:['<span class="fa fa-arrow-left"><span>','<span class="fa fa-arrow-right"></span>'],
        responsive:{
          0:{items:t.data("xs-items")?t.data("xs-items"):1,    loop:true},
          576:{items:t.data("sm-items") ,     loop:true},
          768:{items:t.data("md-items") ,    loop:true},
          1024:{items:t.data("lg-items") ,    loop:true},
          1200:{items:t.data("items"),    loop:true}
        }
      })
    })
})
</script>

<template> 
   <div class="row">
                     <div class="related_products">
                         <h2> {{ $t('related_products') }}</h2>
                            <div class="products owl-carousel owl-theme owl-loaded owl-drag" data-nav="true"
                             data-items="4" data-lg-items="4" data-md-items="4" data-sm-items="2" data-xs-items="2" data-margin="30" data-autoplay="true">          
                                 <div class="owl-stage-outer">
                                    <div class="owl-stage" style="transform: translate3d(-3135px, 0px, 0px); transition: 5s; width: 5700px;">
                                        <div class="owl-item cloned" style="width: 255px; margin-right: 30px;"  v-for="(item, i) in store.state.products" :key="i" >
                                            <router-link :to="{ name: 'details', params: { cat :item.category, sub:item.subCategory , id: item.id} }"
                                             :title="item.nameEnglish"> 
                                                <div class="product box-shadow"> 
                                                    <div class="medium-img image" :data-src="item.image">
                                                         <img class="blur no-blur" :title="item.nameEnglish" :alt="item.nameEnglish" :src="item.image">
                                                    </div>
                                                     <div class="detail" v-if="store.state.culture === 'ar'"> 
                                                        <span class="name">{{  item.nameArabic}}</span>
                                                        <span class="price">{{  item.price}}</span> 
                                                    </div>
                                                    <div class="detail" v-if="store.state.culture === 'en'"> 
                                                        <span class="name">{{  item.nameEnglish}}</span>
                                                        <span class="price">{{  item.price}}</span> 
                                                    </div>
                                                 </div> 
                                            </router-link>
                                        </div>
                                    </div>
                                 </div>   
                            </div>       
                        </div>   
    </div>  
</template>
<style scoped>

</style>

