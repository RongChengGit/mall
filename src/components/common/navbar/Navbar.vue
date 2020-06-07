<template>
  <div id="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {

name : "Navbar",


}

</script>
<style scoped>
#navbar{
  height: 44px ;
  line-height:44px ;
  display: flex;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, .1);
  text-align: center;
  align-items: center;
  position: relative;
  z-index: 999;
}
.left , .right{
  width: 60px;
}
.center{
  flex: 1;
  
}
</style>