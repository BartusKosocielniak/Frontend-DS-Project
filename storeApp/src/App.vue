<template>
  <Header></Header>
  <div  class="main">
    <RouterView/>
  </div>
  <Footer></Footer>
</template>

<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue'
  export default {
  components: {
        Header, Footer
	},
  }
</script>

<style lang="css" scoped>
.main{
  height: 80vh;
}


</style>