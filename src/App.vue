<template>
  <div id="app">
    <keep-alive exclude="Detail">  
      <router-view></router-view>
    </keep-alive>
    <tabbar-use></tabbar-use>
  </div>
</template>

<script>
import tabbarUse from '@/components/content/tabbarUse/TabbarUse'

export default {
  name: 'App',
  components: {
    tabbarUse
  }
}
</script>

<style>
@import './assets/css/base.css';

</style>
