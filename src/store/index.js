import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comingList: []
  },
  mutations: {
    comingListMutation (state, data) {
      state.comingList = data
    }
  },
  actions: {
    // 异步处理
    getComingListAction (store) {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=393844',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584619478858993459356","bc":"440300"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        // console.log(res.data)
        store.commit('comingListMutation', res.data.data.films)
      })
    }
  },
  modules: {
  }
})
