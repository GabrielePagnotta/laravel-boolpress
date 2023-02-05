import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './views/pages/Home.vue'
import Tags from './views/pages/Tags.vue'

const router = new VueRouter({

    mode:'history',
    routes:[
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/tags',
        name:'tags',
        component:Tags
    }
    ]
})

export default router;
