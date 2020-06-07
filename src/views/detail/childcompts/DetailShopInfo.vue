<template>
  <div v-if="Object.keys(shop).length!=0" class="shop-info">
    <div class="shop-name">
      <img :src="'http:'+shop.shopLogo"> 
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-info-main">
      <div class="sell-info">
        <p>{{shopSells}}</p>
        <p>总销量</p>
      </div>
      <div class="sell-info">
        <p>{{shop.cGoods}}</p>
        <p>全部宝贝</p>
      </div>
      <div class="middle-line"></div>
      <div class="shop-score">
        <div v-for="(item,index) in shop.score" :key="index">
          <span>{{item.name}}</span>
          <!-- 
shop-score-better-count shop-score-lower-count shop-score-better-font shop-score-lower-font -->
          <span :class="{
            'shop-score-better-count':item.isBetter,
            'shop-score-lower-count':!item.isBetter}
          ">
              {{item.score}}
          </span>
          <span class="right"
            :class="{
              'shop-score-better-font':item.isBetter,
              'shop-score-lower-font':!item.isBetter
            }"
          >
            {{item.isBetter?'高':'低'}}
          </span>
        </div>
      </div>
    </div>
    <a :href="shop.shopUrl">  
      <div class="gostore-button">进店逛逛</div>
    </a>
  </div>
</template>

<script>
export default {

  name : "DetailShopInfo",

  props:{
    shop:{
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

  computed: {
    shopSells(){
      let count = Math.round(this.shop.cSells/10000);
      return count>1?count+'万':this.shop.cSells;
    }
  },

  methods: {}
}

</script>
<style scoped>
.shop-info{
  border-top: 5px solid #F7F5F7;
  border-bottom: 5px solid #F7F5F7;
  padding: 30px 10px;
}
.shop-name img{
  height: 44px;
  width: 44px;
  border: 1px solid #F4F3F3;
  border-radius: 22px;
  vertical-align:middle;
}
.shop-name span{
  margin-left: 10px;
}
.shop-info-main{
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
}
.sell-info{
  font-size: .9rem;
}
.sell-info p{
  
  margin: 5px 0px;
}

.middle-line{
  height: 40px;
  border-left: 1px solid #AFAFAF;
}
.shop-score{
  text-align: left;
  font-size: .8rem;
}
.shop-score div{
  margin: 5px 0px;
}
.shop-score div span{
  margin-right: 5px;
}
.shop-score-better-count{
  color: #FF635D;
}
.shop-score-lower-count{
  color: #64904A;
}
.shop-score-better-font{
  color: #FFFFFF;
  background-color: #FF635D;
}
.shop-score-lower-font{
  color: #FFFFFF;
  background-color: #64904A;
}
.gostore-button{
  width: 170px;
  height: 30px;
  margin: 0px auto;
  margin-top: 25px;
  font-size: .8rem;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
  background-color: #F4F4FC;
}
</style>