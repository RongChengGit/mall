<template>
  <div id="detail-recommend" v-if="goodsList.length!=0">
    <goods-list :goods-list="goodsList"></goods-list>
  </div>
</template>

<script>
import GoodsList from 'components/content/goodslist/GoodsList'

export default {

  name : "DetailRecommend",

  props:{
    goodsList:{
      type:Array,
      default(){
        return [];
      }
    }
  },

  data () {
    return {
    };
  },

  components: {
    GoodsList
  },

}

</script>
<style scoped>
.detail-recommend{
  width: 100%;
  border-top: 5px solid #F7F5F7;
}
</style>