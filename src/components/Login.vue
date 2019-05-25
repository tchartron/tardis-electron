<template>
    <div class="login">
        <h1>{{ msg }}</h1>
        <label for="email">E-mail</label>
        <input type="text" class="" name="email" placeholder="email@webexpertbusiness.net" />
        <label for="password">Pasword</label>
        <input type="password" class="" name="password" placeholder="password" />
    </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
