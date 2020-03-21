<template>
  <div id="main">
    <Header title="电影"></Header>
      <div id="content">
        <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="city_name">
          <span>深圳</span><i></i>
        </router-link >
        <div class="hot_swtich">
          <router-link tag="div" to="/movie/nowPlaying"  class="hot_item">正在热映</router-link>
          <router-link tag="div" to="/movie/comingSoon"  class="hot_item">即将上映</router-link>
        </div>
        <router-link tag="div" to="/movie/search"  class="search_entry">
          <i class="iconfont icon-search"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      </div>
    <TabBar />
  </div>
</template>

<script>

import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import axios from 'axios'

export default {
  name: 'Movie',
  components: {
    Header,
    TabBar
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?type=2&cityId=440300&k=3402809',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584619478858993459356","bc":"440300"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res => {
      console.log(res.data)
      this.looplist = res.data.data
    })

    window.onscroll = this.handleScroll
  },
  beforeDestroy () {
    // console.log("beforeDestroy")
    window.onscroll = null
  }

}
</script>

<style scoped>
#content{ flex: 1; overflow: auto; margin-bottom: 50px; position: relative; display: flex; flex-direction: column;}
#content .movie_menu{width: 100%; height: 45px; border-bottom: 1px #e6e6e6 solid; display: flex; justify-content: space-between;}
.movie_menu .city_name{margin-left: 20px; height: 100%; line-height: 45px;}
.movie_menu .city_name.active{color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .city_name.router-link-active{color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_swtich{display: flex; height: 100%; line-height: 45px;}
.movie_menu .hot_item{color: #666; font-size: 15px; width: 80px; text-align: center; margin: 0 12px; font-weight: 700;}
.movie_menu .hot_item.active{color: #ef4238; border-bottom: #ef4238 2px solid;}
.movie_menu .hot_item.router-link-active{color: #ef4238; border-bottom: #ef4238 2px solid;}
.movie_menu .search_entry{margin-right: 20px; height: 100%; line-height: 45px;}
.movie_menu .search_entry.active{color: #ef4238; border-bottom: #ef4238 2px solid;}
.movie_menu .search_entry.router-link-active{color: #ef4238; border-bottom: #ef4238 2px solid;}
.movie_menu .search_entry i{font-size: 24px; color: red;}
</style>
