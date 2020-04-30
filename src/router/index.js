import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

import Register from '@/components/Register'
import Login from '@/components/Login'
import myfile from '@/components/myfile'

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
        },
        
]

export default new Router({
  routes:routes,
  mode:'history'   /*hash*/
})
