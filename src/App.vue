<script setup>
function detectLanguage() {
      var lang = localStorage.getItem('culture');
      if(!lang)
      {
        localStorage.setItem('culture','en');
      }
     
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      //Load or remove RTL styles based on the selected language
      if (lang === 'ar') {
        loadRtlStyles();
      } else {
        removeRtlStyles();
      }
    }
    function loadRtlStyles() {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/assets/css/rtl-styles.css';
      link.id = 'rtl-styles';
      document.head.appendChild(link);
    }
    function removeRtlStyles() {
      const link = document.getElementById('rtl-styles');
      if (link) {
        link.remove();
      }
    }
    detectLanguage();
</script>

<template>
  <router-view />
</template>

<style scoped>

</style>
