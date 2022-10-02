<template>
  <ul>
    <!--声明式导航-->
    <!-- <router-link to="/films" active-class="kerwinactive" tag="li">电影</router-link>

        <router-link to="/cinemas" active-class="kerwinactive" tag="li">影院</router-link> -->

    <router-link to="/films" custom v-slot="{ navigate, isActive }">
      <li @click="navigate" :class="isActive ? 'kerwinactive' : ''">
        <i class="iconfont icon-all"></i>
        <span>电影</span>
      </li>
    </router-link>
    <router-link to="/cinemas" custom v-slot="{ navigate, isActive }">
      <li @click="navigate" :class="isActive ? 'kerwinactive' : ''">
        <i class="iconfont icon-comments"></i>
        <span>影院</span>
      </li>
    </router-link>
    <router-link to="/center" custom v-slot="{ navigate, isActive }">
      <li @click="navigate" :class="isActive ? 'kerwinactive' : ''">
        <i class="iconfont icon-account"></i>
        <span>我的</span>
      </li>
    </router-link>
  </ul>
</template>

<script>
import "../assets/iconfont/iconfont.css";
export default {};
</script>
<style lang="scss" scoped>
ul {
  font-size: 1rem;
  position: fixed;
  bottom: -1px;
  left: 0;
  width: 100%;
  background-color: white;
  // border-top: 1px solid gray;
  display: flex;
  z-index: 100;
  li {
    height: 3.0625rem;
    flex: 1;
    line-height: 1.5625rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    z-index: 11;
    i {
      // margin-bottom: 5px;
      font-size: 1.25rem;
    }
    span {
      font-size: 1rem;
      // margin-top: 10px;
    }
  }
}

.kerwinactive {
  color: red;
}
</style>