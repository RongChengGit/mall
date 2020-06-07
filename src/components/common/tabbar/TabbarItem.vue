<template>
  <div class="tabbar-item" @click="slotClick">
    <!-- 如果需要对插槽设置样式  最好是在插槽外包一层div  避免插槽的样式失效 -->
    <div v-show="!isActive" class="itemicon">
      <slot name="item-icon" ></slot> 
    </div>
    <div v-show="isActive" class="itemicon" >
      <slot name="item-icon-active" ></slot>
    </div>
    <!-- 插槽中绑定样式不会生效  在替换插槽时样式会被替换  设置的样式会消失 -->
    <div :style="fontStyle">
      <slot name="item-text" ></slot> 
    </div>                    
  </div>
</template>

<script>
export default {
  // name:TabbarItem
  props:{
    path:{
      type:String,
      default:'/home' 
    },
    activeFont:{
      type:String,
      default:'#ff5777'
    },
    deactiveFont:{
      type:String,
      default:'#8a8a8a'
    }
  },
  data(){
     
    return {};
  },
  methods:{
    slotClick(){ 
      if(this.$route.path==this.path){
        return;
      } 
      this.$router.push(this.path); 
    }
  },
  computed:{
    isActive(){
      // 动态改变tabbarItem中的颜色   判断当前活跃的route是否包含传入的path
      // 如果包含此item即为活跃  不包含则为不活跃
      return this.$route.path.indexOf(this.path) != -1;
    },
    fontStyle(){
      if(this.activeFont == undefined && this.deactiveFont == undefined){
        return;
      }
      return this.isActive==true?{color:this.activeFont}:{color:this.deactiveFont};
    }
  }
}
</script>

<style>
.tabbar-item{  
  flex: 1; 
  font-size: 10px;
}


</style>