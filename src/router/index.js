import Vue from 'vue'
import VueRouter from 'vue-router'
import Course from '../views/course/index'
import CourseDetails from '../views/course/_id'
import Default from '../components/content/default'
import Article from '../views/article/article'
import Qa from '../views/qa/index'
import Teacher from '../views/teacher/index'
import Usercenter from '../views/usercenter/index'
import Login from '../views/login/index'
import UpdatePassword from '../views/usercenter/updatePassword/index'
import Signup from '../views/login/signup'
import Mycourse from '../views/usercenter/mycourse/index'
import Video from '../views/video/vid'
import ArticleDetail from '../views/article/id'
import Home from '../views/home/index'
import Myarticle from '../views/usercenter/myarticle/list'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'default',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/video/:id',
    name: 'video',
    component: Video
  },
  {
    path: '/article',
    name: 'article',
    component: Article
  },
  {
    path: '/article/:id',
    name: 'articleDetail',
    component: ArticleDetail
  },
  {
    path: '/course',
    name: 'course',
    component: Course
  },
  {
    path: '/course/:id',
    name: 'courseDetails',
    component: CourseDetails
  },
  {
    path: '/qa',
    name: 'qa',
    component: Qa
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: Teacher
  },
  {
    path: '/usercenter',
    name: 'usercenter',
    component: Usercenter,
    children: [
      {
        path: 'updatePassword',
        name: 'updatePassword',
        component: UpdatePassword
      },
      {
        path: 'mycourse',
        name: 'mycourse',
        component: Mycourse
      },
      {
        path: 'myarticle',
        name: 'myarticle',
        component: Myarticle
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  }
  /*{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  }*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
