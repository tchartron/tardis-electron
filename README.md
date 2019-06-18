# Tardis Electron

Electron based application to track time spent on different tasks.
Watch a specified directory for changes after picking a group and a task to auto start and stop timers.

## NPM commands
```
#Install dependencies
npm install
#Compiles and hot-reloads for development
npm run serve
#Compiles and minifies for production
npm run build
#Run your tests
npm run test
#Lints and fixes files
npm run lint
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/)

### TODO
- [ ] Refactor code according to this : https://medium.com/@zitko/structuring-a-vue-project-authentication-87032e5bfe16 to implement 401 interceptor to auto refresh token
- [ ] Sets the default window size at initialization to avoid stacking things
- [ ] Add a task management component (select group and then task listing) to show / delete / edit and create tasks for a group
- [ ] Add a parameters component to edit timer behaviour (idle time, ..)
- [ ] Add touchbar buttons for Mac users
