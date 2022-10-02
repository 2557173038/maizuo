import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '@/views/Films.vue'
import Cinemas from '@/views/Cinemas.vue'
// import Center from '@/views/Center.vue'
// import Nowplaying from '@/views/films/Nowplaying.vue'
// import Comingsoon from '@/views/films/Comingsoon.vue'
import Search from '@/views/Search.vue'
import Datail from '@/views/Datail.vue'
// import Order from '@/views/Order.vue'
import Login from '@/views/Login.vue'
import City from '@/views/City.vue'


Vue.use(VueRouter)// 注册路由插件 ,两个全员组件 router-view  router-link
// 配置表
const routes = [
  {
    path: '/films',
    component: Films,

    // 嵌套路由
    children: [
      {
        path: '/films/nowplaying',
        component: () => import('@/views/films/Nowplaying.vue'), // 路由懒加载
      },
      {
        path: '/films/comingsoon',
        component: () => import('@/views/films/Comingsoon.vue'), // 路由懒加载

      },
      {
        path: '/films',
        redirect: '/films/nowplaying' //重定向

      }
    ]
  },

  {
    path: '/cinemas',
    component:Cinemas
  },
  {
    path: '/city',
    component:City
  },
  {
    path: '/cinemas/search',
    component: Search
  },
  {
    path: '/center',
    component: () => import('@/views/Center.vue'), // 路由懒加载
    meta: {
      is: true
    },
    // 局部拦截
    // beforeEach: (to, from, next) => {
    //   //
    // }
  },
  {
    path: '/order',
    component: () => import('@/views/Order.vue'),
    
  },
  {
    path: '/login',
    component: Login
  },
  {
    name: 'kerwinDatail', // 命名路由
    path: '/datail//:id', // 动态二级路由
    component: Datail
  },
  // 重定向
  {
    path: '*',
    redirect: '/films'
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

// 全局拦截
router.beforeEach((to,from,next)=>{
// console.log(to.fullPath)

  if(to.meta.is){
    //判断 本地存储中是否token
    if(localStorage.getItem('token')){
      next()
    }else{
      next({
        path:'/login',
        query:{redirect:to.fullPath}
      })
    }
  }else{
    next()
  }
 })

export default router
