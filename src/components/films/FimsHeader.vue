<template>
        <ul>
        <router-link to="/films/nowplaying" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'kerwinactive' : ''">
         正在热映
        </li>
      </router-link>
      <router-link to="/films/comingsoon" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'kerwinactive' : ''">
        即将上映
        </li>
      </router-link>
    </ul>
</template>

<style lang="scss" scoped>

   ul{
    display:flex;
    height: 3.0625rem;
    line-height: 3.0625rem;
    li{
        text-align: center;
        flex: 1;
    }
    .kerwinactive{
        color: red;
        border-bottom: 2px solid red;
    }
   }
</style>