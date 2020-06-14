<template>
  <div id="shopcar-bottom-bar">
    <div class="check-content" @click="selectAll">
      <check-button 
        class="check-button"
        :checked="isAllChecked"></check-button>
      <span>全选</span>
    </div>
    <div class="total-price">
      <span>合计</span>
      <span>{{totalPrice}}</span>
    </div>
    <div class="settlement" @click="settlementClick">
      结算({{checkedProductCount}})
    </div>
  </div>
</template>

<script>

import CheckButton from 'components/common/checkbutton/CheckButton'

import { mapGetters } from 'vuex'

export default {

  name : "ShopcarBottomBar",

  data () {
    return {
    };
  },

  components: {
    CheckButton
  },

  computed: {
    ...mapGetters(['productList','productListLength']),
    
    totalPrice(){
      
      let checkedProducts = this.productList.filter(
        item => item.checked
      );
      return checkedProducts.reduce(
        (preval , item) =>{
          return preval + item.count * item.price ;
        },0
      ).toFixed(2);
    },
    checkedProductCount(){
      return this.productList.filter(
        item => item.checked
      ).length;
    },
    isAllChecked(){
      return this.checkedProductCount == this.productListLength && this.productListLength!=0;
    },
  },

  methods: {
    selectAll(){
      let allChecked = !this.isAllChecked;
      this.productList.map(
        item => {
          item.checked = allChecked
        } 
      )
    },
    settlementClick(){
      if(this.productListLength==0){
        this.$toast.show('购物车中还没有商品喔');
      }
    }
  }
}

</script>
<style scoped>
#shopcar-bottom-bar{
  width: 100%;
  background-color: #EEEEEE;
  position: fixed;
  bottom: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  font-size: .9rem;
}
.check-content{
  display: flex;
}
.check-button{
  margin-left: 10px;
  margin-right: 5px;
}
.total-price{
  margin-left: auto;
  margin-right: 10px;
}
.settlement{
 margin-right: 10px;
 color:#FFFFFF;
 background-color: #f35370;
 padding: 7px 20px;
 border-radius: 20px;
}
</style>