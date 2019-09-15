<template>
    <div class="container">
        <!-- /////// HEADER \\\\\\\ -->
        <Header :user="user" />
        <!-- /////// TABS NAVIGATION \\\\\\\ -->
        <div class="box">
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

            <div class="columns is-mobile is-vcentered">
                <div class="column is-two-thirds">
                    <!-- /////// GROUP COMPONENT \\\\\\\ -->
                    <Group />
                    <!-- /////// TASK COMPONENT \\\\\\\ -->
                    <Task />
                </div>
                <!-- /////// TASK SUMMARY COMPONENT \\\\\\\ -->
                <div class="column has-text-centered">
                    <TimeSummary />
                    <TaskDetail />
                </div>
            </div>
        </div>
        <!-- /////// TASK DESCRIPTION COMPONENT \\\\\\\ -->
        <div class="column">

        </div>
        <!-- /////// TIMER COMPONENT \\\\\\\ -->
        <div class="column">
            <Timer />
        </div>
        <!-- /////// WATCH COMPONENT \\\\\\\ -->
        <div class="column">

        </div>

        <!-- /////// PAGE LOADER \\\\\\\ -->
        <div class="pageloader is-dark" v-bind:class="{'is-active': isLoading}"><span class="title">{{ loadingMessage }}</span></div>
        <!-- /////// FOOTER \\\\\\\ -->
        <Footer :api="api" />

    </div>
</template>

<script>
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
import Group from '@/components/ui/Group.vue';
import Task from '@/components/ui/Task.vue';
import TimeSummary from '@/components/ui/TimeSummary.vue';
import TaskDetail from '@/components/ui/TaskDetail.vue';
import Timer from '@/components/ui/Timer.vue';

export default {
    name: 'TimerPage',
    // props: ['user', 'api'],
    data() {
        return {
            // loadingMessage: String
        }
    },
    components: {
        Header,
        Footer,
        Group,
        Task,
        TimeSummary,
        TaskDetail,
        Timer
    },
    methods: {
        navigate(dest) {
            // this.$router.push({ name: dest, params:{ user: this.user, api: this.api }})
            this.$router.push({ name: dest})
        }
    },
    computed: {
        loadingMessage() {
            return this.$store.state.loadingMessage
        },
        isLoading() {
            return this.$store.state.isLoading
        },
        user() {
            return this.$store.state.user
        },
        api() {
            return this.$store.state.api
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
