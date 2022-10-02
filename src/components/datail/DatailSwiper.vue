<template>
    <div class="swiper-container" :class="name">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
    </div>
  </template>
  <script>
  import Swiper from 'swiper'
  import 'swiper/css'
  export default {
    props:{
      slidesPerView:{
        type:Number,
        default:1
      },
      name:{
        type:String,
        default:'kerwin'
      }
    },
   
    mounted() {
      // console.log("mounted")
      new Swiper("."+this.name, {
        slidesPerView:this.slidesPerView,
        spaceBetween: 20,
        freeMode: true,
      });
    },
  };
  </script>
  
  