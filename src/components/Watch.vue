<template>
    <div class="box">
        <div class="columns is-mobile">
            <div class="column is-two-thirds">
                <div class="field is-horizontal">
                    <div class="field-label">
                        <label class="label">Group : </label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <div class="control">
                                <div class="select is-fullwidth">
                                    <select name="groups">
                                        <option selected>Please pick a group</option>
                                        <option v-for="group in groups" value="group.id">{{ group.name }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label">
                        <label class="label">Task : </label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <div class="control">
                                <div class="select is-fullwidth">
                                    <select>
                                        <option>Business development</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="box">

                </div>
            </div>
        </div>
        <div class="control has-icons-left has-icons-right">
            <input class="input is-medium is-rounded" type="text" placeholder="/path/to/watch" v-model="pathToWatch">
            <span class="icon is-left">
                <i class="fas fa-folder-open"></i>
            </span>
        </div>
        <div class="field">
            <p class="control has-text-centered has-margin-top-20">
                <button class="button is-success has-margin-right-10" @click="watch">
                    Start watching
                </button>
                <button class="button is-warning has-margin-left-10" @click="stopWatch">
                    Stop watching
                </button>
            </p>
        </div>
        <div class="box watcher-output">
            <div class="notification is-warning" v-for="data in watcherData">
                <span style="display: block;">Event : {{ data.event }}</span>
                <span style="display: block;">Path : {{ data.path }}</span>
            </div>
        </div>
        <div class="pageloader is-dark" v-bind:class="{'is-active': isLoading}"><span class="title">Making calls to the space Cuz please be patient</span></div>
        {{ user }}
    </div>
</template>

<script>
// import BackendService from './../services/backend-service'
// const chokidar = require('chokidar');
// import chokidar from 'chokidar'
    // const ipc = require('electron').ipcRenderer
import BackendService from './../services/backend-service'

export default {
    name: 'Watch',
    props: ['user', 'api'],
    data() {
        return {
            // user: Object,
            // api: Object,
            pathToWatch: '',
            watcherData: [],
            groups: Object,
            isLoading: false
        }
    },
    methods: {
        watch() {
            this.$electron.ipcRenderer.send('ping', this.pathToWatch)
            // console.log(`${this.pathToWatch} sent from component`)
        },
        stopWatch() {
            this.$electron.ipcRenderer.send('stop')
            // console.log('stop sent')
        },
        findGroups() {
            this.isLoading = true
            let backend = new BackendService();
            backend.getGroups(this.api.access_token)
            .then((response) => {
                console.log(response)
                this.groups = response.data;
                this.isLoading = false
            }, (error) => {
                console.log(error)
            });
        }
    },
    mounted() {
        this.$electron.ipcRenderer.on('pong', (event, data) => {
            this.watcherData.push(data)
        });
        //Populates the groups select
        this.findGroups();
    }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.watcher-output {
    max-height: 400px;
    overflow: auto;
    overflow-wrap: break-word;
}
</style>
