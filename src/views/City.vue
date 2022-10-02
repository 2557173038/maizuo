<template>
  <div class="city">
    <div class="top">
      <p class="rmcs">热门城市</p>
          <van-button type="default"  v-for="data in hotlist" :key="data.cityId" class="btn" @click="handleBtn(data)">{{data.name}}</van-button>
    </div>

    <van-index-bar :index-list="computedList" @select="hanleChange">
      <div v-for="data in citylist" :key="data.type">
        <van-index-anchor :index="data.type" />

        <van-cell
          :title="item.name"
          v-for="item in data.list"
          :key="item.cityId"
          @click="handleClick(item)"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import http from '@/util/http'
import { Toast } from 'vant'
import obj from '@/util/mixinsObj'
export default {
  mixins: [obj], // 混入
  data () {
    return {
      citylist: [{}],
      hotlist: []
    }
  },
  computed: {
    computedList () {
      return this.citylist.map((item) => item.type)
    }
  },

  mounted () {
    http({
      url: 'gateway?k=3224021',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then((res) => {
      // console.log(res.data.data.cities)
      this.citylist = this.renderCity(res.data.data.cities)
      // 1.    327条数据==> A,B进行分组
      // 2.    利用转换后的数组，结合组件库进行渲染页面
      // console.log(this.citylist);

      this.hotlist = this.randerHot(res.data.data.cities)
      // console.log(this.hotlist);
    })
  },

  methods: {
    renderCity (list) {
      //   console.log(list);
      const letterList = []
      const citylist = []
      for (let i = 65; i < 91; i++) {
        // console.log(String.fromCharCode(i))
        letterList.push(String.fromCharCode(i))
      }
      //   console.log(letterList[0])
      //
      letterList.forEach((letter) => {
        const newList = list.filter(
          (item) => item.pinyin.substring(0, 1).toUpperCase() === letter
        )
        //   console.log(newList)
        newList.length > 0 &&
          citylist.push({
            type: letter,
            list: newList
          })
      })
      //   console.log(citylist);

      return citylist
    },

    randerHot (list) {
      const newList = list.filter((item) => item.isHot > 0)
      // console.log(newList)

      return newList
    },
    //
    hanleChange (data) {
      // console.log("change")
      Toast(data)
    },

    handleClick (item) {
      // console.log(item.name,item.cityId)

      // 传统的多页面方案
      // location.href="#/cinemas?cityId"+item.id
      // localStorage  ,cookie

      // 单页面方案
      // 1.中间人模式
      // 2.bus事件总线 $on ,$emit

      // vuex- 状态管理模式
      // console.log(this.$store.state)
      // this.$store.state.cityName=item.name
      // this.$store.state.cityId=item.cityId

      this.$store.commit('changeCityName', item.name)
      this.$store.commit('changeCityId', item.cityId)

      this.$router.back()
    },

    // 热门城市跳转
    handleBtn (item) {
      // console.log(item.name,item.cityId)
      this.$store.commit('changeCityName', item.name)
      this.$store.commit('changeCityId', item.cityId)

      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
  .rmcs{
    font-size: 13px;
    color: #797d82;
    margin-bottom: 10px;
  }

  .top{
    width:22.1875rem;
    // height: 7.5rem;
    padding-left: 1.25rem;
    padding-top: 1.25rem;
    background-color: rgba(247, 202, 202, 0.436);
    .btn{
      margin-right: 1.5rem;
      margin-bottom: .825rem;
    }
    .van-button--normal{
      padding: 0 1.875rem;
    }
  }

.city{
  background-color: #f4f4f4;
}
</style>
