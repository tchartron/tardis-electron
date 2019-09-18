# Tardis Electron

VueJS application created with `vue create` running in electron.  
Client is using Tardis API to fetch tasks from it's own database and API fetches Gitlab issues depending on selected group.  
Two modes available :  
    - Timer component which manually runs and stops timers on issues  
    - Watch component which watch events on filesystem for the specified folder and automatically runs and stops timers when events occurs  


## Installation
```shell
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
- [X] Differenciate and put in separated component task timers summary.
- [X] Create a task description component to show attributes of task.
- [X] Create timer component.
- [X] Create watch component.
- [X] Fix disabled a tag still clickable replace with button
- [ ] Implement websocket notifications when someone assigns on task.
- [ ] Test different scenarios between watcher and timer
- [ ] Rework UI, align things, change colors
- [ ] Implement dark theme
- [ ] Implement Setting page for dark theme and idle counter max value with persistence of settings
- [ ] Implement loading animation of bulma on buttons (watch button)
- [ ] Implement auto token refresh
