<template>
  <div>
    <van-nav-bar title="影院" ref="navbar" @click-left="handleLeft" @click-right="handleRight">
      <template #left>
        {{cityName}}<van-icon name="arrow-down" color="black" />
      </template>

      <template #right>
        <van-icon name="search" size="25" color="black" />
      </template>
    </van-nav-bar>

      <!-- <datalist></datalist> -->
    <div class="box" :style="{ height: height }">
      <ul>
        <li v-for="data in cinemaList" :key="data.cinemaId">
          <div class="left">
            <div>{{ data.name }}</div>
            <div class="address">{{ data.address }}</div>
          </div>

          <div class="right">
            <div>
              ￥<span>{{ data.lowPrice / 100 }}</span
              >起
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<!-- ****************************************************DOM结构结束 -->
<script>

import BetterScroll from 'better-scroll'
import { mapState, mapActions, mapMutations } from 'vuex'
// import datalist from "@/components/cinemas/datalist.vue"
// console.log(mapState(["cinemaList"]))
export default {
  data () {
    return {
      // cinemaList: [],
      height: '0px'
    }
  },
  computed: {
    ...mapState(['cinemaList', 'cityId', 'cityName'])// vuex新写法
  },
  methods: {
    ...mapActions(['getCinemaData']),
    ...mapMutations(['clearCinema']),

    handleLeft () {
      // console.log('left')
      this.$router.push('/city')
      // 清空cinemas
      this.clearCinema()
    },
    handleRight () {
      this.$router.push('/cinemas/search')
    }
  },

  mounted () {
    // console.log(this.$store.state.cinemaList);
    // console.log(this.$refs.navbar.$el)
    // 动态计算高度
    this.height =
      document.documentElement.clientHeight -
      document.querySelector('.footer').offsetHeight -
      this.$refs.navbar.$el.offsetHeight +
      'px'
    // console.log(document.documentElement.clientHeight)
    // console.log(document.querySelector(".footer").offsetHeight)

    // 分发
    if (this.cinemaList.length === 0) {
      this.getCinemaData(this.cityId).then(res => {
      // console.log("数据完事了")
        this.$nextTick(() => {
          new BetterScroll('.box', {
            scrollbar: {
              fade: true
            }
          })
        })
      })
    } else {
    // console.log("缓存")
      this.$store.actions
      this.$nextTick(() => {
        new BetterScroll('.box', {
          scrollbar: {
            fade: true
          }
        })
      })
    }
  }

}

// http({
//   url: `gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=6138536`,
//   headers: {
//     "X-Host": " mall.film-ticket.cinema.list",
//   },
// }).then((res) => {
//   // console.log(res.data.data.cinemas);
//   this.cinemaList = res.data.data.cinemas;

//   //优化滚动
//     this.$nextTick(() => {
//       //等dom创建完成再执行
//       console.log(document.getElementsByClassName("li").length);
//       new BetterScroll(".box", {
//         scrollbar: {
//           fade: true,
//         },
//       });
//      });
//   });
// },
// };
</script>
<!-- **************************** ******************-->

<style lang="scss" scoped>
li {
  padding: 0.9375rem;
  width: 21.5625rem;
  height: 2.8438rem;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #f4f4f4;
  .left {
    font-size: 0.9375rem;

    .address {
      font-size: 0.75rem;
      color: #797d82;
      width: 13.25rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .right {
    font-size: 0.6875rem;
    color: #ff5f16;
    span {
      font-size: 0.9375rem;
    }
  }
}

.box {
  overflow: hidden;
  position: relative; //修正滚动条的位置
  margin-bottom: 3.0625rem;
}
</style>
