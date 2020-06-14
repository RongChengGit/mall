<template>
  <div class="detail-goods-info" v-if="Object.keys(goodsDetailImages).length>1">
    <div class="info-desc">
      <div class="desc-front"></div>
      <p class="desc-content">{{goodsDetailImages.desc}}</p>
      <div class="desc-behind"></div>
      <div class="img-title">{{goodsDetailImages.detailImage[0].key}}</div>
    </div>
    <div class="info-img">
      <img
        v-for="(item,index) in goodsDetailImages.detailImage[0].list" :key="index"
        :src="item" alt=""
        @load="loadEvent">
    </div>
  </div>
</template>

<script>
import {debounce} from 'common/utils'
export default {

  name : "DetailGoodsInfo",

  props:{
    goodsDetailImages:{
      type:Object,
      default(){
        return {imgList:[]}
      }
    }
  },

  data () {
    return {
      loadEvent:debounce(this.imgLoad , 200)
    };
  },

  methods: {
    imgLoad(){
      this.$emit('imgLoad');
    },
  },

}

</script>
<style scoped>
.detail-goods-info{
  width: 95%;
  margin: 0 auto;
}
.info-desc{
  margin: 10px 0px;
  padding: 5px;
}
.desc-front{
  width: 100px;				
  border-bottom: 2px solid #CCCCCC;
  height: 4px;
}
.desc-behind{
  width: 100px;				
  border-bottom: 2px solid #CCCCCC;
  height: 4px;
  float: right;
}
.desc-front::before{
  content: "";
  display: block;
  width: 4px;
  height: 4px;
  background-color: black;
}
.desc-behind::before{
  content: "";
  display: block;
  width: 4px;
  height: 4px;
  background-color: black;
  float: right;
}
.desc-content{
  margin: 15px 0px;
  text-indent: 4px;
  font-size: .9rem;
  word-wrap: break-word;
}
.img-title{
  margin-top: 30px;
  
}
.info-img img{
  width: 100%;
}
</style>