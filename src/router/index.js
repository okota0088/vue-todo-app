import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

// 1. ルート（URLとページの対応関係）の定義
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

// 2. ルーターインスタンスの作成
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router