
<script setup>
import { useStore } from 'vuex';
import { useI18n } from "vue-i18n";
import { ref} from "vue";

const i18n = useI18n();
const store = useStore();

const switchlanguage = (lang) => {
     localStorage.setItem('culture',lang);
     window.location.reload(true);
}
let isHeaderOpen = ref(false);
const toggleHeader = () =>{
     isHeaderOpen.value = !isHeaderOpen.value;
}
let isSharingMenuOpen = ref(false);
const togglesharingMenu = () =>{
     isSharingMenuOpen.value = !isSharingMenuOpen.value;
}
const share_fb = (url="") => {
      if(url==""){url = window. location. href;}
    window.open('https://www.facebook.com/sharer/sharer.php?u='+url,'facebook-share-dialog',"width=626, height=436");
  }
  const share_tw = (url="") => {
      if(url==""){url = window. location. href;}
    window.open('https://twitter.com/share?url='+url,'twitter-share-dialog',"width=626, height=436");
  }
  const share_pt = (url="") => {
      if(url==""){url = window. location. href;}
    window.open('http://pinterest.com/pin/create/button/?url='+url+'&media='+get_og_meta_tag_value("og:image")+'&description='+get_og_meta_tag_value("og:description"),'pinterest-share-dialog',"width=626, height=436");
  }
  const share_ln = (url="") => {
      if(url==""){url = window. location. href;}
    window.open('https://www.linkedin.com/shareArticle?mini=true&url='+url+'&title='+get_og_meta_tag_value("og:title")+'&summary='+get_og_meta_tag_value("og:description")+'&source='+window.location.href,'linkedin-share-dialog',"width=626, height=436");
  }
</script>

<template> 
    <div class="header_top"> 
        <ul> 
          <li class="box-shadow multi" :class="isSharingMenuOpen === true ? 'box-shadow multi active' : ''">
                <a href="javascript:void(0)" @click.prevent="togglesharingMenu()"><i class="fa fa-share-alt"></i></a> 
                <ul :class="isSharingMenuOpen === true ? 'show' : ''"> 
                    <li class="facebook"><a @click.prevent="share_fb()"><i class="fa fa-facebook"></i></a></li>
                     <li class="twitter"><a @click.prevent="share_tw()"><i class="fa fa-twitter"></i></a></li> 
                     <li class="pinterest"><a @click.prevent="share_pt()"><i class="fa fa-pinterest"></i></a></li> 
                     <li class="linkedin"><a @click.prevent="share_ln()"><i class="fa fa-linkedin"></i></a></li> 
                </ul> 
            </li> 
            <li class=""  :class="isHeaderOpen === true ? 'box-shadow multi language active' : ''">
                 <a href="#" @click.prevent="toggleHeader()"> {{  store.state.culture ===  'ar' ?  $t('ar')  :  $t('en') }} </a>
                  <ul :class="isHeaderOpen === true ? 'show' : ''"> 
                    <li><a @click="switchlanguage('ar')" v-if="store.state.culture !== 'ar'">{{ $t('ar') }}</a></li>
                    <li><a @click="switchlanguage('en')" v-if="store.state.culture !== 'en'">{{ $t('en') }}</a></li>
                 </ul>
             </li> 
        </ul>
     </div>
</template>