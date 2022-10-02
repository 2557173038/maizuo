<template>
  <div class="box">
    <div class="top"></div>

    <div class="center">
      <div>
      <span> 199张</span>
        <span class="span">优惠卷</span>
      </div>
      <div>
        <span>￥9999</span>
        <span class="span">余额</span>
      </div>
    </div>

    <ul>
      <li>电影订单</li>
      <li>组合红包</li>
      <li>帮助与客服</li>
      <li>设置</li>
    </ul>
  </div>
</template>

<script>

// export default {
//   beforeRouteEnter(to,from,next){

//   }
// }
</script>

<style lang="scss" scoped>
.box {
  height: 41.6875rem;
  width: 23.4375rem;
  background-color: #f4f4f4;
  .top {
    height: 10rem;
    background-color: orange;
  }
  .center {
    display: flex;
    height: 4.9375rem;
    background-color: white;

    div {
      flex: 1;
      text-align: center;
      line-height: 2.5625rem;
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;
      .span{
      color: #343333;
      font-size: 0.95rem;
        margin-top: -0.725rem;
      }
    }
  }
  ul {
    margin-top: 1rem;
    li {
      height: 3.0625rem;
      line-height: 3.0625rem;
      border-bottom: 1px solid #f4f4f4;
      background-color: white;
      padding-left: 1.5rem;
    }
  }
}
</style>