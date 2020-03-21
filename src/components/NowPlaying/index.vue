<template>
  <div>
    <ul>
      <li v-for="data in datalist" :key="data.filmId" @click="handleChangePage(data.filmId)">
        <img :src="data.poster">
        <div class="title">
        <h4>{{data.name}}</h4>
        <p>观众评分<span>{{data.grade}}</span></p>
        <p v-if="data.actors">主演:<span></span>{{data.actors | actorfilter}}</p>
        <p v-else>暂无主演</p>
        <p>{{data.nation}} | {{data.runtime}}分钟</p>
      </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

Vue.filter('actorfilter', function (data) {
  // console.log(data);
  var newlist = data.map(item => item.name)
  return newlist.join(' ')
})

export default {
  name: 'NowPlaying',
  data () {
    return {
      datalist: []
    }
  },
  methods: {
    handleChangePage (id) {
      console.log(id)
      // 编程式导航-名字跳转
      this.$router.push({ name: 'kerwindetail', params: { id: id } })
    }
  },
  mounted () {
    // axios.get("http://m.maoyan.com/ajax/mostExpected?ci=30&limit=10&offset=0&token=&optimus_uuid=E0A7CB50692911EA9D7EE748EFAA905297A5762FB32F45178BE8097D8E3BC459&optimus_risk_level=71&optimus_code=10").then(res =>{
    //   console.log(res.data);
    // })
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=7376956',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584619478858993459356","bc":"440300"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data)
      this.datalist = res.data.data.films
    })
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
