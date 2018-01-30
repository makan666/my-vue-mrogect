<!-- 模板：html结构 -->
<template>
  <div id="home">
    <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<!-- 行为：处理逻辑-->
<script>
  // 局部注册组件
  import Users from './Users'
  import Header from './Header'
  import Footer from './Footer'

  export default {
    name: 'Home',

    data () {
      return {
        title: '旗讯看车 · 汽车互联网共享技术服务平台',
        users: [
          // {name: '1111', position: 'web开发', show: false},
          // {name: '2222', position: 'web开发', show: false},
          // {name: '3333', position: 'web开发', show: false},
          // {name: '4444', position: 'web开发', show: false},
          // {name: '5555', position: 'web开发', show: false},
          // {name: '6666', position: 'web开发', show: false},
          // {name: '7777', position: 'web开发', show: false},
          // {name: '8888', position: 'web开发', show: false},
          // {name: '9999', position: 'web开发', show: false}
        ]
      }
    },
    methods: {
      updateTitle (title) {
        this.title = title
      }
    },
    components: {
      'users': Users, // 不能用已有的名字
      'app-header': Header,
      'app-footer': Footer
    },
    created () {
      this.$http.get('http://jsonplaceholder.typicode.com/users').then((data) => {
        this.users = data.body
      })
    }
  }
</script>

<!-- 样式：界面样式 -->
<style>

</style>
