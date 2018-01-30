<template>
  <div class="home-footer">
    <div class="content">
      <p>{{title}}</p>
      <p class="color">{{copyright}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-footer',
    data () {
      return {
        title: '旗讯看车 · 汽车互联网共享技术服务平台',
        copyright: '©2017Carhot.All Right Reserved'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only （加上scoped设置当前域，css只在当前组件生效）-->
<style scoped>
  .home-footer {
    margin-top: 50px;
    height: 122px;
  }
  .content {
    margin: 0 auto;
    padding: 25px 0 41px;
    width: 1080px;
    border-top: 1px solid #f8f8f9;
  }

  .content p {
    font-size: 14px;
    color: #777;
  }

  .content .color {
    color: #999;
  }
</style>
