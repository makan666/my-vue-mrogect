<template>
  <div>
    <h1>vue-mugen-scroll</h1>
    <h2>Infinite scroll component for Vue.js</h2>
    <div class="wrap" :class="{'can-scroll': scrollableContainer}" ref="scrollContainer">
      <div class="users" v-if="users.length > 0">
        <div class="user" v-for="user in users">
          <img class="avatar" :src="user.avatar_url" height="40" alt="">
          <h3>{{ user.id }}</h3>
        </div>
      </div>
      <mugen-scroll
        class="you-can-add-custom-class-name"
        :handler="fetchUsers"
        :should-handle="!loading"
        :scroll-container="scrollableContainer && 'scrollContainer'">
        加载中。。。 <span class="loading dots"></span>
      </mugen-scroll>
    </div>

    <div class="count">loaded {{ count }} time{{ count > 1 ? 's' : '' }}</div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import MugenScroll from 'vue-mugen-scroll'
  export default {
    name: 'photo',
    props: ['scrollableContainer'],
    data () {
      return {
        users: [], count: 0, loading: false
      }
    },
    components: {
      'mugen-scroll': MugenScroll
    },
    methods: {
      ...mapActions([ // 从store上绑定的action中载入需要的到此组件中
        'fun1' // 我们稍后在src/store/actions.js中创建一个名为fun的方法
      ]),
      async fetchUsers () {
        this.loading = true
        const result = await this.$http.get('https://api.github.com/users', {
          params: {
            since: (this.users.length > 0 && this.users[this.users.length - 1].id) || null
          }
        }).then(res => res.data)
        this.users = [...this.users, ...result]
        this.count++
        this.loading = false
      }
    },
    computed: {
      ...mapGetters([ // 从store上绑定的getters中载入需要的到此组件中
        'photos' // 我们稍后在src/store/getters.js中创建一个名为msg的方法
      ])
    },
    created () {
      this.$store.dispatch('fun1')
      console.log(this.$store.state.photos)
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
