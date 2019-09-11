<template>
    <div class="container">
       <div class="columns is-vcentered  has-text-centered">
            <div class="column">
                <div class="logo">
                    <img alt="web-logo" src="./../assets/logo-web-white.png">
                </div>
            </div>
            <div class="column">
                <div class="box is-unselectable has-text-left has-margin-left-20 has-margin-right-30">
                    <span class="underline">User informations</span>
                    <span class="is-block is-size-7">id : {{ user.id }}</span>
                    <span class="is-block is-size-7">name : {{ user.name }}</span>
                    <span class="is-block is-size-7">email : {{ user.email }}</span>
                </div>
            </div>
        </div>
        <div class="tabs is-centered is-boxed is-medium">
            <ul>
                <li>
                    <a @click="navigate('watch')">
                        <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
                        <span>Watch</span>
                    </a>
                </li>
                <li class="is-active">
                    <a>
                        <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
                        <span>Clock</span>
                    </a>
                </li>
                <li>
                    <a>
                        <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Clock',
    props: ['user', 'api'],
    data() {
        return {

        }
    },
    methods: {
        navigate(dest) {
            this.$router.push({ name: dest, params:{ user: this.user, api: this.api }})
        }
    },
    mounted() {
    }
};
</script>

<style scoped>
.logo > img {
    max-height: 100px;
}

.underline {
    text-decoration: underline;
}
.bold {
    font-weight: bold;
}
.box span {
    overflow-wrap: break-word;
}
</style>
