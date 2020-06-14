<template>
  <div class="detail-bottom-bar">
    <div class="service-content">
      <div>
        <div class="customer-service"></div>
        <span>客服</span>
      </div>
      <div>
        <div class="shop"></div>
        <span>店铺</span>
      </div>
      <div @click="collectClick">
        <div :class="collectClass"></div>
        <span>收藏</span>
      </div>
    </div>
    <div class="buybutton-content">
      <div class="add-shop-car" @click="addShopCar">
        <span>加入购物车</span>
      </div>
      <div class="buybuybuy">
        <span>立即购买</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name : "DetailBottomBar",

  data () {
    return {
      isCollect:false
    };
  },
  methods:{
    collectClick(){
      this.isCollect = !this.isCollect;
    },
    addShopCar(){
      this.$emit('addShopCar');
    }
  },
  computed:{
    collectClass(){
      return { 'collect-active' : this.isCollect , 'collect' : !this.isCollect};
    }
  }
}

</script>
<style scoped>
.detail-bottom-bar{
  background-color: #fff;
  height: 49px;
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0px;
  text-align: center;
  z-index: 999;
}
.service-content{
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  font-size: .8rem;
}
.service-content > div{
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.service-content > div > div{
  margin-top: 5px;
  width: 22px;
  height:22px;
  background-repeat: no-repeat;
  background-image: url(~assets/img/detail/detail_bottom.png);
  background-size: 22px 150px;
}
.customer-service{
  background-position: 0px -54px ;
}
.shop{
  background-position: 0px -100px;
}
.collect{
  background-position: 0px 0px;
}
.collect-active{
  background-position: 0px -27px;
}
.buybutton-content{
  width: 60%;
  height: 100%;
  text-align: center;
  align-items: center;
  display: flex;
  
}
.buybutton-content > div{
  width: 47%;
  height: 35px;
  line-height: 35px;
  font-size: .85rem;
  color: #FFF;
}
.add-shop-car{
  border-top-left-radius: 17.5px;
  border-bottom-left-radius: 17.5px;
  background:linear-gradient( to right , #F7CC45 , #F09937)
}
.buybuybuy{
  border-top-right-radius: 17.5px;
  border-bottom-right-radius: 17.5px;
  background:linear-gradient( to right , #EE7E30 , #EB5828)
}
</style>