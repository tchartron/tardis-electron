<template>
    <div class="container">
        <div class="columns has-margin-left-10 has-margin-right-10">
            <div class="column">

                <!-- /////// HEADER \\\\\\\ -->
                <Header :user="apiUser" />
                <!-- /////// TABS NAVIGATION \\\\\\\ -->
                <div class="columns">
                    <div class="column">
                        <div class="tabs is-toggle is-fullwidth is-medium">
                            <ul>
                                <li class="is-active">
                                    <a>
                                        <span class="icon is-small"><i class="fas fa-clock" aria-hidden="true"></i></span>
                                        <span>Timer</span>
                                    </a>
                                </li>
                                <li>
                                    <a @click="navigate('setting-page')">
                                        <span class="icon is-small"><i class="fas fa-cogs" aria-hidden="true"></i></span>
                                        <span>Settings</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="columns is-mobile is-vcentered">
                    <div class="column is-two-thirds">
                        <!-- /////// GROUP COMPONENT \\\\\\\ -->
                        <Group />
                        <!-- /////// TASK COMPONENT \\\\\\\ -->
                        <Task />
                    </div>
                    <!-- /////// TASK SUMMARY AND DETAILS COMPONENT \\\\\\\ -->
                    <div class="column has-text-centered">
                        <TimeSummary />
                        <TaskDetail />
                    </div>
                </div>
                <!-- /////// TIMER COMPONENT \\\\\\\ -->
                <div class="columns">
                    <div class="column">
                        <Timer />
                    </div>
                </div>
                <!-- /////// WATCH COMPONENT \\\\\\\ -->
                <div class="columns">
                    <div class="column">
                        <Watch />
                    </div>
                </div>

                <!-- /////// PAGE LOADER \\\\\\\ -->
                <div class="pageloader is-dark" v-bind:class="{'is-active': isLoading}"><span class="title">{{ loadingMessage }}</span></div>
                <!-- /////// FOOTER \\\\\\\ -->
                <Footer :api="api" />
            </div>
        </div>
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
import Watch from '@/components/ui/Watch.vue';

export default {
    name: 'TimerPage',
    data() {
        return {}
    },
    components: {
        Header,
        Footer,
        Group,
        Task,
        TimeSummary,
        TaskDetail,
        Timer,
        Watch
    },
    methods: {
        navigate(dest) {
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
        apiUser() {
            return this.$store.state.apiUser
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
