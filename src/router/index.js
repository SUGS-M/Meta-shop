import {createRouter, createWebHashHistory} from 'vue-router'
// import Home from '../components/Home.vue'
import Home from "../components/Home.vue";
import Product from '../components/product/Product.vue'
import Scene from '../components/Scene.vue';

const routes = [
    {path: '/', component:Home},
    {path: '/product', component:Product},
    {path: '/scene', component:Scene}
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;