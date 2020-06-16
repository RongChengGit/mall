<template>
  <div class="profile-user-info">
    <div class="user-baseinfo">
      <img src="~assets/img/tabbar/profile.png" alt="">
      <div>
        <p class="login">登录/注册</p>
        <p class="phonenum">暂无绑定手机号</p>
      </div>
      <div class="goInfo"><img src="~assets/img/profile/right.png" ></div>
    </div>
    <div class="user-eco">
      <div>
        <div><span>0.00</span>元</div>
        <div>余额</div>
      </div>
      <div>
        <div><span>0</span>个</div>
        <div>我的优惠</div>
      </div>
      <div>
        <div><span>0</span>分</div>
        <div>我的积分</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name : "ProfileUserInfo",

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
.profile-user-info{
  width: 95%;
  margin: 0px auto;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 18px 1px #F4F3EF;
}
.user-baseinfo{
  background-color: var(--color-tint);
  padding: 0px 15px;
  display: flex;
  color: #FFF;
  align-items: center;
  position: relative;
}
.user-baseinfo > img{
  background-color: #EEE;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin: 10px;
}
.login{
  font-size: 1rem;
}
.phonenum{
  font-size: .8rem;
}
.goInfo{
  position: absolute;
  right:15px;
  font-size: 2rem;
}
.goInfo > img{
  height: 20px;
  width: 20px;
}
.user-eco{
  display: flex;
  text-align: center;
  background-color: #fff;
}
.user-eco > div{
  flex: 1;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: .8rem;
}
.user-eco span{
  color: #FC764F;
  font-size: 1.1rem;
  font-weight: 600;
  margin-right: 3px;
}
</style>