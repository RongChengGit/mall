<template>
  <div id="shopcar-content">
    <scroll class="scroll" ref="shopcarScroll">
      <template v-slot:default>
        <shopcar-content-item 
          v-for="(item , index) in productList"
          :key="index"
          :product="item"
        ></shopcar-content-item>
      </template>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/BScroll'

import ShopcarContentItem from './ShopcarContentItem'

export default {

  name : "ShopcarContent",

  data () {
    return {

    };
  },

  components: {
    Scroll,
    ShopcarContentItem
  },

  computed: {
    productList(){
      return this.$store.state.productList;
    }
  },

  methods: {
    scrollRefresh(){
      if(this.$refs.shopcarScroll.scroll){
        this.$refs.shopcarScroll.scroll.refresh();
      }
    }
  },

  activated(){
    this.scrollRefresh();
  }
}

</script>
<style scoped>
#shopcar-content{
  width: 100%;
  height: calc(100% - 44px - 49px - 44px);
}
.scroll{
  height: 100%;
  overflow: hidden;
}
button{
  position: fixed;
  left: 0px;
  bottom: 80px;
}
</style>