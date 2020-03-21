<template>
  <div v-if="filminfo">
    <img :src="filminfo.poster" class="poster">
    <h2>{{filminfo.name}}</h2>

    <h3>演职人员</h3>

    <swiper perview="4" class="actorswiper" myclassname="actorswiper">
      <div class="swiper-slid" v-for="data in filminfo.actors" :key="data.name">
        <img :src="data.avatarAddress">
        <p>{{data.name}}</p>
      </div>
    </swiper>

    <h3>剧照</h3>
    <swiper perview="3" class="photoswiper" myclassname="photoswiper">
      <div class="swiper-slid" v-for="(data,index) in filminfo.photos" :key="index">
        <img :src="data">
      </div>
    </swiper>

  </div>

</template>
<script>
import axios from 'axios'
import swiper from '../DetailSwiper'

export default {
  components: {
    swiper
  },
  data () {
    return {
      filminfo: null
    }
  },
  props: ['id'],

  mounted () {
    console.log('要id获取详情信息', this.$route.params.id)
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=6187524`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584619478858993459356","bc":"440300"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res.data)
      this.filminfo = res.data.data.film
    })
  }

}
</script>

<style lang="scss" scoped>
.poster{
  width: 100%;
}
.actorswiper{
  float: left;
  margin: 10px;
}

</style>
