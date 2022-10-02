<template>
  <div>
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />

    <ul v-if="value">
      <li v-for="data in computedList" :key="data.cinemaId">
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
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  computed: {
    computedList(){
        return this.$store.state.cinemaList.filter(item=>item.name.toUpperCase().includes(this.value.toUpperCase())||item.address.
        toUpperCase().includes(this.value.toUpperCase()))  
      }
  },
  methods: {
    onSearch() {},
    onCancel() {
        this.$router.back()
    },
  },
  mounted() {
    if (this.$store.state.cinemaList.length === 0) {
      this.$store.dispatch("getCinemaData", this.$store.state.cityId);
      //   console.log("数据完事了")
    }
  },
};
</script>


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
}
</style>
    
    
