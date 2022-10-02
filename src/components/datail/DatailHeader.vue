<template>

        <div class="header">
            {{name}}
        <i class="iconfont icon-back" @click="handleBack"></i>
        </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },

  methods: {
    handleBack () {
      this.$router.back()// 返回上一个页面
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
    position:fixed;
    top: 0;
    left: 0;
    z-index: 111;
    width: 100%;
    height: 2.75rem;
    line-height: 2.75rem;
    background-color: white;
    text-align: center;
    i{
        font-size: 30px;
        position: fixed;
        left: 10px;
        top: 0;
    }

}

</style>
