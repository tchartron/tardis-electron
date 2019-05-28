<template>
  <div class="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h3 class="title is-3">W.E.B Timers Watcher</h3>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app > img {
  max-height: 150px;
}
</style>
