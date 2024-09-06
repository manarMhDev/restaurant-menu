import { createApp } from 'vue'
import router from './router';
import { createI18n } from 'vue-i18n';
import store from './store/index'

// import "../node_modules/font-awesome/css/font-awesome.css";
// import "/assets/css/bootstrap.css";
// import "/assets/css/style.css";
// import "/assets/css/owl.carousel.min.css";
// import "/assets/css/reset.css";
// import "/assets/css/jquery.fancybox.css";
// import "/assets/css/jquery.fancybox-buttons.css";

// import "/assets/js/jquery-3.7.1.min.js";
// import "/assets/js/jquery.fancybox.js";
// import "/assets/js/owl.carousel.min.js";
// import "/assets/js/jquery.fancybox-buttons.js";

// import "/assets/js/main.js";
import en from './locales/en.json';
import ar from './locales/ar.json';

import App from './App.vue'
const i18n = createI18n({
    locale: localStorage.getItem('culture'),
    fallbackLocale: "en",
    legacy: false,
    globalInjection: true,
    messages: {
      en,
      ar,
    },
  });
const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(store);
app.mount('#app');
