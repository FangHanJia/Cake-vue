import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);

import users from '../components/users/users.vue'
import index from '../components/index/index.vue'
import classfiy from '../components/classfiy/classfiy.vue'
import car from '../components/car/car.vue'
import order from '../components/order/order.vue'
import community from '../components/community/community.vue'


// 后端
import serverlogin from '../components/server/serverlogin/serverlogin.vue'
import serverBackground from '../components/server/serverBackground/serverBackground.vue'
import serverUser from '../components/server/serverUser/serverUser.vue'
import serverProduct from '../components/server/serverProduct/serverProduct.vue'




const router = new VueRouter({
    routes: [
        {path: '/users', component: users, name: 'users'},
        {path: '/', component: index, name: 'index'},
        {path: '/classfiy', component: classfiy, name: 'classfiy'},
        {path: '/car', component: car, name: 'car'},
        {path: '/community', component: community, name: 'community'},
        {path: '/order', component: order, name: 'order'},

        // 服务端路由
        {path:'/serverlogin',component:serverlogin,name:'serverlogin'},
        {path:'/serverBackground',component:serverBackground,name:'serverBackground',children:[
         {path:'serverUser',component:serverUser,name:'serverUser'},
         {path:'serverProduct',component:serverProduct,name:'serverProduct'},
                ]},
        
    ]
})

export default router;