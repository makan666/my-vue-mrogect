<template>
  <div>
    <ul class="users">
      <li v-for="photo in photos">
        <div>{{photo.id}}</div>
        <img v-bind:src="photo.url" alt="">
      </li>
    </ul>
    <!--<span>{{ msg }}</span> &lt;!&ndash; 我们稍后在store上定义一个msg属性 &ndash;&gt;-->
    <!--<button @click='fun'>获取数据</button>-->
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'photo',
    methods: {
      ...mapActions([ // 从store上绑定的action中载入需要的到此组件中
        'fun1' // 我们稍后在src/store/actions.js中创建一个名为fun的方法
      ])
    },
    computed: {
      ...mapGetters([ // 从store上绑定的getters中载入需要的到此组件中
        'photos' // 我们稍后在src/store/getters.js中创建一个名为msg的方法
      ])
    },
    created () {
      this.$store.dispatch('fun1')
    }
  }
</script>

<style scoped>
  .users {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }

  li {
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    padding: 30px 0;
    border: 1px solid #222;
    margin: 10px;
  }

  img {
    width: 50px;
    height: 50px;
  }
</style>
