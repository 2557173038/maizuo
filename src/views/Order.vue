<template>
    <div>
      
      <!-- <div>
        <input type="text" placeholder="用户名">
        <input type="text" placeholder="无需输入">

      </div> -->

      <van-circle v-model="currentRate" :rate="rate" :speed="100" :text="text" size="150px" class="yuan"/>

      <van-button round type="info"  @click="btn" class="btn">点击登入</van-button>
    </div>
</template>

<script>

export default {
  // mixins:[obj],//混入

  data() {
    return {
      currentRate: 0,
      rate:0,
    };
  },


  methods:{
    btn(){
      setInterval(() => {
      this.rate+=1
      
    }, 40);

    setTimeout(() => {
        this.$router.push("/center")
    }, 4050);
    }
  },
  computed: {
    text() {
      return this.currentRate.toFixed() + '%';
    },
  },

}
</script>

<style lang="scss" scoped>
 
 .yuan{
    position: absolute;
    top: calc(50% - 4.6875rem);
    left: calc(50% - 4.6875rem);

  }
  .btn{
    position: absolute;
    top: calc(50% + 6.25rem);
    left: calc(50% - 2.75rem);

  }
</style>