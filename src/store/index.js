
import { createStore } from 'vuex';
import breakfast from "/assets/img/icons/breakfast.png";
import salad from "/assets/img/icons/salad.png";
import smoking from "/assets/img/icons/smoking.png";
import mainCourse from "/assets/img/icons/main_course.png";
import desserts from "/assets/img/icons/desserts.png";
import nuts from "/assets/img/icons/nuts.png";
import beverage from "/assets/img/icons/beverage.png";
import product from "/assets/img/icons/cheese.jpg";

const store = createStore({
    state () {
      return {
         api_url : import.meta.env.VITE_API_URL,
         isSidebarOpen : false,
         culture : localStorage.getItem('culture') || 'en',
         currentCategory : '',
         currentSubcategories : [],
         currentProduct : '',
         categories : [
            {
               id : 1,
               slug : 'breakfast',
               nameEnglish : 'Breakfast',
               nameArabic : 'فطور',
               image : breakfast,
               has_childs : true
            },
            {
               id : 2,
               slug : 'saladcoldappetizer',
               nameEnglish : 'Salad & Cold Appetizer',
               nameArabic : 'سلطة ومقبلات باردة',
               image : salad,
               has_childs : true
            },
            {
               id : 3,
               slug : 'smokinghot',
               nameEnglish : 'Smoking Hot',
               nameArabic : 'مقبلات ساخنة',
               image : smoking,
               has_childs : false
            },
            {
               id : 4,
               slug : 'maincourses',
               nameEnglish : 'Main Courses',
               nameArabic : 'أطباق رئيسية',
               image : mainCourse,
               has_childs : true
            },
            {
               id : 5,
               slug : 'dessertsfruits',
               nameEnglish : 'Desserts & Fruits',
               nameArabic : 'حلويات وفاكهة',
               image : desserts,
               has_childs : false
            },
            {
               id : 6,
               slug : 'nutsdriedfruits',
               nameEnglish : 'Nuts & Dried Fruits',
               nameArabic : 'المكسرات والفواكه المجففة',
               image : nuts,
               has_childs : false
            },
            {
               id : 7,
               slug : 'beverage',
               nameEnglish : 'Beverage',
               nameArabic : 'المشروبات',
               image : beverage,
               has_childs : true
            },
         ],
         sub_categories :[
            {
               id : 1,
               slug : 'designyourownbreakfast',
               nameEnglish : 'Design Your Own Breakfast',
               nameArabic : 'اختر فطورك على ذوقك',
               image : '',
               category : 1
            },
            {
               id : 2,
               slug : 'eggsgrills',
               nameEnglish : 'ُEggs & Grills',
               nameArabic : 'ساخن من الفرن',
               image : '',
               category : 1
            },
            {
               id : 3,
               slug : 'signature',
               nameEnglish : 'Signature Breakfasts',
               nameArabic : 'فطور مميز ',
               image : '',
               category : 1
            },
         ],
         products :[
            {
               id : 1,
               slug : 'friedeggs',
               nameEnglish : 'Fried Egg',
               nameArabic : 'بيض مقلي',
               price : '29,000 SAR',
               image : product,
               category : 1,
               subCategory : 1,
               descriptionArabic : 'شوربة دجاج بنكهة الشعيرية والجزر والبصل والبقدونس والكرفس',
               descriptionEnglish : 'Chicken Soup Flawored With Vermicelli, Carrot, Onion, Parsley and Celery'
            },
            {
               id : 2,
               slug : 'grilledhalloumi',
               nameEnglish : 'Grilled Halloumi',
               nameArabic : 'جبنة حلوم مشوية',
               price : '64,000 SAR',
               image : product,
               category : 1,
               subCategory : 1,
               descriptionArabic : 'شوربة دجاج بنكهة الشعيرية والجزر والبصل والبقدونس والكرفس',
               descriptionEnglish : 'Chicken Soup Flawored With Vermicelli, Carrot, Onion, Parsley and Celery'
            },
            {
               id : 3,
               slug : 'chickensoup',
               nameEnglish : 'Chicken Soup',
               nameArabic : 'شوربة دجاج',
               price : '59,000 SAR',
               image : product,
               category : 3,
               subCategory : null,
               descriptionArabic : 'شوربة دجاج بنكهة الشعيرية والجزر والبصل والبقدونس والكرفس',
               descriptionEnglish : 'Chicken Soup Flawored With Vermicelli, Carrot, Onion, Parsley and Celery'
            },
            {
               id : 4,
               slug : 'chickensoup',
               nameEnglish : 'Chicken Soup',
               nameArabic : 'شوربة دجاج',
               price : '59,000 SAR',
               image : product,
               category : 3,
               subCategory : null,
               descriptionArabic : 'شوربة دجاج بنكهة الشعيرية والجزر والبصل والبقدونس والكرفس',
               descriptionEnglish : 'Chicken Soup Flawored With Vermicelli, Carrot, Onion, Parsley and Celery'
            },
            {
               id : 5,
               slug : 'chickensoup',
               nameEnglish : 'Chicken Soup',
               nameArabic : 'شوربة دجاج',
               price : '59,000 SAR',
               image : product,
               category : 3,
               subCategory : null,
               descriptionArabic : 'شوربة دجاج بنكهة الشعيرية والجزر والبصل والبقدونس والكرفس',
               descriptionEnglish : 'Chicken Soup Flawored With Vermicelli, Carrot, Onion, Parsley and Celery'
            },
            {
               id : 6,
               slug : 'chickensoup',
               nameEnglish : 'Chicken Soup',
               nameArabic : 'شوربة دجاج',
               price : '59,000 SAR',
               image : product,
               category : 3,
               subCategory : null,
               descriptionArabic : 'شوربة دجاج بنكهة الشعيرية والجزر والبصل والبقدونس والكرفس',
               descriptionEnglish : 'Chicken Soup Flawored With Vermicelli, Carrot, Onion, Parsley and Celery'
            },
            {
               id : 7,
               slug : 'chickensoup',
               nameEnglish : 'Chicken Soup',
               nameArabic : 'شوربة دجاج',
               price : '59,000 SAR',
               image : product,
               category : 3,
               subCategory : null,
               descriptionArabic : 'شوربة دجاج بنكهة الشعيرية والجزر والبصل والبقدونس والكرفس',
               descriptionEnglish : 'Chicken Soup Flawored With Vermicelli, Carrot, Onion, Parsley and Celery'
            },
            {
               id : 8,
               slug : 'chickensoup',
               nameEnglish : 'Chicken Soup',
               nameArabic : 'شوربة دجاج',
               price : '59,000 SAR',
               image : product,
               category : 3,
               subCategory : null,
               descriptionArabic : 'شوربة دجاج بنكهة الشعيرية والجزر والبصل والبقدونس والكرفس',
               descriptionEnglish : 'Chicken Soup Flawored With Vermicelli, Carrot, Onion, Parsley and Celery'
            },
            {
               id : 9,
               slug : 'chickensoup',
               nameEnglish : 'Chicken Soup',
               nameArabic : 'شوربة دجاج',
               price : '59,000 SAR',
               image : product,
               category : 3,
               subCategory : null,
               descriptionArabic : 'شوربة دجاج بنكهة الشعيرية والجزر والبصل والبقدونس والكرفس',
               descriptionEnglish : 'Chicken Soup Flawored With Vermicelli, Carrot, Onion, Parsley and Celery'
            },
            {
               id : 10,
               slug : 'chickensoup',
               nameEnglish : 'Chicken Soup',
               nameArabic : 'شوربة دجاج',
               price : '59,000 SAR',
               image : product,
               category : 3,
               subCategory : null,
               descriptionArabic : 'شوربة دجاج بنكهة الشعيرية والجزر والبصل والبقدونس والكرفس',
               descriptionEnglish : 'Chicken Soup Flawored With Vermicelli, Carrot, Onion, Parsley and Celery'
            },
            {
               id : 11,
               slug : 'chickensoup',
               nameEnglish : 'Chicken Soup',
               nameArabic : 'شوربة دجاج',
               price : '59,000 SAR',
               image : product,
               category : 3,
               subCategory : null,
               descriptionArabic : 'شوربة دجاج بنكهة الشعيرية والجزر والبصل والبقدونس والكرفس',
               descriptionEnglish : 'Chicken Soup Flawored With Vermicelli, Carrot, Onion, Parsley and Celery'
            },
         ]
      }
    },
    mutations: { 
        SET_PORTFOLIOS(state, portfolios) {
            //  state.portfolios_data = portfolios;
       }
    },
    actions :{
       async fetchPortfolios({ commit }) {
         //  const Url =  import.meta.env.VITE_API_URL+ "/api/services/app/Portfolio/GetAll";
         //  const response = await fetch(Url);
         //  const data = await response.json();
         //  commit('SET_PORTFOLIOS', data.result.items);
      },
      
  },
  getters: {
   getCategoryBySlug: (state) => (type) => {
      return state.categories.filter(cat => cat.slug === type)
    },
    getCategoryById: (state) => (id) => {
      return state.categories.filter(cat => cat.id === id)
    },
    getSubCategoryById: (state) => (id) => {
      return state.sub_categories.filter(cat => cat.id === id)
    },
    getSubCategoryBySlug: (state) => (sub) => {
      return state.sub_categories.filter(cat => cat.slug === sub)
    },
    getSubCategoriesByCategoryId: (state) => (id) => {
      return state.sub_categories.filter(cat => cat.category === id)
    },
    getProductsByCategoryId: (state) => (id) => {
      return state.products.filter(product => product.category === id)
    },
    getProductsBySubCategoryId: (state) => (id) => {
      return state.products.filter(product => product.subCategory === id)
    },
    getProductById: (state) => (id) => {
      return state.products.filter(product => product.id === +id)
    },
 }
  })

export default  store;