<template>
  <div class="detail-comment" v-if="commentInfo.cRate">
    <div class="comment-title">
      <span>用户评价</span>
      <span class="right">更多</span>
    </div>
    <div class="comment-user">
      <img :src="'http:'+commentInfo.list[0].user.avatar" alt="">
      <span >{{commentInfo.list[0].user.uname}}</span>
    </div>
    <div class="comment-content">
      <p>{{commentInfo.list[0].content}}</p>
      <div class="content-goods-style">
        <span>{{commentInfo.list[0].created|detailDateFormate()}}</span>
        &nbsp;
        <span>{{commentInfo.list[0].style}}</span>
      </div>
      <div class="comment-images" v-if="commentInfo.list[0].images">
        <img v-for="(item,index) in commentInfo.list[0].images" :key="index" 
          :src="'http:'+item" alt="">
      </div>
    </div>
  </div>
  <div  v-else class="detail-comment">
    <div class="comment-title">
      <span>用户评价</span>
    </div>
    <div class="nocomment">
      暂时没有评论
    </div>
  </div>
</template>

<script>
import {
  dateFormat
} from 'common/utils'
export default {

  name : "DetailComment",

  props:{
    commentInfo:{
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

  filters:{
    detailDateFormate(miles){
      let date = new Date(miles*1000);
      
      return dateFormat(date , 'yyyy-mm-dd hh:MM:ss');
    }
  }
}

</script>
<style scoped>
.detail-comment{
  width: 100%;
  border-top: 5px solid #F7F5F7;
  border-bottom: 5px solid #F7F5F7;
  padding: 20px 15px;
  margin-top: 30px;
}
.nocomment{
  height: 3rem;
  text-align: center;
  line-height: 3rem;
  margin-top: 10px;
}
.comment-title{
  height: 3rem;
  border-bottom: 1px solid #CCCCCC;
  line-height: 3rem;
  color: #333333;
}
.comment-title span:last-child{
  margin-right: 10px;
  font-size:.9rem;
} 
.comment-user{
  width: 100%;
  margin: 10px 0px;
}
.comment-user img{
  height: 50px;
  width: 50px;
  border-radius: 25px;
  vertical-align: middle;
  margin-right: 10px;
}
.comment-user span{
  color: #333333;
}
.comment-content{
  width: 100%;
}
.comment-content p{
  word-wrap: break-word;
  font-size:.9rem;
}
.content-goods-style{
  color: #919191;
  font-size: .9rem;
  margin: 10px 0px;
}
.comment-images img{
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>