# Tardis Electron
Project used to learn, no long maintained  

VueJS application running with electron.  
Using tardis-api to fetch tasks from database and API fetches Gitlab issues.  
Two modes available :  
    - Timer component manually runs and stops timers on issues  
    - Watch component watch filesystem events for the specified folder and automatically runs and stops timers when events occurs  


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
- [X] Put in separated component task timers summary.
- [X] Create a task description component to show attributes of task.
- [X] Create timer component.
- [X] Create watch component.
- [X] Fix disabled <a> tags still clickable replace with button
- [X] Test different scenarios between watcher and timer
- [X] Rework UI, align things, change colors
- [X] Implement theming
- [X] Save settings on local host
- [X] Implement auto token refresh
- [X] Fix / Delete watcher logs
- [X] Fix ui responsivness when app is built
- [X] Fix token renew (login request always beeing sent before any other request when token has expired and first request sent does not work)
- [X] Fix watcher when app is built
- [X] Update to electron ^6.0.10 and upgrade all dependencies
- [X] Fix token renew failing on first request
- [ ] Implement markdown parser
- [ ] Implement websocket notifications when someone assigns on task.
- [ ] Implement authentication with gitlab account
- [ ] Fix black W.E.B logo with dark theme
- [ ] Implement remember me
- [ ] Implement task completion
- [ ] Rework UI centered timer, colors, ...
- [ ] Add app icon
