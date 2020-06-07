<template>
  <div id="tabbaruse">

      <tabbar>
        <template v-slot:part1>
          <tabbar-item path="/home" >
            <template v-slot:item-icon>
              <!-- 在标签中使用别名时需要在前面加上~ -->
              <img src="~assets/img/tabbar/home.png" alt="" class="tabbaricon">
            </template>
            <template v-slot:item-icon-active>
              <img src="~assets/img/tabbar/home_active.png" alt="" class="tabbaricon">
            </template>
            <template v-slot:item-text >
              <div>主页</div> 
            </template>
          </tabbar-item>
        </template>

        <template v-slot:part2>
          <tabbar-item path="/classification">
            <template v-slot:item-icon>
              <!-- 在标签中使用别名时需要在前面加上~ -->
              <img src="~assets/img/tabbar/classification.png" alt="" class="tabbaricon">
            </template>
            <template v-slot:item-icon-active>
              <img src="~assets/img/tabbar/classification_active.png" alt="" class="tabbaricon">
            </template>
            <template v-slot:item-text >
              <div>分类</div> 
            </template>
          </tabbar-item>
        </template>
        <template v-slot:part3>
          <tabbar-item path="/shopcar" >
            <template v-slot:item-icon>
              <!-- 在标签中使用别名时需要在前面加上~ -->
              <img src="~assets/img/tabbar/shopcar.png" alt="" class="tabbaricon">
            </template>
            <template v-slot:item-icon-active>
              <img src="~assets/img/tabbar/shopcar_active.png" alt="" class="tabbaricon">
            </template>
            <template v-slot:item-text >
              <div>购物车</div> 
            </template>
          </tabbar-item>
        </template>
        <template v-slot:part4>
          <tabbar-item path="/profile">
            <template v-slot:item-icon>
              <!-- 在标签中使用别名时需要在前面加上~ -->
              <img src="~assets/img/tabbar/profile.png" alt="" class="tabbaricon">
            </template>
            <template v-slot:item-icon-active>
              <img src="~assets/img/tabbar/profile_active.png" alt="" class="tabbaricon">
            </template>
            <template v-slot:item-text >
              <div>我的</div> 
            </template>
          </tabbar-item>
        </template>
      </tabbar>

  </div>
</template>

<script>
import tabbar from '@/components/common/tabbar/Tabbar';
import tabbarItem from '@/components/common/tabbar/TabbarItem';
export default {
  data(){
    // let activeFont = '#';
    // let deactiveFont = '';
    return {};
  },
  components:{
    tabbar,
    tabbarItem
  }
}
</script>

<style>
#tabbaruse{

  background-color: #f6f6f6;
  position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
  border-top: 1px solid #f0f0f0;
  z-index: 9;
}
.tabbaricon{
  width: 24px;
  height: 24px;
  /* 去除组件垂直间距 */
  /* img自带3px下边距 */
  vertical-align: middle;
  margin-top: 4px;
}
</style>