<template>
  <div>
    <ul>
    <li v-for="data in $store.state.comingList" :key="data.filmId">
        <img :src="data.poster">
        <h3>{{data.name}}</h3>
        <p v-if="data.actors">主演:{{data.actors | actorfilter}}</p>
        <p v-else>暂无主演</p>
    </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.filter('actorfilter', function (data) {
  // console.log(data);
  var newlist = data.map(item => item.name)
  return newlist.join(' ')
})

export default {
  name: 'ComingSoon',
  mounted () {
    if (this.$store.state.comingList.length === 0) {
      // ajax请求
      this.$store.dispatch('getComingListAction')
    } else {
      console.log('使用缓存数据')
    }
  }
}
</script>

<style lang="scss" scoped>
  *{
    margin: 0;
    padding: 0;
  }
  ul{
    float: left;
    margin-top: 20px;
  li{
    float: left ;
    overflow: hidden;
    height: 20%;
    width: 100%;
    img{
      float: left;
      width: 25%;
      height: 20%;
    }
    .title{
    float: left;
    margin-top: 6px;
    width: 60%;
    height: 30%;
    margin-left: 20px;
  }p{
    margin-top: 4px;
    font-size: 14px;
  }
  }

}
</style>
