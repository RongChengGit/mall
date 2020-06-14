<template>
  <div class="tabbar">
      <slot name="part1"></slot>
      <slot name="part2"></slot>
      <slot name="part3"></slot>
      <slot name="part4"></slot>
  </div>
</template>

<script>

export default {
  name:'Tabbar',
  data(){
    return {};
  }
}
</script>

<style>
  .tabbar{
    /* 水平分布   flex写在子标签中  占据的大小平均*/
    display: flex;


    height: 49px;
    text-align: center;
  }

</style>