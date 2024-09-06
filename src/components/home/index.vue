<script setup>
 import Footer from "/src/layouts/footer/index.vue";
 import Header from "/src/layouts/header/index.vue"; 
import logo from "/assets/img/logo/logo.png";
import { useI18n } from "vue-i18n";
import { useStore } from 'vuex';
const store = useStore();
const i18n = useI18n();
</script>

<template> 
  <!-- <Header /> -->
   <div class="home">
    <div id="page" class="content">
    <Header />
    <div class="landing"></div>

<div class="bg-text">
    <img :src="logo" alt="logo">
   

</div>
<div class="menu">
        <router-link :to="{ name: 'category', params: { type: store.state.categories[0].slug} }" >
                {{ $t('menu') }}
        </router-link>
</div>
</div>
   </div>


</template>
<style scoped>
.landing {
  /* The image used */
  background-image: url("/assets/img/bg/carpediem-bg-1.jpg");
  
  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);
  
  /* Full height */
  height: 100%; 
  
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Position text in the middle of the page/image */
.bg-text {
  /* background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.4);  */
  color: white;
  font-weight: bold;
  /* border: 3px solid #f1f1f1; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
}

.menu{
  color: white;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
}
.menu a{
    background-color: black !important;
    padding:20px;
    color:white;
    border-radius: 8px;
    margin:10px;
    font-weight: bold;
} 
.bg-text img{
   border-radius: 10px;
}
@media only screen and (max-width: 600px) {

}
</style>

