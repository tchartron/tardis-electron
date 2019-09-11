<template>
    <div class="container">
        <!-- /////// HEADER \\\\\\\ -->
        <Header :user="user" />
        <!-- /////// TABS NAVIGATION \\\\\\\ -->
        <div class="tabs is-centered is-boxed is-medium">
            <ul>
                <li class="is-active">
                    <a>
                        <span class="icon is-small"><i class="fas fa-clock" aria-hidden="true"></i></span>
                        <span>Timer</span>
                    </a>
                </li>
                <li>
                    <a @click="navigate('settings')">
                        <span class="icon is-small"><i class="fas fa-cogs" aria-hidden="true"></i></span>
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
        </div>

        <div class="columns is-mobile">
            <div class="column is-two-thirds">
                <!-- /////// GROUP COMPONENT \\\\\\\ -->

                <!-- /////// TASK COMPONENT \\\\\\\ -->

            </div>
            <!-- /////// TASK SUMMARY COMPONENT \\\\\\\ -->
            <div class="column">

            </div>
        </div>
        <!-- /////// TASK DESCRIPTION COMPONENT \\\\\\\ -->
        <div class="column">

        </div>
        <!-- /////// TIMER COMPONENT \\\\\\\ -->
        <div class="column">

        </div>
        <!-- /////// WATCH COMPONENT \\\\\\\ -->
        <div class="column">

        </div>

        <!-- /////// PAGE LOADER \\\\\\\ -->
        <div class="pageloader is-dark" v-bind:class="{'is-active': isLoading}"><span class="title">{{ loadingMessage }}</span></div>
        <!-- /////// FOOTER \\\\\\\ -->


    </div>
</template>

<script>
import Header from './../layout/Header.vue';

export default {
    name: 'TimerPage',
    props: ['user', 'api'],
    data() {
        return {
            loadingMessage: String
        }
    },
    components: {
        Header
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
.logo > img {
    /*text-align: center;*/
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
