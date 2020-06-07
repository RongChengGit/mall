<template>
  <div class="go-top" >
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {

  name : "GoTop",

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
.go-top{
  position: fixed;
    bottom: 55px;
    right: 10px;
}
.go-top img{
  width: 44px;
  height: 44px;
}
</style>