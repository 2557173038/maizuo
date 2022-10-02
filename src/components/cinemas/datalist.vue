<template>
    <div class="box" :style="{ height: height }">

     <ul>
        <li v-for="data in $store.state.cinemaList" :key="data.cinemaId">
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
