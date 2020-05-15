import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

import Register from '@/components/Register'
import Login from '@/components/Login'
import myfile from '@/components/myfile'
import upyun from '@/components/upyun'

import show_goods from '@/components/show_goods'
Vue.use(Router)

var routes = [
        {
          path:'/',
          name:'index',
          component:index
        },{
          path:'/register',
          name:'Register',
          component:Register
        },{
          path:'/login',
          name:'Login',
          component:Login
        },{
          path:'/update',
          name:'myfile',
          component:myfile
        },{
          path:'/upyun',
          name:'upyun',
          component:upyun
        },{
          path:'/show_goods',
          name:'show_goods',
          component:show_goods
        },
]

export default new Router({
  routes:routes,
  mode:'history'   /*hash*/
})
