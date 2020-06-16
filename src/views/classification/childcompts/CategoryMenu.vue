<template>
  <div class="category-menu">
    <div v-for="(item,index) in menuList" :key="index"
      class="menu-item"
      :class="{'menu-item-active':index==currentIndex}"
      @click="menuItemClick(index,item.maitKey)">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {

  name : "CategoryMenu",

  props:{
    menuList:{
      type:Array,
      default(){
        return [];
      }
    }
  },

  data () {
    return {
      currentIndex:0
    };
  },


  computed: {
  },

  methods: {
    menuItemClick(index,maitKey){
      console.log('click',maitKey);
      this.$emit('menuClick',maitKey);
      this.currentIndex = index ;

    }
  }
}

</script>
<style scoped>
.category-menu{
  width: 80px;
}
.menu-item{
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 15px;
  color: #333333;
  text-align: center;
}
.menu-item-active{
  background-color: #F2F2F2;
  color: var(--color-high-text);
}
</style>