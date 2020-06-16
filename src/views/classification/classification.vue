<template>
  <div class="category">
    <category-navbar></category-navbar>
    <div class="category-content">
      <category-menu
      :menu-list="menuList"
      @menuClick="menuClick">
      </category-menu>
      <scroll class="scroll-content" ref="catescroll">
        <goods-list :goods-list="goodsList" :show-price="false" :use-link="true"></goods-list>
      </scroll>
    </div>
  </div>

</template>

<script>
import CategoryNavbar from './childcompts/CategoryNavbar'
import CategoryMenu from './childcompts/CategoryMenu'

import Scroll from 'components/common/scroll/BScroll'
import GoodsList from 'components/content/goodslist/GoodsList'

import { debounce } from 'common/utils'

import { getCategory , getSubcategory } from 'network/classification_request.js'

export default {

  name : "Classification",

  components:{
    CategoryNavbar,
    CategoryMenu,
    GoodsList,
    Scroll
  },

  data () {
    return {
      menuList:[],
      goodsList:[],
    };
  },

  mounted(){
    this.$bus.$on('goodsImgLoad' , debounce(this.goodsImgLoad , 200));
    this.getCategoryTitle();
  },
  beforeDestroy(){
    this.$bus.$off('goodsImgLoad');
  },

  methods: {
    menuClick(maitKey){
      this.getCategoryGoods(maitKey);
      this.$refs.catescroll.scrollTo(0 , 0 , 0);
    },
    goodsImgLoad(){
      
      this.$refs.catescroll.scroll.refresh();
    },
    getCategoryTitle(){
      getCategory().then(
        res=>{
          this.menuList = res.data.category.list;
          this.getCategoryGoods(this.menuList[0].maitKey);
        }
      )
    },
    getCategoryGoods(maitKey){
      getSubcategory(maitKey).then(
        res=>{
          this.goodsList = res.data.list;
        }
      )
    }
  }
}

</script>
<style scoped>
.category{
  width: 100vw;
  height: 100vh;
}
.category-content{
  display: flex;
}
.scroll-content{
  flex: 1;
  height: calc(100vh - 49px - 44px);
  background-color: #F2F2F2 ;
  overflow: hidden;
}
</style>