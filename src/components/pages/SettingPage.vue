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
                                <p class="control has-text-centered">
                                    <button class="button is-info">
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
// const ThemeHelper = function() {

//   const preloadTheme = (href) => {
//     let link = document.createElement('link');
//     link.rel = "stylesheet";
//     link.href = href;
//     document.head.appendChild(link);

//     return new Promise((resolve, reject) => {
//       link.onload = e => {
//         const sheet = e.target.sheet;
//         sheet.disabled = true;
//         resolve(sheet);
//       };
//       link.onerror = reject;
//     });
//   };

//   const selectTheme = (themes, name) => {
//     if (name && !themes[name]) {
//       throw new Error(`"${name}" has not been defined as a theme.`);
//     }
//     Object.keys(themes).forEach(n => themes[n].disabled = (n !== name));
//   }

//   let themes = {};

//   return {
//     add(name, href) { return preloadTheme(href).then(s => themes[name] = s) },
//     set theme(name) { selectTheme(themes, name) },
//   };
// };

export default {
    data() {
        return {
            themes: {
                    // cosmo: "https://unpkg.com/bulmaswatch@0.7.5/cosmo/bulmaswatch.min.css",
                    // cerulean: "https://unpkg.com/bulmaswatch@0.7.5/cerulean/bulmaswatch.min.css",
                    // cyborg: "https://unpkg.com/bulmaswatch@0.7.5/cyborg/bulmaswatch.min.css",
                    // darkly: "https://unpkg.com/bulmaswatch@0.7.5/darkly/bulmaswatch.min.css",
                    // default: "https://unpkg.com/bulmaswatch@0.7.5/default/bulmaswatch.min.css",
                    // flatly: "https://unpkg.com/bulmaswatch@0.7.5/flatly/bulmaswatch.min.css",
                    // journal: "https://unpkg.com/bulmaswatch@0.7.5/journal/bulmaswatch.min.css",
                    // litera: "https://unpkg.com/bulmaswatch@0.7.5/litera/bulmaswatch.min.css",
                    // lumen: "https://unpkg.com/bulmaswatch@0.7.5/lumen/bulmaswatch.min.css",
                    // lux: "https://unpkg.com/bulmaswatch@0.7.5/lux/bulmaswatch.min.css",
                    // materia: "https://unpkg.com/bulmaswatch@0.7.5/materia/bulmaswatch.min.css",
                    // minty: "https://unpkg.com/bulmaswatch@0.7.5/minty/bulmaswatch.min.css",
                    // nuclear: "https://unpkg.com/bulmaswatch@0.7.5/nuclear/bulmaswatch.min.css",
                    // pulse: "https://unpkg.com/bulmaswatch@0.7.5/pulse/bulmaswatch.min.css",
                    // sandstone: "https://unpkg.com/bulmaswatch@0.7.5/sandstone/bulmaswatch.min.css",
                    // simplex: "https://unpkg.com/bulmaswatch@0.7.5/simplex/bulmaswatch.min.css",
                    // slate: "https://unpkg.com/bulmaswatch@0.7.5/slate/bulmaswatch.min.css",
                    // solar: "https://unpkg.com/bulmaswatch@0.7.5/solar/bulmaswatch.min.css",
                    // spacelab: "https://unpkg.com/bulmaswatch@0.7.5/spacelab/bulmaswatch.min.css",
                    // superhero: "https://unpkg.com/bulmaswatch@0.7.5/superhero/bulmaswatch.min.css",
                    // united: "https://unpkg.com/bulmaswatch@0.7.5/united/bulmaswatch.min.css",
                    // yeti: "https://unpkg.com/bulmaswatch@0.7.5/yeti/bulmaswatch.min.css"
            },
            themesVersion: ""
            // themeHelper: new ThemeHelper(),
            // loading: true
        }
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
        // add/load themes
        // let added = Object.keys(this.themes).map(name => {
        //     return this.themeHelper.add(name, this.themes[name]);
        // });

        // Promise.all(added).then(sheets => {
        //     console.log(`${sheets.length} themes loaded`);
        //     this.loading = false;
        //     this.themeHelper.theme = "flatly";
        // });
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
