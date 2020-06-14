import Vue from 'vue'
import vueRouter from 'vue-router'

const Home = () => import('views/home/home.vue');
const Classification = () => import('views/classification/Classification.vue');
const ShopCar = () => import('views/shopcar/Shopcar.vue');
const Profile = () => import('views/profile/Profile.vue');
const Detail = ()=> import('views/detail/Detail.vue');

Vue.use(vueRouter);

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/classification',
    component:Classification
  },
  {
    path:'/shopcar',
    component:ShopCar
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail',
    component:Detail
  }
];

const router = new vueRouter({
  routes,
  mode:'history'
})

export default router;