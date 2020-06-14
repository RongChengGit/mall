<template>
  <div id="shopcar-content-item">
    <div class="item-check">
      <check-button :checked="product.checked" @click.native="checkClick(product)"></check-button>
    </div>
      <div class="product-img">
        <img :src="product.img" alt="">
      </div>
      <div class="product-info">
        <p class="product-info-title">{{product.title}}</p>
        <p class="product-info-desc">{{product.desc}}</p>
        <div class="product-price">
          <span>{{"¥ "+product.price}}</span>
          <div class="right operation-count">
            <div id="minus" class="operation-button" @click="minusCount(product)">-</div>
            <div class="product-count">{{product.count}}</div>
            <div class="operation-button" @click="addCount(product)">+</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import CheckButton from 'components/common/checkbutton/CheckButton'

import {
  MINUS_PRODUCT_COUNT,
  ADD_PRODUCT_COUNT
} from 'store/mutation_types'

export default {

  name : "ShopcarContentItem",

  props:{
    product:{
      type:Object,
      default(){
        return {};
      }
    }
  },

  components:{
    CheckButton
  },

  data () {
    return {
      touchIndex:0,
      style:{}
    };
  },

  methods: {
    checkClick(product){
      product.checked = !product.checked;
    },
    minusCount(product){
      if(product.count==1){
        console.log('不能再减了喔');
        
        return;
      }
      this.$store.commit(MINUS_PRODUCT_COUNT , product);
      
    },
    addCount(product){
      this.$store.commit(ADD_PRODUCT_COUNT , product);
      
    },
  }
}

</script>
<style scoped>
#shopcar-content-item{
  height: 120px;
  display: flex;
  margin-top: 10px;
  position: relative;
  background-color: #fff;
}
.item-check{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
}
.product-img img{
  width: 70px;
  margin: 5px;
}
.product-info{
  flex: 1;
  padding: 10px;
  height: 100%;
  position: relative;
}

.product-info-title{
  font-size:1rem;
  color: #333333;
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  /* 要是用-webkit-line-clamp 必须结合display:-webkit-box 和 -webkit-box-oriebt:vertical 使用 
     前者是显示为webkit弹性盒子  后者为设置盒子内子元素的排列方式
  */
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
}
.product-info-desc{
  width: 70%;
  height: 1.8rem;
  line-height: 1.8rem;
  background-color: #FAFAFA;
  font-size: .9rem;
  margin: 5px 0px;
  padding:0px 5px;
  border-radius: 10px;
  text-align: center;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}
.product-price{
  position: absolute;
  bottom : 0px;
  width: 90%;
  height: 25px;
  line-height: 25px;
}
.product-price > span{
  color:var(--color-high-text);
  font-size: 1.1rem;
}
.operation-count{
  display: flex;
  border: 1px solid #CCCCCC;
  border-radius: 5px;
  text-align: center;
  height: 25px;
}
.operation-button{
  width: 25px;
  color: #CCCCCC;
}
.product-count{
  width: 40px;
  border-left: 1px solid #CCCCCC;
  border-right: 1px solid #CCCCCC;
  font-size: .9rem;
}
#minus{
  line-height: 22px;
}

</style>