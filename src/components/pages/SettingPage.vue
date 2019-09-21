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
                                        <select name="themes" v-model="selectedThemeHref" >
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
import BulmaswatchThemeService from '@/services/bulmaswatch-themes-service'
const Store = require('electron-store');

const electronStore = new Store();

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
            //Theme
            if(this.selectedThemeHref !== 0) {
                let link = document.createElement('link')
                let customLink = ""
                link.rel = "stylesheet"
                link.href = this.selectedThemeHref
                link.id = "custom-theme";
                if(electronStore.get("user.theme") === undefined) {
                    document.head.appendChild(link)
                } else {
                    customLink = document.getElementById("custom-theme")
                    customLink.href = this.selectedThemeHref
                }
                //Persistence of data
                electronStore.set('user.theme', this.selectedThemeHref)
                // store.delete('user.theme')
            }
            electronStore.set('user.idleTime', this.maxIdleTime)
        }
    },
    computed: {
        apiUser() {
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
        selectedThemeHref: {
            get() {
                return this.$store.state.selectedThemeHref
            },
            set(value) {
                this.$store.commit('selectedThemeHref', value)
            }
        },
        loadingMessage() {
            return this.$store.state.loadingMessage
        },
        isLoading() {
            return this.$store.state.isLoading
        }
    },
    created() {
    },
    mounted() {
        this.$store.commit('isLoading', true)
        this.$store.commit('loadingMessage', 'Loading Tardis groups ...')
        let themesService = new BulmaswatchThemeService()
        themesService.getThemes()
        .then((response) => {
            this.$store.commit('isLoading', false)
            this.themes = response.data.themes
            this.themesVersion = response.data.version
        }, (error) => {
            this.$store.commit('isLoading', false)
            console.log(error)
        })
    }
};
</script>

<style scoped>

</style>
