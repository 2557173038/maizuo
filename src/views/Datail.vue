<template>
  <div class="datail" v-if="datalist">
    <datail-header :name="datalist.name" v-scroll="50"></datail-header>
    <!-- ************************************************ -->
    <div class="img">
      <img :src="datalist.poster" />
    </div>
    <!-- ************************************************ 详情信息 -->
    <div class="filmname">
      <div>
        {{ datalist.name }} <span>{{ datalist.filmType.name }}</span>
        <i class="grade" v-show="datalist.grade"> {{ datalist.grade }}分</i>
      </div>
      <P>{{ datalist.category }}</P>
      <P>{{ datalist.premiereAt | premiereAt }}上映</P>
      <P>{{ datalist.nation }} | {{ datalist.runtime }}分钟</P>
      <p class="syno" :class="isHidden ? 'hidden' : ''">
        {{ datalist.synopsis }}
      </p>

      <div class="icon">
        <i
          class="iconfont"
          @click="isHidden = !isHidden"
          :class="isHidden ? 'icon-moreunfold' : 'icon-less'"
        >
        </i>
      </div>
    </div>
    <!-- ******************************************************* 演职人员-->
    <div class="category">
      <div class="yanyuan">演职人员</div>
      <datail-swiper
        :key="datalist.length"
        :slidesPerView="4.1"
        name="category"
      >
        <datail-swiper-item
          v-for="(data, index) in datalist.actors"
          :key="index"
        >
          <div
            :style="{
              backgroundImage: 'url(' + data.avatarAddress + ')',
            }"
            class="avatar"
          ></div>
          <div style="font-size: 12px; text-align: center">{{ data.name }}</div>
          <div style="font-size: 12px; text-align: center; color: #797d82">
            {{ data.role }}
          </div>
        </datail-swiper-item>
      </datail-swiper>
    </div>
    <!-- ******************************************************* 剧照-->
    <div class="photos">
      <div class="yanyuan">剧照</div>
      <datail-swiper :key="datalist.length" :slidesPerView="2.5" name="photos">
        <datail-swiper-item
          v-for="(data, index) in datalist.photos"
          :key="index"
        >
          <div
            :style="{
              backgroundImage: 'url(' + data + ')',
            }"
            @click="handlePreview(index)"
            class="avatar"
          ></div>
        </datail-swiper-item>
      </datail-swiper>
    </div>
  </div>
</template>
<!-- ****************************************************************DOM -->
<script>
import Vue from 'vue'
import moment from 'moment'
import datailSwiper from '@/components/datail/DatailSwiper.vue'
import datailSwiperItem from '@/components/datail/DatailSwiperItem.vue'
import datailHeader from '@/components/datail/DatailHeader.vue'
import { ImagePreview } from 'vant'
import obj from '@/util/mixinsObj'
import http from '@/util/http'

// console.log(moment().format("YYYY-MM-DD"));
// 过滤器
Vue.filter('premiereAt', (data) => {
  return moment(data * 1000).format('YYYY-MM-DD')
})
// 指令
Vue.directive('scroll', {
  inserted (el, binding) {
    // console.log(el)
    el.style.display = 'none'
    window.onscroll = () => {
      // console.log("scroll")
      // 判断滚动距离  是否需要显示
      if (document.documentElement.scrollTop || document.body.scrollTop > binding.value) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  },
  // 消除生命周期
  unbind () {
    window.onscroll = null
  }
})
export default {
  mixins: [obj], // 混入

  data () {
    return {
      datalist: null,
      isHidden: true
    }
  },
  components: {
    datailSwiper,
    datailSwiperItem,
    datailHeader
  },
  methods: {
    handlePreview (index) {
      ImagePreview({
        images: this.datalist.photos,
        startPosition: index,
        closeable: true,
        closeIconPosition: 'top-left'
      })
    }
  },
  mounted () {
    this.$store.commit('hide')

    // console.log("mounted", this.$route.params.id);

    // axios 利用id发送请求到详情接口，获取详细数据，布局页面
    http({
      url: `gateway?filmId=${this.$route.params.id}&k=7881107`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then((res) => {
      // console.log(res.data.data.film);
      this.datalist = res.data.data.film
    })

    // 清空toast
  },

  // 清除生命周期
  destroyed () {
    window.onscroll = null
    this.$store.commit('show')
  }
}
// ******************************************************************
</script>
<style lang="scss" scoped>
.datail {
  background-color: #f4f4f4;
  // height: 41.6875rem;
  // width: 21.875rem;
  overflow: hidden;
  .img {
    width: 100%;
    overflow: hidden;
    height: 13.125rem;
    position: relative;

    img {
      width: 100%;
      height: 33.125rem;
      position: absolute;
      top: -82%;
    }
  }
  .filmname {
    //详情信息************************************************
    background-color: white;
    div {
      color: #191a1b;
      font-size: 18px;
      height: 24px;
      line-height: 24px;
      // margin-right: 7px;
      padding: 0 15px;
      padding-top: 15px;
      position: relative;
      span {
        font-size: 9px;
        color: #fff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
        display: inline-block;
      }
      .grade {
        color: #ffb232;
        font-size: 18px;
        text-align: right;
        // margin-left: 11.25rem;
        position: absolute;
        right: 0.9rem;
      }
    }
    p {
      font-size: 13px;
      color: #797d82;
      margin-top: 4px;
      // letter-spacing: 8px;
      padding: 0 15px;
      box-sizing: border-box;
    }
    .syno {
      width: 100%;
      margin-top: 0.5rem;
      // margin-left:-0.9375rem;
      overflow: hidden;
      background-color: white;
    }
    .hidden {
      overflow: hidden;
      height: 2.1975rem;
    }

    .icon {
      // width: 100%;
      background-color: white;
      text-align: center;
      padding-top: 0;
    }
  }
  .category {
    //演职人员************************************************
    height: 12.0313rem;
    background-color: white;
    margin-top: 0.625rem;
    overflow: hidden;

    .yanyuan {
      color: #191a1b;
      font-size: 18px;
      line-height: 24px;
      // margin-right: 7px;
      padding: 15px;
    }

    .avatar {
      padding-top: 0;
      width: 100%;
      height: 5.3125rem;
      background-position: center;
      background-size: cover;
    }
  }

  .photos {
    //剧照*******************************************
    height: 11.0625rem;
    background-color: white;
    margin-top: 0.625rem;
    margin-bottom: 49px;
    .yanyuan {
      color: #191a1b;
      font-size: 18px;
      line-height: 24px;
      // margin-right: 7px;
      padding: 15px;
    }

    .avatar {
      padding-top: 0;
      width: 100%;
      height: 5.3125rem;
      background-position: center;
      background-size: cover;
    }
  }
}
</style>
