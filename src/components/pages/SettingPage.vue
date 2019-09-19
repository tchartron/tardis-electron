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
                                    <input class="input" type="text" v-model="maxIdleTime" placeholder="30">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <div class="select is-fullwidth">
                                        <select name="themes" v-model="selectedThemeCss" >
                                            <option value="0">Please pick a theme</option>
                                            <option v-for="theme in themes" :value="theme.css">{{ theme.name + " | " + theme.description }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <label class="checkbox">
                                        <input type="checkbox">
                                        Direclty start timer when watching (NOT IMPLEMENTED)
                                    </label>
                                </div>
                            </div>
                            <div class="field">
                                <p class="control has-text-centered">
                                    <button class="button is-info" @click="saveSettings">
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
import BulmaswatchThemeService from '@/services/bulmaswatch-themes-service'

export default {
    data() {
        return {
            themes: {},
            themesVersion: ""
        }
    },
    components: {
        Header,
        Footer
    },
    methods: {
        navigate(dest) {
            this.$router.push({ name: dest})
        },
        saveSettings() {

        }
    },
    computed: {
        user() {
            return this.$store.state.user
        },
        api() {
            return this.$store.state.api
        },
        maxIdleTime: {
            get() {
                return this.$store.state.maxIdleTime
            },
            set(value) {
                this.$store.commit('maxIdleTime', value)
            }
        },
        selectedThemeCss: {
            get() {
                return this.$store.state.selectedThemeCss
            },
            set(value) {
                this.$store.commit('selectedThemeCss', value)
            }
        }
    },
    created() {
    },
    mounted() {
        let themesService = new BulmaswatchThemeService()
        themesService.getThemes()
        .then((response) => {
            this.themes = response.data.themes
            console.log(this.themes)
            this.themesVersion = response.data.version
        }, (error) => {
            console.log(error)
        })
    }
};
</script>

<style scoped>

</style>
