<template>
  <div >
    <navbar class="category-navbar">
      <template v-slot:center>
        <span>商品分类</span>
      </template>
    </navbar>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'

export default {

  name : "CategoryNavbar",

  data () {
    return {
    };
  },

  components: {
    Navbar
  },

  computed: {},

  methods: {}
}

</script>
<style scoped>
.category-navbar{
  background-color: var(--color-tint);
  color: #FFFFFF;
}
</style>