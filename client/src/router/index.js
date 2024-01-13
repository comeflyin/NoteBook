import { createRouter, createWebHistory } from 'vue-router'
import axios from '../api'

const routes = [
  {
    path: '/',
    redirect: '/noteClass'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/noteClass',
    name: 'noteClass',
    component: () => import('../views/NoteClass.vue'),
    meta: {
      title: '笔记分类'
    }
  },
  {
    path: '/noteList',
    name: 'noteList',
    component: () => import('../views/NoteList.vue'),
    meta: {
      title: '笔记列表'
    }
  },
  {
    path: '/noteDetail',
    name: 'noteDetail',
    component: () => import('../views/NoteDetail.vue'),
    meta: {
      title: '笔记详情'
    }
  },
  {
    path: '/notePublish',
    name: 'notePublish',
    component: () => import('../views/NotePublish.vue'),
    meta: {
      title: '发布笔记'
    }
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
const whitePath = ['/login', '/register'] // 白名单
router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title

  if (!whitePath.includes(to.path)) { // 想去的页面不在白名单中
    // 发送鉴权请求
    try{
      const res = await axios.get('/protected-route')
    }catch(err){
      next('/login') // 或者router.push('/login')
      return
    }
  }
  next()
});

export default router