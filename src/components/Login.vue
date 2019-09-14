<template>
    <div class="container">
        <div class="logo">
            <img alt="web-logo" src="./../assets/logo-web-white.png">
        </div>
        <div class="box has-margin-left-100 has-margin-right-100">
            <h5 class="subtitle is-5">Please Login</h5>
            <div class="field">
                <p class="control has-icons-left">
                    <input class="input" type="email" v-model="user.email" placeholder="Email" @keyup.enter="focusPassword" />
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left">
                    <input class="input" ref="password" type="password" v-model="user.password" placeholder="Password" @keyup.enter="login" />
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-text-centered">
                    <button class="button is-success" @click="login">
                        Login
                    </button>
                </p>
            </div>
            <div v-show="loginResult != null" class="box">
                {{ loginResult }}
            </div>
            <div class="pageloader is-dark" v-bind:class="{'is-active': isLoading}"><span class="title">{{ loadingMessage }}</span></div>

        </div>
    </div>
</template>

<script>
import BackendService from './../services/backend-service'

export default {
    name: 'Login',
    data() {
        return {
            // user: {
            //     email: "thomas.chartron@gmail.com",
            //     password: "thomasthomas",
            // },
            loginResult: null,
            // api: {
            //     access_token: String,
            //     token_type: String,
            //     expires_in: String
            // },
            // isLoading: false,
            // loadingMessage: String
        }
    },
    computed: {
        api: {
            get() {
                return this.$store.state.api
            },
            set(value) {
                this.$store.commit('api', value)
            }
        },
        user: {
            get() {
                return this.$store.state.user
            },
            set(value) {
                this.$store.commit('user', value)
            }
        },
        isLoading() {
            return this.$store.state.isLoading
        },
        loadingMessage() {
            return this.$store.state.loadingMessage
        }
        // email: {
        //     get() {
        //         return this.$store.state.user.email
        //     },
        //     set(value) {
        //         this.$store.commit('updateEmail', value)
        //     }
        // },
        // password: {
        //     get() {
        //         return this.$store.state.user.password
        //     },
        //     set(value) {
        //         this.$store.commit('updatePassword', value)
        //     }
        // }
    },
    methods: {
        login() {
            this.$store.commit('isLoading', true)
            // this.loadingMessage = "Authenticating from API ...";
            this.$store.commit('loadingMessage', "Authenticating from API ...")
            let backend = new BackendService();
            backend.login(this.$store.state.user)
            .then((response) => {
                // console.log(response);
                // this.api = response.data
                this.$store.commit('api', response.data)
                // console.log(response.data)
                // this.loadingMessage = "Token received, Retrieving your user informations";
                this.$store.commit('loadingMessage', "Token received, Retrieving your user informations")
                backend.getUser(this.$store.state.api).then((response) => {
                    // this.user = response.data;
                    this.$store.commit('user', response.data)
                    // this.isLoading = false //Upon login we switch to watch view and load group so keep loader visible
                    // this.$router.push({ name: 'timer-page', params:{ user: this.user, api: this.api }}) //we no store everything in vuex
                    this.$router.push({ name: 'timer-page'})
                }, (error) => {
                    console.log(error)
                    this.loginResult = error;
                });
            }, (error) => {
                console.log(error);
                this.$store.commit('isLoading', false)
                this.loginResult = error;
            });
            return false;
        },
        focusPassword() {
            this.$refs.password.focus();
        }
    },

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
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-height: 150px;
    margin-bottom: 100px;
}
</style>
