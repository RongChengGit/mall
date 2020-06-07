<template>
  <div id="nav-bar">
    <nav-bar>
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/Navbar'
export default {

  name : "HomeNavBar",

  data () {
    return {
    };
  },

  components: {
    NavBar
  },

  computed: {},

  methods: {}
}

</script>
<style scoped>
  #nav-bar{
    background-color: var(--color-tint);
    color: #FFFFFF;
    width: 100%;
  }
</style>