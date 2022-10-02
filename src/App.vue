<template>
  <div>
    <tabbar ref="mytabbar" class="footer" v-show="$store.state.isTabbarShow"></tabbar>
    <!-- 路由容器 -->
    <router-view></router-view>
    
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar.vue";
import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant)
export default {
  components: {
    Tabbar,
  },
  data() {
    return {};
  },

  mounted() {
    // console.log(this.$refs.mytabbar.$el.offsetHeight)
  },
  methods: {},
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
body,
html {
  width: 100%;
  // height: 100%;
  // overflow: auto;
}

ul {
  list-style: none;
}

.van-toast--html, .van-toast--text {
    min-width: 30px;
  }
</style>
