<template>
  <div class="goods-list-item" @click="goodsItemClick">
    <img v-lazy="imageUrl" alt="" class="goods-img" @load="goodsImgLoad">
    <div class="goods-text-content">
      <p>{{item.title}}</p>
      <span v-if="showPrice" class="price">{{"¥"+item.price}}</span>
      <span v-if="showPrice" class="cfav">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {

  name : "GoodsListItem",

  props:{
    item:{
      type:Object,
      default(){
        return {};
      }
    },
    showPrice:{
      type:Boolean,
      default(){
        return true;
      }
    },
    useLink:{
      type:Boolean,
      default(){
        return false;
      }
    }

  },

  data () {
    return {
    };
  },

  components: {},

  computed: {
    imageUrl(){
      return this.item.image||this.item.show.img;
    }
  },

  methods: {
    goodsImgLoad(){
      this.$bus.$emit('goodsImgLoad');
    },

    goodsItemClick(){
      // this.$router.push('detail/'+this.item.iid);
      if(this.useLink){
        location.href = this.item.link;
        return;
      }
      this.$router.push({
        path:'/detail',
        query:{
          id:this.item.iid||this.item.shop_id
        }
      })
    }
  }
}

</script>
<style scoped>
.goods-list-item{
  margin-top: 1rem;
  width: 45%;
  position: relative;
  padding-bottom: 10%;
  font-size: var(--font-size);
  z-index: 9;
}
.goods-img{
  width: 100%;
  border-radius: 5px;
}
.goods-text-content{
  width: 100%;
  position: absolute;
  bottom: 1%;
  text-align: center;
}
.goods-text-content p{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-text-content span{
  margin: 0 5px;
}
.cfav::before{
  content:'';
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url(~assets/img/common/collect.svg);
  background-size: 100%;
}
.price{
  color: var(--color-high-text);
}
</style>