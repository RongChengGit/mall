<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goodsList" :item="item" :key="index">
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {

  name : "GoodsList",

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
    GoodsListItem
  },

  computed: {},

  methods: {}
}

</script>
<style scoped>
.goods-list{
  display: flex;
  /* 流线布局是否根据组件大小自动换行 */
  flex-wrap: wrap;
  width: 100%;
  /* justify-content: space-around; 使组件左右距离相加等于中间间距 并不算是组件间的相等布局 */
  /* space-evenly 组件间的间距都是相等的   用这个更加合理 */
  justify-content: space-evenly;
}
</style>