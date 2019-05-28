<template>
    <div class="box">
        <h5 class="subtitle is-5">Please Login</h5>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" v-model="user.email" placeholder="Email">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" v-model="user.password" placeholder="Password">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success" @click="login">
              Login
            </button>
          </p>
        </div>
        <div v-show="loginResult != null" class="box">
            {{ loginResult }}
        </div>
    </div>
</template>

<script>
import BackendService from './../services/backend-service'

export default {
    name: 'Login',
    data() {
        return {
            user: {},
            loginResult: null,
            apiToken: null
        }
    },
    methods: {
        login() {
            let backend = new BackendService();
            backend.login(this.user)
            .then((response) => {
                console.log(response);
                this.apiToken = response.data.access_token
                backend.getUser(this.apiToken).then((response) => {
                    console.log(response)
                    this.user = response.data;
                    // this.loginResult = this.user;
                }, (error) => {
                    console.log(error)
                    this.loginResult = error;
                });
                console.log(this.user)
            }, (error) => {
                console.log(error);
                this.loginResult = error;
            });;
            return false;
        }
    },

};
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
