<template>
  <div>
    <film-swiper class="img" :key="datalist.length">
      <film-swiper-item v-for="data in datalist" :key="data.id" class="filmswiperitem">
    <img :src="data.imgUrl" alt="">
      </film-swiper-item>
    </film-swiper>
   
    <film-header class="sticky"></film-header>

    <router-view></router-view>
  </div>
</template>

<script>
import filmSwiper from "@/components/films/FilmSwiper.vue";
import filmSwiperItem from "@/components/films/FilmSwiperItem.vue";
import axios from "axios";
import filmHeader from "@/components/films/FimsHeader.vue"
export default {
  data() {
    return {
      datalist: [],
    };
  },
  mounted() {
    axios.get("/banner.json").then(res=>{
        // console.log(res.data.banner)
        this.datalist=res.data.banner
    })
  },

  components: {
    filmSwiper,
    filmSwiperItem,
    filmHeader,
  },
};
</script>
<style lang="scss" scoped>

.img{
    overflow: hidden;
    }
   .filmswiperitem{
    img{
        width: 100%;
        height: 11.6875rem;
    }
    
   }
   .sticky{
      position:sticky;
      top: 0;
      background-color: white;
      z-index:666;
    }
  
</style>