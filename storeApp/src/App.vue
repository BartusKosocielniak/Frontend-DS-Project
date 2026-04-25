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

<style lang="css">
.main{
  min-height: 80vh;
  max-height: 80vh;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


</style>