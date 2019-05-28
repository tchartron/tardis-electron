<template>
    <div class="box">
        <h5 class="subtitle is-5">Watch folder</h5>
        <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input class="input" type="watch" placeholder="Email">
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control">
                <button class="button is-success">
                    Login
                </button>
            </p>
        </div>
        <div class="box">
            Bonjour maggle
        </div>
    </div>
</template>

<script>
import BackendService from './../services/backend-service'

export default {
    name: 'Watch',
    data() {
        return {
            user: {},
        }
    },
    methods: {
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
