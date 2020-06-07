<template>
  <div id="detail-goods-params" v-if="Object.keys(goodsParams).length!=0">
    <table class="rule-table">
      <tr v-for="(row,index) in goodsParams.rule.tables[0]" :key="index">
        <td v-for="(item , index) in row" :key="index">
          {{item}}
        </td>
      </tr>
    </table>
    <table class="info-table">
      <tr v-for="(row,index) in goodsParams.info" :key="index">
        <td>{{row.key}}</td>
        <td>{{row.value}}</td>
      </tr>
    </table>
    <img v-if="goodsParams.images.length>1" :src="goodsParams.images" alt="">
  </div>
</template>

<script>
export default {

  name : "DetailGoodsParams",

  props:{
    goodsParams:{
      type:Object,
      default(){
        return {};
      }
    }
  },

  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>
#detail-goods-params{
  width: 95%;
  margin: 0px auto;
  border-top: 5px solid #F7F5F7;
  padding: 0px 7px;
  font-size: .9rem;

}
.rule-table{
  margin-top: 15px;
  width: 100%;
  border-bottom: 1px solid #CCCCCC;
}
.info-table{
  width: 100%;
}
.rule-table tr,.info-table tr{
  height: 3rem;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #FAFAFA;
  display: flex;

}
.rule-table tr td:first-child,.info-table tr td:first-child{
  width: 100px;
}
/* :not()不包含条件中的元素 */
.rule-table tr td:not(:first-child){
  flex: 1;
}
.info-table tr td:not(:first-child){
  flex: 1;
  color: var(--color-high-text);
}
</style>