<template>
  <div class="app">
    <img alt="Vue logo" src="./assets/logo-web-white.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    this.$router.push('/login')
  }
};
</script>

<style>
/*@import '~bulma/css/bulma.css';*/
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
.app > img {
  /*text-align: center;*/
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-height: 150px;
  margin-bottom: 30px;
}
</style>
