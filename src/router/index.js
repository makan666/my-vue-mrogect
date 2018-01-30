import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Home from '../components/Home'
import Test from '../components/Test'
import Photo from '../components/Photo'
import TestList from '../components/TestList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/photo',
      name: 'Photo',
      component: Photo
    },
    {
      path: '/testList',
      name: 'TestList',
      component: TestList
    }
  ],
  mode: 'history'
})
