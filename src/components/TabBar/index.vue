<template>
  <footer id="footer">
    <ul>
      <router-link tag="li" to="/movie">
        <i class="iconfont icon-viewgallery"></i>
        <p>电影</p>
      </router-link>
      <router-link tag="li" to="/cinema">
        <i class="iconfont icon-viewgallery"></i>
        <p>影院</p>
      </router-link>
      <router-link tag="li" to="/mine">
        <i class="iconfont icon-viewgallery"></i>
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
#footer{width: 100%; height: 60px; background: white; border-top: 2px #ebe8e3 solid; position: fixed; left: 0; bottom: 0; }
#footer ul{display: flex; text-align: center; height: 20px; align-items: center;list-style:none;}
#footer ul li{flex: 1; height: 40px; margin-left: -30px;}
#footer ul li.router-link-active{color: #f03d37;}
#footer ul i{font-size: 20px;}
#footer ul p{font-size: 12px; line-height: 4px;}
</style>
