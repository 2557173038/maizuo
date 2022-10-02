// import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/util/http'
import { createVuexPersistedState } from 'vue-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createVuexPersistedState({
    reducer: (state) => { // 将return出去的持久化
      return {
        cityId: state.cityId,
        cityName: state.cityName
      }
    }
  })], // vex持久化
  // state 共同状态
  state: {
    cityId: '310100',
    cityName: '上海',
    cinemaList: [],
    isTabbarShow: true
  },

  // 支持异步和同步
  actions: {
    getCinemaData (store, cityId) {
      // console.log("getCinemaData")
      return http({
        url: `gateway?cityId=${cityId}&ticketFlag=1&k=6138536`,
        headers: {
          'X-Host': ' mall.film-ticket.cinema.list'
        }
      }).then((res) => {
        // console.log(res.data.data.cinemas);
        store.commit('changeCinemaData', res.data.data.cinemas)
      })
    }
  },

  // 不支持异步 只支持同步
  mutations: {
    changeCityName (state, cityName) {
      // console.log(cityName)
      state.cityName = cityName
    },
    changeCityId (state, cityId) {
      // console.log(cityId)
      state.cityId = cityId
    },
    changeCinemaData (state, data) {
      state.cinemaList = data
      // console.log( state.cinemaList)
    },
    clearCinema (state) {
      state.cinemaList = []
    },
    show (state) {
      state.isTabbarShow = true
    },
    hide (state) {
      state.isTabbarShow = false
    }
  }

})

// vux 管理保存共同状态，（分散在各个组件内的状态，统一管理）

// vuex 默认情况下管理内存，一刷新页面，公共数据就丢失了
// 持久化-todo

/* vue项目应用
1.  非父子的通信
2.  后端数据的缓存快照，减少重复数据请求，减轻服务器压力，提高用户体验

*/
