import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Products from '../pages/Products.vue';
import Details from '../components/Products/details.vue';

const router = createRouter({ 
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/category/:type/subcategory/:sub?',
        name : 'category',
        component: Products
      },
      {
        path: '/details/category/:cat/subcategory/:sub?/product/:id',
        name : 'details',
        component: Details
      },
    ]
  })
  
  // Global navigation guard
  router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0); 
    next();
  })
  
  export default router