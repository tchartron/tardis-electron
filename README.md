# Tardis Electron

VueJS application created with `vue create` running in electron.
Client is using Tardis API to fetch tasks from it's own database and API fetches Gitlab issues depending on selected group.
Two modes available :
    - Timer component which manually runs and stops timers on issues
    - Watch component which watch events on filesystem for the specified folder and automatically runs and stops timers when events occurs  


## Installation
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

#Run electron app for development
npm run dev
#Build electron app for production
npm run prod
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/)

### TODO
- [ ] Implement websocket notifications when someone assigns on task.
- [ ] Differenciate and put in separated component task timers summary and task description.
