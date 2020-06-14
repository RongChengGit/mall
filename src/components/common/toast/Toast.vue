<template>
  <div class="toast" v-show="isShow">
    <div class="toast-content">{{message}}</div>
  </div>
</template>

<script>
export default {

  name : "Toast",

  data () {
    return {
      isShow:false,
      message:''
    };
  },

  components: {},

  computed: {},

  methods: {
    show( message , duration=1500 ){
      this.isShow = true;
      this.message = message;
      setTimeout(
        ()=>{
          this.isShow = false;
          this.message = '';
        },duration
      );
    }
  }
}

</script>
<style scoped>
.toast{
  background-color: rgba(0, 0, 0, .7);
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
  padding: 10px 20px;
  transform: translate(-50%,-50%);
  border-radius: 5px;
}
.toast-content{
  color: #FFF;
}
</style>