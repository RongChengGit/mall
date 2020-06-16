<template>
  <div class="profile-page-list">
    <div class="list-item" v-for="(item,index) in pageList" :key="index">
      <img class="title-img" :src="item.img" alt="">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {

  name : "ProfilePageList",

  data () {
    return {
      pageList:[ 
        {img: require('assets/img/profile/profile_message.png') , title:'我的消息'},
        {img: require('assets/img/profile/profile_integral.png') , title:'积分商城'},
        {img: require('assets/img/profile/profile_vipcard.png') , title:'会员卡'},
        {img: require('assets/img/tabbar/shopcar_active.png') , title:'我的购物车'},
        {img: require('assets/img/profile/profile_download.png') , title:'下载购物APP'}, ]
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>
.profile-page-list{
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  }
.list-item{
  width: 95%;
  background-color: #fff;
  margin-top: 10px;
  height: 35px;
  line-height: 35px;
  border-radius: 5px;
  box-shadow: 0px 0px 18px 1px #F4F3EF;
  font-size: .9rem;
}
.title-img{
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin: 0px 10px;
  margin-bottom: 4px;
}
</style>