<template>
    <div class="container">
        <div class="columns has-margin-left-10 has-margin-right-10">
            <div class="column">

                <!-- /////// HEADER \\\\\\\ -->
                <Header :user="user" />
                <!-- /////// TABS NAVIGATION \\\\\\\ -->
                <div class="columns">
                    <div class="column">
                        <div class="tabs is-toggle is-fullwidth is-medium">
                            <ul>
                                <li>
                                    <a @click="navigate('timer-page')">
                                        <span class="icon is-small"><i class="fas fa-clock" aria-hidden="true"></i></span>
                                        <span>Timer</span>
                                    </a>
                                </li>
                                <li class="is-active">
                                    <a>
                                        <span class="icon is-small"><i class="fas fa-cogs" aria-hidden="true"></i></span>
                                        <span>Settings</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="columns">
                    <div class="column">
                        <!-- MAKE THIS A COMPONENT -->
                        <div class="box">
                            <div class="field">
                                <label class="label">Watcher Idle Time</label>
                                <div class="control">
                                    <input class="input" type="text" v-model="idleTime" placeholder="30">
                                </div>
                            </div>
                            <div class="field">
                                <p class="control has-text-centered">
                                    <button class="button is-info" @click="login">
                                        Save
                                    </button>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- /////// PAGE LOADER \\\\\\\ -->
                <!-- <div class="pageloader is-dark" v-bind:class="{'is-active': isLoading}"><span class="title">{{ loadingMessage }}</span></div> -->
                <!-- /////// FOOTER \\\\\\\ -->
                <Footer :api="api" />


            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';

export default {
    data() {
        return {}
    },
    components: {
        Header,
        Footer
    },
    methods: {
        navigate(dest) {
            this.$router.push({ name: dest})
        }
    },
    computed: {
        // loadingMessage() {
        //     return this.$store.state.loadingMessage
        // }
        user() {
            return this.$store.state.user
        },
        api() {
            return this.$store.state.api
        },
        idleTime: {
            get() {
                return this.$store.state.idleTime
            },
            set(value) {
                this.$store.commit('idleTime', value)
            }
        }
    }
};
</script>

<style scoped>

</style>
