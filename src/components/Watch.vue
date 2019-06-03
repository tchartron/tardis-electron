<template>
    <div class="box">
        <h5 class="subtitle is-5">Watch folder</h5>
        <div class="control has-icons-left has-icons-right">
            <input class="input is-medium" type="text" placeholder="/path/to/watch/folder">
            <span class="icon is-left">
                <i class="fas fa-folder-open"></i>
            </span>
        </div>
        <div class="field">
            <p class="control has-text-centered has-margin-top-20">
                <button class="button is-dark">
                    Start watching
                </button>
            </p>
        </div>
    </div>
</template>

<script>
// import BackendService from './../services/backend-service'

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
