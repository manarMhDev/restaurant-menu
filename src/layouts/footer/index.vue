

<script setup>

import { useI18n } from "vue-i18n";
const i18n = useI18n();
</script>


<template>
	<footer >
        <div class="kvkk_cookie_policy"> 
            <div class="container-fluid">
             {{ $t('policy1') }}
             <a id="fancy" data-overlay-closeclick="false" data-closebtn="true" data-closeclick="false" href="#fancybox_content">  
                 {{ $t('here') }} 
             </a>
              {{ $t('policy2') }}
             </div> 
        </div>
	</footer>
</template>


