<template>
  <div>
    <ul class="users">
      <li v-for="user in users" v-on:click="user.show = !user.show">
        <h2>{{user.name}}</h2>
        <!--<h3 v-show="user.show">{{user.position}}</h3>-->
        <h3>{{user.email}}</h3>
      </li>
    </ul>
    <button v-on:click="deleteUser"> 删除</button>
  </div>
</template>

<!--
  传值: string number boolean
  引用：array object
-->
<script>
  export default {
    name: 'users',
    props: ['users'],
    // props: {
    //   users: {
    //     type: Array,
    //     required: true
    //   }
    // },
    data () {
      return {
        // users: [
        //   {name: '1111', position: 'web开发', show: false},
        //   {name: '2222', position: 'web开发', show: false},
        //   {name: '3333', position: 'web开发', show: false},
        //   {name: '4444', position: 'web开发', show: false},
        //   {name: '5555', position: 'web开发', show: false},
        //   {name: '6666', position: 'web开发', show: false},
        //   {name: '7777', position: 'web开发', show: false},
        //   {name: '8888', position: 'web开发', show: false},
        //   {name: '9999', position: 'web开发', show: false}
        // ]
      }
    },
    methods: {
      deleteUser: function () {
        this.users.pop()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only （加上scoped设置当前域，css只在当前组件生效）-->
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
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
  }
</style>
