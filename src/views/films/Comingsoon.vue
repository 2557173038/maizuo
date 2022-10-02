<template>
  <ul>
    <li v-for="data in datalist" :key="data.filmid"    @click="handleChangePage(data.filmId)">
      <img :src="data.poster" alt="" />
      <div class="box">
        <div>{{ data.name }}</div>
        <p>
          主演:<span v-for="yanyuan in data.actors" :key="yanyuan.dep">
            {{ yanyuan.name }}
          </span>
        </p>
        <p>{{ data.nation }} | {{ data.runtime }}分钟</p>
      </div>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=2126476',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16595812192273064196767745","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then((res) => {
      console.log(res.data.data.films)
      this.datalist = res.data.data.films
    })
  },

  methods: {
    // 编程式导航
    handleChangePage (id) {
      // location.href="#/datail"
      // console.log(id)
      // 通过路径跳转
      // this.$router.push(`/datail/${id}`)
      // 通过命名路由跳转
      console.log(id)
      this.$router.push({
        name: 'kerwinDatail',
        params: {
          id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  margin-bottom: 3.0625rem;
  li {
    background-color: rgb(244, 255, 250);
    height: 5.25rem;
    border-top: 1px solid rgba(219, 183, 251, 0.687);
    padding: 0.9375rem;
    // margin-top: -1px;
    overflow: hidden;
    img {
      width: 4.125rem;
      float: left;
    }
    .box {
      div {
        font-size: 16px;
        padding-top: 10px;
        box-sizing: border-box;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 10.775rem;
      }
      p {
        width: 12.6875rem;
        padding-top: 0.25rem;
        font-size: 0.8125rem;
        color: gray;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        // span {
        //   color: orange;
        // }
      }
    }
  }
}
</style>
