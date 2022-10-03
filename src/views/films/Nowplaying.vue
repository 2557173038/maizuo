<template>
  <!-- nowplaying -->
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="不能再继续了"
    @load="onLoad"
    :immediate-check="false"
  >
    <van-cell
      v-for="data in datalist"
      :key="data.filmid"
      @click="handleChangePage(data.filmId)"
    >
      <img :src="data.poster" alt="" />
      <div class="box">
        <div class="name">{{ data.name }}</div>
        <p :class="data.grade ? '' : 'hidden'">
          观众评分 <span>{{ data.grade }}</span>
        </p>
        <p>
          主演:
          <span
            v-for="yanyuan in data.actors"
            :key="yanyuan.dep"
            class="zhuyan"
          >
            {{ yanyuan.name }}
          </span>
        </p>
        <p>{{ data.nation }} | {{ data.runtime }}分钟</p>
      </div>
    </van-cell>
  </van-list>
</template>
<script>
import FimsHeader from '@/components/films/FimsHeader.vue'
import http from '@/util/http.js'
export default {
  data () {
    return {
      datalist: [],
      dataurl: [],
      loading: false,
      finished: false,
      current: 1,
      tatal: 0
      // num:1,
    }
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
    },

    // 懒加载处理
    onLoad () {
      // console.log("到底了");
      if (this.datalist.length === this.total && this.total !== 0) {
        this.finished = true
        return
      }

      this.current++
      http({
        url: `gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=10&type=1&k=3496314`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then((res) => {
        console.log(res.data.data.films)
        this.datalist = [...this.datalist, ...res.data.data.films]
        this.loading = false
        console.log(this.datalist.length)
      })
    }
  },
  mounted () {
    // console.log(this.datalist.nation)
    http({
      url: `gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=3496314`,
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then((res) => {
      console.log(res.data.data.films)
      this.datalist = res.data.data.films
      this.total = res.data.data.total

      // console.log(this.datalist[0].actors);
    })
  },
  components: { FimsHeader }
}
</script>
<style lang="scss" scoped>
.van-list {
  margin-bottom: 3.0625rem;
  .van-cell {
    background-color: rgb(244, 255, 250);
    width:auto;
    height: 5.25rem;
    border-top: 1px solid rgba(219, 183, 251, 0.687);
    padding: 0.9375rem;
    line-height: normal;
    margin-top: -1px;
    // overflow: hidden;
    //就这个 你作者没事加怪异盒干嘛
    box-sizing: content-box;
    img {
      width: 4.125rem;
      float: left;
    }
    .box {
      margin-left: 4.875rem;
      .hidden {
        visibility: hidden;
      }
      .name {
        font-size: 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 10.775rem;
      }
      p {
        width: 13.9619rem;
        padding-top: 0.25rem;
        font-size: 0.8125rem;
        color: gray;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        span {
          color: orange;
        }
        .zhuyan {
          color: gray;
        }
      }
    }
  }
}
</style>
