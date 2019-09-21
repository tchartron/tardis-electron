<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
const Store = require('electron-store');
const electronStore = new Store();

export default {
    name: 'app',
    mounted() {
        this.$router.push('/login')
        //Cheking for user configuration
        //Theme
        let userTheme = electronStore.get('user.theme')
        if(userTheme !== undefined) {
            let link = document.createElement('link')
            link.rel = "stylesheet"
            link.href = userTheme
            link.id = "custom-theme";
            let linkFound = document.getElementById("custom-theme")
            if(linkFound === null) { //mounted hook is being called mlultiple time so limiting link inclusion
                document.head.appendChild(link)
            }
        }
        let maxIdleTime = electronStore.get('user.idleTime')
        if(maxIdleTime !== undefined) {
            this.$store.commit('maxIdleTime', maxIdleTime)
        }
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
</style>
