<template>
  <div class="nav" v-on:click="changeTitle">
    <div class="left-nav">
      <span>{{title1}}{{title}}</span>
    </div>
    <div class="right-nav">
      <router-link to="/">首页</router-link>
      <router-link to="/test">测试</router-link>
      <router-link to="/photo">图片</router-link>
      <router-link to="/testList">App下载</router-link>
      <router-link to="/">商家入驻</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-header',
    props: {
      title: {
        type: String
      }
    },
    data () {
      return {
        title1: 'Vue.js Demo'
      }
    },
    methods: {
      changeTitle: function () {
        // this.title = 'TitleChanged'
        this.$emit('titleChanged', '子向父组件传值')
      }
    },
    beforeCreate: function () {
      console.log('---------------beforeCreate------组件实例化之前--------')
    },
    created: function () {
      console.log('-----------------created---------组件实例化完毕，页面还未显示--------')
    },
    beforeMount: function () {
      console.log('-----------------beforeMount---------组件挂载前，页面未显示，但虚拟Demo已经设置--------')
    },
    mounted: function () {
      console.log('-----------------mounted---------组件挂载后，该方法执行后页面显示--------')
    },
    beforeUpdate: function () {
      console.log('-----------------beforeUpdate---------组件更新前，页面为更新--------')
    },
    updated: function () {
      console.log('-----------------updated---------组件更新，该方法执行后页面显示--------')
    },
    beforeDestroy: function () {
      console.log('-----------------beforeDestroy---------组件销毁前--------')
    },
    destroyed: function () {
      console.log('-----------------destroyed---------组件销毁--------')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only （加上scoped设置当前域，css只在当前组件生效）-->
<style scoped>
  .nav {
    background: #fafafa;
    padding: 0 5%;
    height: 30px;
    line-height: 30px;
  }

  .left-nav {
    float: left;
  }

  .right-nav {
    float: right;
  }

  a {
    padding-left: 10px;
    text-decoration:none;
    color: #1a1a1a;
  }

  a:hover {
    color: #68f;
  }
</style>
