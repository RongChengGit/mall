<template>
  <div id="detail" v-if="Object.keys(goodsBaseInfo).length!=0">
    <div class="title-info">
      <p class="title-info-title">{{goodsBaseInfo.title}}</p>
      <div class="title-info-price">
        <span class="title-info-price-nowprice">{{goodsBaseInfo.price}}</span>
        <span class="title-info-price-oldprice">{{goodsBaseInfo.oldPrice}}</span>
        <div class="title-info-price-desc">{{goodsBaseInfo.discountDesc}}</div>
      </div>
    </div>
    <div class="other-info">
      <span >{{goodsBaseInfo.columns[0]}}</span>
      <span >{{goodsBaseInfo.columns[1]}}</span>
      <span >{{goodsBaseInfo.services[goodsBaseInfo.services.length-1].name}}</span>
    </div>
    <div class="service-info">
      <div class="service-info-item" v-for="index in goodsBaseInfo.services.length-1" :key="index">
        <img v-if="goodsBaseInfo.services[index-1].icon" 
        :src="'http:'+goodsBaseInfo.services[index-1].icon">
        <span>{{goodsBaseInfo.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name : "DetailBaseInfo",

  props:{
    goodsBaseInfo:{
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

  mounted(){
    
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>
.title-info{
  width: 95%;
  margin: 0 auto;
}
.title-info-title{
  margin-top: 10px;
  font-size: 1.1rem;
  color: #2e2e2e;
}
.title-info-price{
  margin-top: 13px;
  display: flex;
  text-align: center;
  align-items:baseline ;
  
}
.title-info-price-nowprice{
  font-size: 1.3rem;
  color: var(--color-high-text);
}
.title-info-price-oldprice{
  font-size: .9rem;
  color: #AFAEAF;
  margin: 0 7px;
  text-decoration-line: line-through;
}
.title-info-price-desc{
  padding: 0px 10px ;
  font-size: 1rem;
  border-radius: 5px;
  color: #FFFFFF;
  background-color: var(--color-high-text);
}
.other-info{
  height: 2rem;
  width: 95%;
  color:#AFAEAF;

  margin: 15px auto;
  font-size: .9rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #F7F5F7;
}
.service-info{
  width: 95%;
  margin: 0 auto;
  display: flex;
  font-size: .9rem;
  justify-content: space-between;
  height: 3.5rem;
  align-items: center;
}
.service-info img{
  width: .9rem;
  vertical-align:text-bottom;
}

</style>