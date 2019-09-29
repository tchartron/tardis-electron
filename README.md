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
- [ ] Fix token renew failing on first request
- [ ] Implement markdown parser
- [ ] Implement websocket notifications when someone assigns on task.
- [ ] Implement authentication with gitlab account
- [ ] Fix black W.E.B logo with dark theme
- [ ] Implement remember me
- [ ] Implement task completion
- [X] Update to electron 6.0
- [ ] Rework UI with centered timer, other colors, ...


### Crash
```shell
Process:               Electron [4526]
Path:                  /Users/USER/*/Electron.app/Contents/MacOS/Electron
Identifier:            com.github.Electron
Version:               5.0.2 (5.0.2)
Code Type:             X86-64 (Native)
Parent Process:        ??? [4525]
Responsible:           Electron [4526]
User ID:               501

Date/Time:             2019-09-21 16:19:24.321 +0200
OS Version:            Mac OS X 10.14.6 (18G95)
Report Version:        12
Bridge OS Version:     3.6 (16P6571)
Anonymous UUID:        4A668E87-31AF-D568-D267-34A1E5BD59C8

Sleep/Wake UUID:       0BD18C4A-C7BD-4EDC-90B9-8E2DE3C6C77A

Time Awake Since Boot: 8700 seconds
Time Since Wake:       310 seconds

System Integrity Protection: enabled

Crashed Thread:        30

Exception Type:        EXC_BAD_ACCESS (SIGBUS)
Exception Codes:       KERN_PROTECTION_FAILURE at 0x00000c19a6d84c68
Exception Note:        EXC_CORPSE_NOTIFY

Termination Signal:    Bus error: 10
Termination Reason:    Namespace SIGNAL, Code 0xa
Terminating Process:   exc handler [4526]

VM Regions Near 0xc19a6d84c68:
    Memory Tag 255         00000c19a1e00000-00000c19a1e80000 [  512K] rw-/rwx SM=PRV  
--> Memory Tag 255         00000c19a6d80000-00000c19a6e00000 [  512K] rw-/rwx SM=COW  
    Memory Tag 255         00000c19b3380000-00000c19b3400000 [  512K] rw-/rwx SM=PRV  

Thread 0:: CrBrowserMain  Dispatch queue: com.apple.main-thread
0   libsystem_kernel.dylib          0x00007fff5853a22a mach_msg_trap + 10
1   libsystem_kernel.dylib          0x00007fff5853a76c mach_msg + 60
2   com.apple.CoreFoundation        0x00007fff2c4ac1ee __CFRunLoopServiceMachPort + 328
3   com.apple.CoreFoundation        0x00007fff2c4ab75c __CFRunLoopRun + 1612
4   com.apple.CoreFoundation        0x00007fff2c4aaebe CFRunLoopRunSpecific + 455
5   com.apple.HIToolbox             0x00007fff2b70a1ab RunCurrentEventLoopInMode + 292
6   com.apple.HIToolbox             0x00007fff2b709ee5 ReceiveNextEventCommon + 603
7   com.apple.HIToolbox             0x00007fff2b709c76 _BlockUntilNextEventMatchingListInModeWithFilter + 64
8   com.apple.AppKit                0x00007fff29aa279d _DPSNextEvent + 1135
9   com.apple.AppKit                0x00007fff29aa148b -[NSApplication(NSEvent) _nextEventMatchingEventMask:untilDate:inMode:dequeue:] + 1361
10  com.apple.AppKit                0x00007fff29a9b5a8 -[NSApplication run] + 699
11  com.github.Electron.framework   0x000000010c63f97c 0x10a2b1000 + 37284220
12  com.github.Electron.framework   0x000000010c63e4bf 0x10a2b1000 + 37278911
13  com.github.Electron.framework   0x000000010c5b72d8 0x10a2b1000 + 36725464
14  com.github.Electron.framework   0x000000010ae0b1f3 0x10a2b1000 + 11903475
15  com.github.Electron.framework   0x000000010ae0b030 0x10a2b1000 + 11903024
16  com.github.Electron.framework   0x000000010ae0d052 0x10a2b1000 + 11911250
17  com.github.Electron.framework   0x000000010ae07f04 0x10a2b1000 + 11890436
18  com.github.Electron.framework   0x000000010c1cc51e 0x10a2b1000 + 32617758
19  com.github.Electron.framework   0x000000010c1cc191 0x10a2b1000 + 32616849
20  com.github.Electron.framework   0x000000010dd7624f 0x10a2b1000 + 61624911
21  com.github.Electron.framework   0x000000010c1cb5e4 0x10a2b1000 + 32613860
22  com.github.Electron.framework   0x000000010a2b3514 AtomMain + 84
23  com.github.Electron             0x000000010a2809b0 0x10a27f000 + 6576
24  libdyld.dylib                   0x00007fff584053d5 start + 1

Thread 1:: TaskSchedulerServiceThread
0   libsystem_kernel.dylib          0x00007fff5854078e kevent + 10
1   com.github.Electron.framework   0x000000010c645549 0x10a2b1000 + 37307721
2   com.github.Electron.framework   0x000000010c64303d 0x10a2b1000 + 37298237
3   com.github.Electron.framework   0x000000010c638cde 0x10a2b1000 + 37256414
4   com.github.Electron.framework   0x000000010c5b72d8 0x10a2b1000 + 36725464
5   com.github.Electron.framework   0x000000010c5ebcd7 0x10a2b1000 + 36941015
6   com.github.Electron.framework   0x000000010c5fc3ca 0x10a2b1000 + 37008330
7   com.github.Electron.framework   0x000000010c639047 0x10a2b1000 + 37257287
8   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
9   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
10  libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 2:: TaskSchedulerBackgroundWorker
0   libsystem_kernel.dylib          0x00007fff5853a22a mach_msg_trap + 10
1   libsystem_kernel.dylib          0x00007fff5853a76c mach_msg + 60
2   com.github.Electron.framework   0x000000010c5cbda0 0x10a2b1000 + 36810144
3   com.github.Electron.framework   0x000000010c5cbeb1 0x10a2b1000 + 36810417
4   com.github.Electron.framework   0x000000010c5e77d8 0x10a2b1000 + 36923352
5   com.github.Electron.framework   0x000000010c5e7e0e 0x10a2b1000 + 36924942
6   com.github.Electron.framework   0x000000010c5e79c4 0x10a2b1000 + 36923844
7   com.github.Electron.framework   0x000000010c639047 0x10a2b1000 + 37257287
8   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
9   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
10  libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 3:: Chrome_IOThread
0   libsystem_kernel.dylib          0x00007fff5854078e kevent + 10
1   com.github.Electron.framework   0x000000010c645549 0x10a2b1000 + 37307721
2   com.github.Electron.framework   0x000000010c64303d 0x10a2b1000 + 37298237
3   com.github.Electron.framework   0x000000010c638cde 0x10a2b1000 + 37256414
4   com.github.Electron.framework   0x000000010c5b72d8 0x10a2b1000 + 36725464
5   com.github.Electron.framework   0x000000010ae12c24 0x10a2b1000 + 11934756
6   com.github.Electron.framework   0x000000010c5fc3ca 0x10a2b1000 + 37008330
7   com.github.Electron.framework   0x000000010c639047 0x10a2b1000 + 37257287
8   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
9   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
10  libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 4:
0   libsystem_kernel.dylib          0x00007fff5854078e kevent + 10
1   com.github.Electron.framework   0x000000010f8d742f 0x10a2b1000 + 90334255
2   com.github.Electron.framework   0x000000010f8c7561 uv_run + 401
3   com.github.Electron.framework   0x000000010f845536 0x10a2b1000 + 89736502
4   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
5   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
6   libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 5:
0   libsystem_kernel.dylib          0x00007fff5853d86a __psynch_cvwait + 10
1   libsystem_pthread.dylib         0x00007fff585fc56e _pthread_cond_wait + 722
2   com.github.Electron.framework   0x000000010f8d2779 uv_cond_wait + 9
3   com.github.Electron.framework   0x000000010f845638 0x10a2b1000 + 89736760
4   com.github.Electron.framework   0x000000010f8433b8 0x10a2b1000 + 89727928
5   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
6   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
7   libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 6:
0   libsystem_kernel.dylib          0x00007fff5853d86a __psynch_cvwait + 10
1   libsystem_pthread.dylib         0x00007fff585fc56e _pthread_cond_wait + 722
2   com.github.Electron.framework   0x000000010f8d2779 uv_cond_wait + 9
3   com.github.Electron.framework   0x000000010f845638 0x10a2b1000 + 89736760
4   com.github.Electron.framework   0x000000010f8433b8 0x10a2b1000 + 89727928
5   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
6   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
7   libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 7:
0   libsystem_kernel.dylib          0x00007fff5853d86a __psynch_cvwait + 10
1   libsystem_pthread.dylib         0x00007fff585fc56e _pthread_cond_wait + 722
2   com.github.Electron.framework   0x000000010f8d2779 uv_cond_wait + 9
3   com.github.Electron.framework   0x000000010f845638 0x10a2b1000 + 89736760
4   com.github.Electron.framework   0x000000010f8433b8 0x10a2b1000 + 89727928
5   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
6   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
7   libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 8:
0   libsystem_kernel.dylib          0x00007fff5853a266 semaphore_wait_trap + 10
1   com.github.Electron.framework   0x000000010f8d2ce0 uv_sem_wait + 16
2   com.github.Electron.framework   0x000000010f88dcf2 0x10a2b1000 + 90033394
3   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
4   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
5   libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 9:: NetworkConfigWatcher
0   libsystem_kernel.dylib          0x00007fff5853a22a mach_msg_trap + 10
1   libsystem_kernel.dylib          0x00007fff5853a76c mach_msg + 60
2   com.apple.CoreFoundation        0x00007fff2c4ac1ee __CFRunLoopServiceMachPort + 328
3   com.apple.CoreFoundation        0x00007fff2c4ab75c __CFRunLoopRun + 1612
4   com.apple.CoreFoundation        0x00007fff2c4aaebe CFRunLoopRunSpecific + 455
5   com.apple.Foundation            0x00007fff2e70f32f -[NSRunLoop(NSRunLoop) runMode:beforeDate:] + 280
6   com.github.Electron.framework   0x000000010c63f691 0x10a2b1000 + 37283473
7   com.github.Electron.framework   0x000000010c63e4bf 0x10a2b1000 + 37278911
8   com.github.Electron.framework   0x000000010c5b72d8 0x10a2b1000 + 36725464
9   com.github.Electron.framework   0x000000010c5fc3ca 0x10a2b1000 + 37008330
10  com.github.Electron.framework   0x000000010c639047 0x10a2b1000 + 37257287
11  libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
12  libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
13  libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 10:: DnsConfigService
0   libsystem_kernel.dylib          0x00007fff5854078e kevent + 10
1   com.github.Electron.framework   0x000000010c645549 0x10a2b1000 + 37307721
2   com.github.Electron.framework   0x000000010c64303d 0x10a2b1000 + 37298237
3   com.github.Electron.framework   0x000000010c638cf7 0x10a2b1000 + 37256439
4   com.github.Electron.framework   0x000000010c5b72d8 0x10a2b1000 + 36725464
5   com.github.Electron.framework   0x000000010c5fc3ca 0x10a2b1000 + 37008330
6   com.github.Electron.framework   0x000000010c639047 0x10a2b1000 + 37257287
7   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
8   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
9   libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 11:: CrShutdownDetector
0   libsystem_kernel.dylib          0x00007fff5853bef2 read + 10
1   com.github.Electron.framework   0x000000010c49b94f 0x10a2b1000 + 35563855
2   com.github.Electron.framework   0x000000010c639047 0x10a2b1000 + 37257287
3   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
4   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
5   libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 12:: NetworkConfigWatcher
0   libsystem_kernel.dylib          0x00007fff5853a22a mach_msg_trap + 10
1   libsystem_kernel.dylib          0x00007fff5853a76c mach_msg + 60
2   com.apple.CoreFoundation        0x00007fff2c4ac1ee __CFRunLoopServiceMachPort + 328
3   com.apple.CoreFoundation        0x00007fff2c4ab75c __CFRunLoopRun + 1612
4   com.apple.CoreFoundation        0x00007fff2c4aaebe CFRunLoopRunSpecific + 455
5   com.apple.Foundation            0x00007fff2e70f32f -[NSRunLoop(NSRunLoop) runMode:beforeDate:] + 280
6   com.github.Electron.framework   0x000000010c63f691 0x10a2b1000 + 37283473
7   com.github.Electron.framework   0x000000010c63e4bf 0x10a2b1000 + 37278911
8   com.github.Electron.framework   0x000000010c5b72d8 0x10a2b1000 + 36725464
9   com.github.Electron.framework   0x000000010c5fc3ca 0x10a2b1000 + 37008330
10  com.github.Electron.framework   0x000000010c639047 0x10a2b1000 + 37257287
11  libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
12  libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
13  libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 13:: TaskSchedulerForegroundBlockingWorker
0   libsystem_kernel.dylib          0x00007fff5853a22a mach_msg_trap + 10
1   libsystem_kernel.dylib          0x00007fff5853a76c mach_msg + 60
2   com.github.Electron.framework   0x000000010c5cbda0 0x10a2b1000 + 36810144
3   com.github.Electron.framework   0x000000010c5cbeb1 0x10a2b1000 + 36810417
4   com.github.Electron.framework   0x000000010c5e77d8 0x10a2b1000 + 36923352
5   com.github.Electron.framework   0x000000010c5e7e0e 0x10a2b1000 + 36924942
6   com.github.Electron.framework   0x000000010c5e7a54 0x10a2b1000 + 36923988
7   com.github.Electron.framework   0x000000010c639047 0x10a2b1000 + 37257287
8   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
9   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
10  libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 14:: TaskSchedulerBackgroundBlockingWorker
0   libsystem_kernel.dylib          0x00007fff5853a22a mach_msg_trap + 10
1   libsystem_kernel.dylib          0x00007fff5853a76c mach_msg + 60
2   com.github.Electron.framework   0x000000010c5cbda0 0x10a2b1000 + 36810144
3   com.github.Electron.framework   0x000000010c5cbeb1 0x10a2b1000 + 36810417
4   com.github.Electron.framework   0x000000010c5e77d8 0x10a2b1000 + 36923352
5   com.github.Electron.framework   0x000000010c5e7e0e 0x10a2b1000 + 36924942
6   com.github.Electron.framework   0x000000010c5e79c4 0x10a2b1000 + 36923844
7   com.github.Electron.framework   0x000000010c639047 0x10a2b1000 + 37257287
8   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
9   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
10  libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 15:: CompositorTileWorker1/45059
0   libsystem_kernel.dylib          0x00007fff5853d86a __psynch_cvwait + 10
1   libsystem_pthread.dylib         0x00007fff585fc56e _pthread_cond_wait + 722
2   com.github.Electron.framework   0x000000010c630345 0x10a2b1000 + 37221189
3   com.github.Electron.framework   0x000000010d6a97e8 0x10a2b1000 + 54495208
4   com.github.Electron.framework   0x000000010c5fbc72 0x10a2b1000 + 37006450
5   com.github.Electron.framework   0x000000010c639047 0x10a2b1000 + 37257287
6   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
7   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
8   libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 16:: AudioThread
0   libsystem_kernel.dylib          0x00007fff5853a22a mach_msg_trap + 10
1   libsystem_kernel.dylib          0x00007fff5853a76c mach_msg + 60
2   com.github.Electron.framework   0x000000010c5cbda0 0x10a2b1000 + 36810144
3   com.github.Electron.framework   0x000000010c5b534f 0x10a2b1000 + 36717391
4   com.github.Electron.framework   0x000000010c59931d 0x10a2b1000 + 36602653
5   com.github.Electron.framework   0x000000010c5b72d8 0x10a2b1000 + 36725464
6   com.github.Electron.framework   0x000000010c5fc3ca 0x10a2b1000 + 37008330
7   com.github.Electron.framework   0x000000010c639047 0x10a2b1000 + 37257287
8   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
9   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
10  libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 17:: TaskSchedulerSingleThreadForegroundBlocking0
0   libsystem_kernel.dylib          0x00007fff5853a22a mach_msg_trap + 10
1   libsystem_kernel.dylib          0x00007fff5853a76c mach_msg + 60
2   com.github.Electron.framework   0x000000010c5cbda0 0x10a2b1000 + 36810144
3   com.github.Electron.framework   0x000000010c5b534f 0x10a2b1000 + 36717391
4   com.github.Electron.framework   0x000000010c5e77ca 0x10a2b1000 + 36923338
5   com.github.Electron.framework   0x000000010c5e7e0e 0x10a2b1000 + 36924942
6   com.github.Electron.framework   0x000000010c5e7ab4 0x10a2b1000 + 36924084
7   com.github.Electron.framework   0x000000010c639047 0x10a2b1000 + 37257287
8   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
9   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
10  libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 18:
0   libsystem_kernel.dylib          0x00007fff5854161a __select + 10
1   com.github.Electron.framework   0x000000010c527ca2 0x10a2b1000 + 36138146
2   com.github.Electron.framework   0x000000010c52774f 0x10a2b1000 + 36136783
3   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
4   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
5   libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 19:: NetworkConfigWatcher
0   libsystem_kernel.dylib          0x00007fff5853a22a mach_msg_trap + 10
1   libsystem_kernel.dylib          0x00007fff5853a76c mach_msg + 60
2   com.apple.CoreFoundation        0x00007fff2c4ac1ee __CFRunLoopServiceMachPort + 328
3   com.apple.CoreFoundation        0x00007fff2c4ab75c __CFRunLoopRun + 1612
4   com.apple.CoreFoundation        0x00007fff2c4aaebe CFRunLoopRunSpecific + 455
5   com.apple.Foundation            0x00007fff2e70f32f -[NSRunLoop(NSRunLoop) runMode:beforeDate:] + 280
6   com.github.Electron.framework   0x000000010c63f691 0x10a2b1000 + 37283473
7   com.github.Electron.framework   0x000000010c63e4bf 0x10a2b1000 + 37278911
8   com.github.Electron.framework   0x000000010c5b72d8 0x10a2b1000 + 36725464
9   com.github.Electron.framework   0x000000010c5fc3ca 0x10a2b1000 + 37008330
10  com.github.Electron.framework   0x000000010c639047 0x10a2b1000 + 37257287
11  libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
12  libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
13  libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 20:: CacheThread_BlockFile
0   libsystem_kernel.dylib          0x00007fff5854078e kevent + 10
1   com.github.Electron.framework   0x000000010c645549 0x10a2b1000 + 37307721
2   com.github.Electron.framework   0x000000010c64303d 0x10a2b1000 + 37298237
3   com.github.Electron.framework   0x000000010c638cf7 0x10a2b1000 + 37256439
4   com.github.Electron.framework   0x000000010c5b72d8 0x10a2b1000 + 36725464
5   com.github.Electron.framework   0x000000010c5fc3ca 0x10a2b1000 + 37008330
6   com.github.Electron.framework   0x000000010c639047 0x10a2b1000 + 37257287
7   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
8   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
9   libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 21:: com.apple.NSEventThread
0   libsystem_kernel.dylib          0x00007fff5853a22a mach_msg_trap + 10
1   libsystem_kernel.dylib          0x00007fff5853a76c mach_msg + 60
2   com.apple.CoreFoundation        0x00007fff2c4ac1ee __CFRunLoopServiceMachPort + 328
3   com.apple.CoreFoundation        0x00007fff2c4ab75c __CFRunLoopRun + 1612
4   com.apple.CoreFoundation        0x00007fff2c4aaebe CFRunLoopRunSpecific + 455
5   com.apple.AppKit                0x00007fff29aaa4c2 _NSEventThread + 175
6   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
7   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
8   libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 22:: TaskSchedulerSingleThreadSharedBackgroundBlocking1
0   libsystem_kernel.dylib          0x00007fff5853a22a mach_msg_trap + 10
1   libsystem_kernel.dylib          0x00007fff5853a76c mach_msg + 60
2   com.github.Electron.framework   0x000000010c5cbda0 0x10a2b1000 + 36810144
3   com.github.Electron.framework   0x000000010c5b534f 0x10a2b1000 + 36717391
4   com.github.Electron.framework   0x000000010c5e77ca 0x10a2b1000 + 36923338
5   com.github.Electron.framework   0x000000010c5e7b42 0x10a2b1000 + 36924226
6   com.github.Electron.framework   0x000000010c5e79f4 0x10a2b1000 + 36923892
7   com.github.Electron.framework   0x000000010c639047 0x10a2b1000 + 37257287
8   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
9   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
10  libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 23:: TaskSchedulerForegroundWorker
0   libsystem_kernel.dylib          0x00007fff5853a22a mach_msg_trap + 10
1   libsystem_kernel.dylib          0x00007fff5853a76c mach_msg + 60
2   com.github.Electron.framework   0x000000010c5cbda0 0x10a2b1000 + 36810144
3   com.github.Electron.framework   0x000000010c5cbeb1 0x10a2b1000 + 36810417
4   com.github.Electron.framework   0x000000010c5e77d8 0x10a2b1000 + 36923352
5   com.github.Electron.framework   0x000000010c5e7e0e 0x10a2b1000 + 36924942
6   com.github.Electron.framework   0x000000010c5e7a54 0x10a2b1000 + 36923988
7   com.github.Electron.framework   0x000000010c639047 0x10a2b1000 + 37257287
8   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
9   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
10  libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 24:: TaskSchedulerSingleThreadSharedForegroundBlocking2
0   libsystem_kernel.dylib          0x00007fff5853a22a mach_msg_trap + 10
1   libsystem_kernel.dylib          0x00007fff5853a76c mach_msg + 60
2   com.github.Electron.framework   0x000000010c5cbda0 0x10a2b1000 + 36810144
3   com.github.Electron.framework   0x000000010c5b534f 0x10a2b1000 + 36717391
4   com.github.Electron.framework   0x000000010c5e77ca 0x10a2b1000 + 36923338
5   com.github.Electron.framework   0x000000010c5e7b42 0x10a2b1000 + 36924226
6   com.github.Electron.framework   0x000000010c5e7a84 0x10a2b1000 + 36924036
7   com.github.Electron.framework   0x000000010c639047 0x10a2b1000 + 37257287
8   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
9   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
10  libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 25:: TaskSchedulerForegroundBlockingWorker
0   libsystem_kernel.dylib          0x00007fff5853a22a mach_msg_trap + 10
1   libsystem_kernel.dylib          0x00007fff5853a76c mach_msg + 60
2   com.github.Electron.framework   0x000000010c5cbda0 0x10a2b1000 + 36810144
3   com.github.Electron.framework   0x000000010c5cbeb1 0x10a2b1000 + 36810417
4   com.github.Electron.framework   0x000000010c5e77d8 0x10a2b1000 + 36923352
5   com.github.Electron.framework   0x000000010c5e7e0e 0x10a2b1000 + 36924942
6   com.github.Electron.framework   0x000000010c5e7a54 0x10a2b1000 + 36923988
7   com.github.Electron.framework   0x000000010c639047 0x10a2b1000 + 37257287
8   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
9   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
10  libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 26:
0   libsystem_kernel.dylib          0x00007fff5853d86a __psynch_cvwait + 10
1   libsystem_pthread.dylib         0x00007fff585fc56e _pthread_cond_wait + 722
2   com.github.Electron.framework   0x000000010f8d2779 uv_cond_wait + 9
3   com.github.Electron.framework   0x000000010f8c35c9 0x10a2b1000 + 90252745
4   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
5   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
6   libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 27:
0   libsystem_kernel.dylib          0x00007fff5853d86a __psynch_cvwait + 10
1   libsystem_pthread.dylib         0x00007fff585fc56e _pthread_cond_wait + 722
2   com.github.Electron.framework   0x000000010f8d2779 uv_cond_wait + 9
3   com.github.Electron.framework   0x000000010f8c35c9 0x10a2b1000 + 90252745
4   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
5   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
6   libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 28:
0   libsystem_kernel.dylib          0x00007fff5853d86a __psynch_cvwait + 10
1   libsystem_pthread.dylib         0x00007fff585fc56e _pthread_cond_wait + 722
2   com.github.Electron.framework   0x000000010f8d2779 uv_cond_wait + 9
3   com.github.Electron.framework   0x000000010f8c35c9 0x10a2b1000 + 90252745
4   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
5   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
6   libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 29:
0   libsystem_kernel.dylib          0x00007fff5853d86a __psynch_cvwait + 10
1   libsystem_pthread.dylib         0x00007fff585fc56e _pthread_cond_wait + 722
2   com.github.Electron.framework   0x000000010f8d2779 uv_cond_wait + 9
3   com.github.Electron.framework   0x000000010f8c35c9 0x10a2b1000 + 90252745
4   libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
5   libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
6   libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 30 Crashed:
0   ???                             0x00000c19a6d84c68 0 + 13304312908904
1   com.apple.CoreServices.FSEvents 0x00007fff2da6750a _Xcallback_rpc + 231
2   com.apple.CoreServices.FSEvents 0x00007fff2da67406 FSEventsD2F_server + 55
3   com.apple.CoreServices.FSEvents 0x00007fff2da69cbf FSEventsClientProcessMessageCallback + 43
4   com.apple.CoreFoundation        0x00007fff2c4c3c99 __CFMachPortPerform + 246
5   com.apple.CoreFoundation        0x00007fff2c4c3b97 __CFRUNLOOP_IS_CALLING_OUT_TO_A_SOURCE1_PERFORM_FUNCTION__ + 41
6   com.apple.CoreFoundation        0x00007fff2c4c3af5 __CFRunLoopDoSource1 + 527
7   com.apple.CoreFoundation        0x00007fff2c4abaec __CFRunLoopRun + 2524
8   com.apple.CoreFoundation        0x00007fff2c4aaebe CFRunLoopRunSpecific + 455
9   com.apple.CoreFoundation        0x00007fff2c4aacd2 CFRunLoopRun + 40
10  fsevents.node                   0x00000001156a9236 fse_run_loop + 87
11  libsystem_pthread.dylib         0x00007fff585f92eb _pthread_body + 126
12  libsystem_pthread.dylib         0x00007fff585fc249 _pthread_start + 66
13  libsystem_pthread.dylib         0x00007fff585f840d thread_start + 13

Thread 31:
0   libsystem_pthread.dylib         0x00007fff585f83f0 start_wqthread + 0

Thread 30 crashed with X86 Thread State (64-bit):
  rax: 0x00007fbd7d005000  rbx: 0x00007fbd7f9fbd20  rcx: 0x00000c19a6d84c68  rdx: 0x00007fbd7d005000
  rdi: 0x0000000000000000  rsi: 0x0000000000000001  rbp: 0x0000700004a37fc0  rsp: 0x0000700004a37f08
   r8: 0x0000000000000000   r9: 0x0000000000000001  r10: 0x00007fff87786618  r11: 0x00000000005e7f77
  r12: 0x00007fbd7ca1cdd0  r13: 0x0000000000000000  r14: 0x0000000000000001  r15: 0x0000000000000000
  rip: 0x00000c19a6d84c68  rfl: 0x0000000000010206  cr2: 0x00000c19a6d84c68
  
Logical CPU:     5
Error Code:      0x00000015
Trap Number:     14


Binary Images:
       0x10a27f000 -        0x10a2a7ff7 +com.github.Electron (5.0.2 - 5.0.2) <3788637B-0A53-3737-B3B6-C827ABF3E314> /Users/USER/*/Electron.app/Contents/MacOS/Electron
       0x10a2b1000 -        0x110462f87 +com.github.Electron.framework (5.0.2) <8BB01EDC-C104-3D1F-B631-6E8B5ADE73B0> /Users/USER/*/Electron.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Electron Framework
       0x110ab4000 -        0x110acffff +com.github.Squirrel (1.0 - 1) <E4398068-33D3-3A00-9DBE-5ACC9B022501> /Users/USER/*/Electron.app/Contents/Frameworks/Squirrel.framework/Versions/A/Squirrel
       0x110af2000 -        0x110b55ff7 +org.reactivecocoa.ReactiveCocoa (1.0 - 1) <701B20DE-3ADD-3643-B52A-E05744C30DB3> /Users/USER/*/Electron.app/Contents/Frameworks/ReactiveCocoa.framework/Versions/A/ReactiveCocoa
       0x110bc8000 -        0x110bdcfff +org.mantle.Mantle (1.0 - ???) <31915DD6-48E6-3706-A076-C9D4CE17F4F6> /Users/USER/*/Electron.app/Contents/Frameworks/Mantle.framework/Versions/A/Mantle
       0x110bf0000 -        0x110e71fe7 +libffmpeg.dylib (0) <5AB84A10-1627-3C9C-8671-065B476B33F2> /Users/USER/*/Electron.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Libraries/libffmpeg.dylib
       0x1155e5000 -        0x1155e8047  libobjc-trampolines.dylib (756.2) <5795A048-3940-3801-90CE-33D1B1AF81F4> /usr/lib/libobjc-trampolines.dylib
       0x1156a7000 -        0x1156aafff +fsevents.node (0) <36F41961-A3A0-33D7-9921-1B64243E6EBE> /Users/USER/*/fsevents.node
       0x115766000 -        0x1157d070f  dyld (655.1.1) <DFC3C4AF-6F97-3B34-B18D-7DCB23F2A83A> /usr/lib/dyld
    0x7fff20bd2000 -     0x7fff20f2bfff  com.apple.RawCamera.bundle (8.15.0 - 1031.4.4) <AB6E8A8F-0BFE-37EE-A135-44ABA4FCB559> /System/Library/CoreServices/RawCamera.bundle/Contents/MacOS/RawCamera
    0x7fff25a15000 -     0x7fff25d47fff  com.apple.driver.AppleIntelKBLGraphicsMTLDriver (12.10.12 - 12.1.0) <F44A2087-008C-30CB-9E33-A94DFF197E68> /System/Library/Extensions/AppleIntelKBLGraphicsMTLDriver.bundle/Contents/MacOS/AppleIntelKBLGraphicsMTLDriver
    0x7fff284aa000 -     0x7fff28686ffb  com.apple.avfoundation (2.0 - 1550.4) <5854207B-6106-3DA4-80B6-36C42D042F26> /System/Library/Frameworks/AVFoundation.framework/Versions/A/AVFoundation
    0x7fff28687000 -     0x7fff2874cfff  com.apple.audio.AVFAudio (1.0 - ???) <D454A339-2FC6-3EF6-992F-D676046612DB> /System/Library/Frameworks/AVFoundation.framework/Versions/A/Frameworks/AVFAudio.framework/Versions/A/AVFAudio
    0x7fff28854000 -     0x7fff28854fff  com.apple.Accelerate (1.11 - Accelerate 1.11) <762942CB-CFC9-3A0C-9645-A56523A06426> /System/Library/Frameworks/Accelerate.framework/Versions/A/Accelerate
    0x7fff28855000 -     0x7fff2886bff7  libCGInterfaces.dylib (506.22) <1B6C92D9-F4B8-37BA-9635-94C4A56098CE> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vImage.framework/Versions/A/Libraries/libCGInterfaces.dylib
    0x7fff2886c000 -     0x7fff28f05fef  com.apple.vImage (8.1 - ???) <53FA3611-894E-3158-A654-FBD2F70998FE> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vImage.framework/Versions/A/vImage
    0x7fff28f06000 -     0x7fff2917fff3  libBLAS.dylib (1243.200.4) <417CA0FC-B6CB-3FB3-ACBC-8914E3F62D20> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libBLAS.dylib
    0x7fff29180000 -     0x7fff291f2ffb  libBNNS.dylib (38.250.1) <538D12A2-9B9D-3E22-9896-F90F6E69C06E> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libBNNS.dylib
    0x7fff291f3000 -     0x7fff2959cff3  libLAPACK.dylib (1243.200.4) <92175DF4-863A-3780-909A-A3E5C410F2E9> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libLAPACK.dylib
    0x7fff2959d000 -     0x7fff295b2feb  libLinearAlgebra.dylib (1243.200.4) <CB671EE6-DEA1-391C-9B2B-AA09A46B4D7A> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libLinearAlgebra.dylib
    0x7fff295b3000 -     0x7fff295b8ff3  libQuadrature.dylib (3.200.2) <1BAE7E22-2862-379F-B334-A3756067730F> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libQuadrature.dylib
    0x7fff295b9000 -     0x7fff29635ff3  libSparse.dylib (79.200.5) <E78B33D3-672A-3C53-B512-D3DDB2E9AC8D> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libSparse.dylib
    0x7fff29636000 -     0x7fff29649fe3  libSparseBLAS.dylib (1243.200.4) <E9243341-DB77-37C1-97C5-3DFA00DD70FA> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libSparseBLAS.dylib
    0x7fff2964a000 -     0x7fff29831ff7  libvDSP.dylib (671.250.4) <7B110627-A9C1-3FB7-A077-0C7741BA25D8> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libvDSP.dylib
    0x7fff29832000 -     0x7fff298e5ff7  libvMisc.dylib (671.250.4) <D5BA4812-BFFC-3CD0-B382-905CD8555DA6> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libvMisc.dylib
    0x7fff298e6000 -     0x7fff298e6fff  com.apple.Accelerate.vecLib (3.11 - vecLib 3.11) <74288115-EF61-30B6-843F-0593B31D4929> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/vecLib
    0x7fff29a88000 -     0x7fff2a83dffb  com.apple.AppKit (6.9 - 1671.60.107) <2F7E5984-E89A-3451-A3DF-FAAA509CF884> /System/Library/Frameworks/AppKit.framework/Versions/C/AppKit
    0x7fff2a88f000 -     0x7fff2a88ffff  com.apple.ApplicationServices (50.1 - 50.1) <84097DEB-E2FC-3901-8DD7-A670EA2274E0> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/ApplicationServices
    0x7fff2a890000 -     0x7fff2a8fbfff  com.apple.ApplicationServices.ATS (377 - 453.11.2.2) <A258DA73-114B-3102-A056-4AAAD3CEB9DD> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/ATS.framework/Versions/A/ATS
    0x7fff2a994000 -     0x7fff2aaabfff  libFontParser.dylib (228.6.2.3) <3602D55B-3B9E-3B3A-A814-08C1244A8AE4> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/ATS.framework/Versions/A/Resources/libFontParser.dylib
    0x7fff2aaac000 -     0x7fff2aaeefff  libFontRegistry.dylib (228.12.2.3) <2A56347B-2809-3407-A8B4-2AB88E484062> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/ATS.framework/Versions/A/Resources/libFontRegistry.dylib
    0x7fff2ab48000 -     0x7fff2ab7afff  libTrueTypeScaler.dylib (228.6.2.3) <7E4C5D9C-51AF-3EC1-8FA5-11CD4BEE477A> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/ATS.framework/Versions/A/Resources/libTrueTypeScaler.dylib
    0x7fff2abdf000 -     0x7fff2abe3ff3  com.apple.ColorSyncLegacy (4.13.0 - 1) <C0D9E23C-ABA0-39DE-A4EB-5A41C5499056> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/ColorSyncLegacy.framework/Versions/A/ColorSyncLegacy
    0x7fff2ac7e000 -     0x7fff2acd0ff7  com.apple.HIServices (1.22 - 628) <2BE461FF-80B9-30D3-A574-AED5724B1C1B> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/HIServices.framework/Versions/A/HIServices
    0x7fff2acd1000 -     0x7fff2ace0fff  com.apple.LangAnalysis (1.7.0 - 1.7.0) <F5617A2A-FEA6-3832-B5BA-C2111B98786F> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/LangAnalysis.framework/Versions/A/LangAnalysis
    0x7fff2ace1000 -     0x7fff2ad2aff7  com.apple.print.framework.PrintCore (14.2 - 503.8) <57C2FE32-0E74-3079-B626-C2D52F2D2717> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/PrintCore.framework/Versions/A/PrintCore
    0x7fff2ad2b000 -     0x7fff2ad64ff7  com.apple.QD (3.12 - 407.2) <28C7D39F-59C9-3314-BECC-67045487229C> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/QD.framework/Versions/A/QD
    0x7fff2ad65000 -     0x7fff2ad71fff  com.apple.speech.synthesis.framework (8.1.3 - 8.1.3) <5E7B9BD4-122B-3012-A044-3259C97E7509> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/SpeechSynthesis.framework/Versions/A/SpeechSynthesis
    0x7fff2ad72000 -     0x7fff2afe9ff7  com.apple.audio.toolbox.AudioToolbox (1.14 - 1.14) <04F482F1-E1C1-3955-8A6C-8AA152AA06F3> /System/Library/Frameworks/AudioToolbox.framework/Versions/A/AudioToolbox
    0x7fff2afeb000 -     0x7fff2afebfff  com.apple.audio.units.AudioUnit (1.14 - 1.14) <ABC54269-002D-310D-9654-46CF960F863E> /System/Library/Frameworks/AudioUnit.framework/Versions/A/AudioUnit
    0x7fff2b344000 -     0x7fff2b6e5fff  com.apple.CFNetwork (978.0.7 - 978.0.7) <B2133D0D-1399-3F17-80F0-313E3A241C89> /System/Library/Frameworks/CFNetwork.framework/Versions/A/CFNetwork
    0x7fff2b6fa000 -     0x7fff2b6fafff  com.apple.Carbon (158 - 158) <56AD06AA-7BB4-3F0B-AEF7-9768D0BC1C98> /System/Library/Frameworks/Carbon.framework/Versions/A/Carbon
    0x7fff2b6fb000 -     0x7fff2b6feffb  com.apple.CommonPanels (1.2.6 - 98) <1CD6D56D-8EC7-3528-8CBC-FC69533519B5> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/CommonPanels.framework/Versions/A/CommonPanels
    0x7fff2b6ff000 -     0x7fff2b9f6fff  com.apple.HIToolbox (2.1.1 - 918.7) <13F69D4C-D19F-3E09-9231-1978D783A556> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/HIToolbox.framework/Versions/A/HIToolbox
    0x7fff2b9f7000 -     0x7fff2b9faff3  com.apple.help (1.3.8 - 66) <A08517EB-8958-36C9-AEE0-1A8FEEACBE3F> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/Help.framework/Versions/A/Help
    0x7fff2b9fb000 -     0x7fff2ba00ff7  com.apple.ImageCapture (9.0 - 1534.2) <DB063E87-ED8F-3E4E-A7E2-A6B45FA73EF7> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/ImageCapture.framework/Versions/A/ImageCapture
    0x7fff2ba01000 -     0x7fff2ba96ff3  com.apple.ink.framework (10.9 - 225) <7C7E9483-2E91-3DD3-B1E0-C238F42CA0DD> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/Ink.framework/Versions/A/Ink
    0x7fff2ba97000 -     0x7fff2baafff7  com.apple.openscripting (1.7 - 179.1) <9B8C1ECC-5864-3E21-9149-863E884EA25C> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/OpenScripting.framework/Versions/A/OpenScripting
    0x7fff2bacf000 -     0x7fff2bad0ff7  com.apple.print.framework.Print (14.2 - 267.4) <A7A9D2A0-D4E0-35EF-A0F7-50521F707C33> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/Print.framework/Versions/A/Print
    0x7fff2bad1000 -     0x7fff2bad3ff7  com.apple.securityhi (9.0 - 55006) <05717F77-7A7B-37E6-AB3E-03F063E9095B> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/SecurityHI.framework/Versions/A/SecurityHI
    0x7fff2bad4000 -     0x7fff2badaff7  com.apple.speech.recognition.framework (6.0.3 - 6.0.3) <3CC050FB-EBCB-3087-8EA5-F378C8F99217> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/SpeechRecognition.framework/Versions/A/SpeechRecognition
    0x7fff2bbfc000 -     0x7fff2bbfcfff  com.apple.Cocoa (6.11 - 23) <8D092DD2-0CA4-34C9-872C-8BBFAE1995A4> /System/Library/Frameworks/Cocoa.framework/Versions/A/Cocoa
    0x7fff2bc0a000 -     0x7fff2bd59ff7  com.apple.ColorSync (4.13.0 - 3345.6) <31648BB6-7239-3D0E-81B1-BCF51FEF557F> /System/Library/Frameworks/ColorSync.framework/Versions/A/ColorSync
    0x7fff2bee5000 -     0x7fff2bf6bfff  com.apple.audio.CoreAudio (4.3.0 - 4.3.0) <1E8E64E6-0E58-375A-97F7-07CB4EE181AC> /System/Library/Frameworks/CoreAudio.framework/Versions/A/CoreAudio
    0x7fff2bfcf000 -     0x7fff2bff9ffb  com.apple.CoreBluetooth (1.0 - 1) <A73F1709-DD18-3052-9F22-C0015278834B> /System/Library/Frameworks/CoreBluetooth.framework/Versions/A/CoreBluetooth
    0x7fff2bffa000 -     0x7fff2c37ffef  com.apple.CoreData (120 - 866.6) <132CB39B-8D58-30FA-B8AD-49BFFF34B293> /System/Library/Frameworks/CoreData.framework/Versions/A/CoreData
    0x7fff2c380000 -     0x7fff2c470ff7  com.apple.CoreDisplay (101.3 - 110.18) <0EB2A997-FCAD-3D17-B140-9829961E5327> /System/Library/Frameworks/CoreDisplay.framework/Versions/A/CoreDisplay
    0x7fff2c471000 -     0x7fff2c8b5fe7  com.apple.CoreFoundation (6.9 - 1575.19) <B2850F42-CE01-3156-B121-FD4777290C8F> /System/Library/Frameworks/CoreFoundation.framework/Versions/A/CoreFoundation
    0x7fff2c8b7000 -     0x7fff2cf46fff  com.apple.CoreGraphics (2.0 - 1265.9) <BC95B558-EF77-3A57-A0BC-11606C778991> /System/Library/Frameworks/CoreGraphics.framework/Versions/A/CoreGraphics
    0x7fff2cf48000 -     0x7fff2d268fff  com.apple.CoreImage (14.4.0 - 750.0.140) <11026E39-D2FF-3CF6-8ACE-7BA293F9853E> /System/Library/Frameworks/CoreImage.framework/Versions/A/CoreImage
    0x7fff2d2e2000 -     0x7fff2d338ff7  com.apple.audio.midi.CoreMIDI (1.10 - 88) <015D7611-2CC6-3B40-9639-43FB80222239> /System/Library/Frameworks/CoreMIDI.framework/Versions/A/CoreMIDI
    0x7fff2d33b000 -     0x7fff2d564fff  com.apple.CoreML (1.0 - 1) <9EC1FED2-BA47-307B-A326-43C4D05166E7> /System/Library/Frameworks/CoreML.framework/Versions/A/CoreML
    0x7fff2d565000 -     0x7fff2d669fff  com.apple.CoreMedia (1.0 - 2290.13) <A739B93D-23C2-3A34-8D61-6AC924B9634F> /System/Library/Frameworks/CoreMedia.framework/Versions/A/CoreMedia
    0x7fff2d66a000 -     0x7fff2d6c5fff  com.apple.CoreMediaIO (900.0 - 5050.1) <63944D63-D138-3774-BAB4-A95679469A43> /System/Library/Frameworks/CoreMediaIO.framework/Versions/A/CoreMediaIO
    0x7fff2d6c6000 -     0x7fff2d6c6fff  com.apple.CoreServices (946 - 946) <6EC9F377-EBD8-3358-92D1-6586F6F1E8E9> /System/Library/Frameworks/CoreServices.framework/Versions/A/CoreServices
    0x7fff2d6c7000 -     0x7fff2d743ff7  com.apple.AE (773 - 773) <55AE7C9E-27C3-30E9-A047-3B92A6FD53B4> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/AE.framework/Versions/A/AE
    0x7fff2d744000 -     0x7fff2da1bfff  com.apple.CoreServices.CarbonCore (1178.33 - 1178.33) <CB87F0C7-2CD6-3983-8E32-B6A2EC925352> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/CarbonCore.framework/Versions/A/CarbonCore
    0x7fff2da1c000 -     0x7fff2da64ff7  com.apple.DictionaryServices (1.2 - 284.16.4) <746EB200-DC51-30AE-9CBC-608A7B4CC8DA> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/DictionaryServices.framework/Versions/A/DictionaryServices
    0x7fff2da65000 -     0x7fff2da6dffb  com.apple.CoreServices.FSEvents (1239.200.12 - 1239.200.12) <8406D379-8D33-3611-861B-7ABD26DB50D2> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/FSEvents.framework/Versions/A/FSEvents
    0x7fff2da6e000 -     0x7fff2dc1fff7  com.apple.LaunchServices (946 - 946) <A0C91634-9410-38E8-BC11-7A5A369E6BA5> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/LaunchServices.framework/Versions/A/LaunchServices
    0x7fff2dc20000 -     0x7fff2dcbeff7  com.apple.Metadata (10.7.0 - 1191.57) <BFFAED00-2560-318A-BB8F-4E7E5123EC61> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/Metadata.framework/Versions/A/Metadata
    0x7fff2dcbf000 -     0x7fff2dd09ff7  com.apple.CoreServices.OSServices (946 - 946) <20C4EEF8-D5AC-39A0-9B4A-78F88E3EFBCC> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/OSServices.framework/Versions/A/OSServices
    0x7fff2dd0a000 -     0x7fff2dd71ff7  com.apple.SearchKit (1.4.0 - 1.4.0) <DA08AA6F-A6F1-36C0-87F4-E26294E51A3A> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/SearchKit.framework/Versions/A/SearchKit
    0x7fff2dd72000 -     0x7fff2dd93ff3  com.apple.coreservices.SharedFileList (71.28 - 71.28) <487A8464-729E-305A-B5D1-E3FE8EB9CFC5> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/SharedFileList.framework/Versions/A/SharedFileList
    0x7fff2e09e000 -     0x7fff2e200ff3  com.apple.CoreText (352.0 - 584.26.3.2) <59919B0C-CBD5-3877-8D6F-D6048F1E5F42> /System/Library/Frameworks/CoreText.framework/Versions/A/CoreText
    0x7fff2e201000 -     0x7fff2e241ff3  com.apple.CoreVideo (1.8 - 281.4) <10CF8E52-07E3-382B-8091-2CEEEFFA69B4> /System/Library/Frameworks/CoreVideo.framework/Versions/A/CoreVideo
    0x7fff2e242000 -     0x7fff2e2d1fff  com.apple.framework.CoreWLAN (13.0 - 1375.2) <BF4B29F7-FBC8-3299-98E8-C3F8C04B7C92> /System/Library/Frameworks/CoreWLAN.framework/Versions/A/CoreWLAN
    0x7fff2e454000 -     0x7fff2e502fff  com.apple.DiscRecording (9.0.3 - 9030.4.5) <D7A28B57-C025-3D44-BB17-82243B7B91BC> /System/Library/Frameworks/DiscRecording.framework/Versions/A/DiscRecording
    0x7fff2e528000 -     0x7fff2e52dffb  com.apple.DiskArbitration (2.7 - 2.7) <F481F2C0-884E-3265-8111-ABBEC93F0920> /System/Library/Frameworks/DiskArbitration.framework/Versions/A/DiskArbitration
    0x7fff2e6f0000 -     0x7fff2e6f2ff3  com.apple.ForceFeedback (1.0.6 - 1.0.6) <205B0C3E-4E8D-3347-A993-469F06ABBFF9> /System/Library/Frameworks/ForceFeedback.framework/Versions/A/ForceFeedback
    0x7fff2e6f3000 -     0x7fff2eaa0ffb  com.apple.Foundation (6.9 - 1575.19) <A85BF812-B784-36B9-89BB-E29772B0708C> /System/Library/Frameworks/Foundation.framework/Versions/C/Foundation
    0x7fff2eb0f000 -     0x7fff2eb3effb  com.apple.GSS (4.0 - 2.0) <E2B90D08-3857-3155-9FCC-07D778988EC9> /System/Library/Frameworks/GSS.framework/Versions/A/GSS
    0x7fff2eb3f000 -     0x7fff2eb58ff3  com.apple.GameController (1.0 - 1) <9339D37B-54EA-31C5-A4A5-2135288BA992> /System/Library/Frameworks/GameController.framework/Versions/A/GameController
    0x7fff2ec3e000 -     0x7fff2ed48fff  com.apple.Bluetooth (6.0.14 - 6.0.14d3) <C2D1A774-2390-363D-8215-BF51FFCB6CCA> /System/Library/Frameworks/IOBluetooth.framework/Versions/A/IOBluetooth
    0x7fff2edab000 -     0x7fff2ee3afff  com.apple.framework.IOKit (2.0.2 - 1483.260.4) <8A90F547-86EF-3DFB-92FE-0E2C0376DD84> /System/Library/Frameworks/IOKit.framework/Versions/A/IOKit
    0x7fff2ee3c000 -     0x7fff2ee4bffb  com.apple.IOSurface (255.6.1 - 255.6.1) <85F85EBB-EA59-3A8B-B3EB-7C20F3CC77AE> /System/Library/Frameworks/IOSurface.framework/Versions/A/IOSurface
    0x7fff2ee4c000 -     0x7fff2ee9eff3  com.apple.ImageCaptureCore (1.0 - 1534.2) <27942C51-8108-3ED9-B37E-7C365A31EC2D> /System/Library/Frameworks/ImageCaptureCore.framework/Versions/A/ImageCaptureCore
    0x7fff2ee9f000 -     0x7fff2f02afef  com.apple.ImageIO.framework (3.3.0 - 1850.2) <75E46A31-D87D-35CE-86A4-96A50971FDB2> /System/Library/Frameworks/ImageIO.framework/Versions/A/ImageIO
    0x7fff2f02b000 -     0x7fff2f02fffb  libGIF.dylib (1850.2) <4774EBDF-583B-3DDD-A0E1-9F427CB6A074> /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libGIF.dylib
    0x7fff2f030000 -     0x7fff2f10cfef  libJP2.dylib (1850.2) <697BB77F-A682-339F-8659-35432962432D> /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libJP2.dylib
    0x7fff2f10d000 -     0x7fff2f132feb  libJPEG.dylib (1850.2) <171A8AC4-AADA-376F-9F2C-B9C978DB1007> /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libJPEG.dylib
    0x7fff2f3f5000 -     0x7fff2f41bfeb  libPng.dylib (1850.2) <FBCEE909-F573-3AD6-A45F-AF32612BF8A2> /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libPng.dylib
    0x7fff2f41c000 -     0x7fff2f41effb  libRadiance.dylib (1850.2) <56907025-D5CE-3A9E-ACCB-A376C2599853> /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libRadiance.dylib
    0x7fff2f41f000 -     0x7fff2f46cfe7  libTIFF.dylib (1850.2) <F59557C9-C761-3E6F-85D1-0FBFFD53ED5C> /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libTIFF.dylib
    0x7fff2f767000 -     0x7fff305c7fff  com.apple.JavaScriptCore (14607 - 14607.3.9) <9B7D9E8B-619D-34A1-8FA9-E23C0EA3CD02> /System/Library/Frameworks/JavaScriptCore.framework/Versions/A/JavaScriptCore
    0x7fff305df000 -     0x7fff305f8fff  com.apple.Kerberos (3.0 - 1) <DB1E0679-37E1-3B93-9789-32F63D660C3B> /System/Library/Frameworks/Kerberos.framework/Versions/A/Kerberos
    0x7fff3067b000 -     0x7fff30699fff  com.apple.CoreAuthentication.SharedUtils (1.0 - 425.270.3) <DDEAC106-D051-385A-9F74-CD9BE230D336> /System/Library/Frameworks/LocalAuthentication.framework/Support/SharedUtils.framework/Versions/A/SharedUtils
    0x7fff3069a000 -     0x7fff306aefff  com.apple.LocalAuthentication (1.0 - 425.270.3) <23CD2E0C-5A3A-348D-986F-58F302E4FEA4> /System/Library/Frameworks/LocalAuthentication.framework/Versions/A/LocalAuthentication
    0x7fff308b2000 -     0x7fff308bcfff  com.apple.MediaAccessibility (1.0 - 114.4) <76C449C5-DB45-3D7F-BFAD-3DACEF15DA21> /System/Library/Frameworks/MediaAccessibility.framework/Versions/A/MediaAccessibility
    0x7fff3096c000 -     0x7fff31012fff  com.apple.MediaToolbox (1.0 - 2290.13) <71BB5D76-34CA-3A30-AECF-24BE29FCC275> /System/Library/Frameworks/MediaToolbox.framework/Versions/A/MediaToolbox
    0x7fff31014000 -     0x7fff310bcff7  com.apple.Metal (162.2 - 162.2) <FFF7DFF3-7C4E-32C6-A0B5-C356079D3B7C> /System/Library/Frameworks/Metal.framework/Versions/A/Metal
    0x7fff310be000 -     0x7fff310d7ff3  com.apple.MetalKit (1.0 - 113) <51CDE966-54A7-3556-971B-1173E9986BB8> /System/Library/Frameworks/MetalKit.framework/Versions/A/MetalKit
    0x7fff310d8000 -     0x7fff310f7ff7  com.apple.MetalPerformanceShaders.MPSCore (1.0 - 1) <44CE8362-E972-3697-AD6F-15BC863BAEB8> /System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSCore.framework/Versions/A/MPSCore
    0x7fff310f8000 -     0x7fff31174fe7  com.apple.MetalPerformanceShaders.MPSImage (1.0 - 1) <EE8440DA-66DF-3923-ABBC-E0543211C069> /System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSImage.framework/Versions/A/MPSImage
    0x7fff31175000 -     0x7fff3119cfff  com.apple.MetalPerformanceShaders.MPSMatrix (1.0 - 1) <E64450DF-2B96-331E-B7F4-666E00571C70> /System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSMatrix.framework/Versions/A/MPSMatrix
    0x7fff3119d000 -     0x7fff312c8ff7  com.apple.MetalPerformanceShaders.MPSNeuralNetwork (1.0 - 1) <F2CF26B6-73F1-3644-8FE9-CDB9B2C4501F> /System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork
    0x7fff312c9000 -     0x7fff312e3fff  com.apple.MetalPerformanceShaders.MPSRayIntersector (1.0 - 1) <B33A35C3-0393-366B-ACFB-F4BB6A5F7B4A> /System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSRayIntersector.framework/Versions/A/MPSRayIntersector
    0x7fff312e4000 -     0x7fff312e5ff7  com.apple.MetalPerformanceShaders.MetalPerformanceShaders (1.0 - 1) <69F14BCF-C5C5-3BF8-9C31-8F87D2D6130A> /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/MetalPerformanceShaders
    0x7fff320dc000 -     0x7fff320e8ff7  com.apple.NetFS (6.0 - 4.0) <E917806F-0607-3292-B2D6-A15404D61B99> /System/Library/Frameworks/NetFS.framework/Versions/A/NetFS
    0x7fff34b86000 -     0x7fff34bddff7  com.apple.opencl (2.15.3 - 2.15.3) <056BAD8A-23BC-3F74-9E2C-3AC81E7DEA5A> /System/Library/Frameworks/OpenCL.framework/Versions/A/OpenCL
    0x7fff34bde000 -     0x7fff34bf9ff7  com.apple.CFOpenDirectory (10.14 - 207.200.4) <F03D84EB-49B2-3A00-9127-B9A269824026> /System/Library/Frameworks/OpenDirectory.framework/Versions/A/Frameworks/CFOpenDirectory.framework/Versions/A/CFOpenDirectory
    0x7fff34bfa000 -     0x7fff34c05ffb  com.apple.OpenDirectory (10.14 - 207.200.4) <A8020CEE-5B78-3581-A735-EA2833683F31> /System/Library/Frameworks/OpenDirectory.framework/Versions/A/OpenDirectory
    0x7fff35555000 -     0x7fff35557fff  libCVMSPluginSupport.dylib (17.7.3) <8E051EA7-55B6-3DF1-9821-72C391DE953B> /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libCVMSPluginSupport.dylib
    0x7fff35558000 -     0x7fff3555dff3  libCoreFSCache.dylib (166.2) <222C2A4F-7E32-30F6-8459-2FAB98073A3D> /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libCoreFSCache.dylib
    0x7fff3555e000 -     0x7fff35562fff  libCoreVMClient.dylib (166.2) <6789ECD4-91DD-32EF-A1FD-F27D2344CD8B> /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libCoreVMClient.dylib
    0x7fff35563000 -     0x7fff3556bff7  libGFXShared.dylib (17.7.3) <8C50BF27-B525-3B23-B86C-F444ADF97851> /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libGFXShared.dylib
    0x7fff3556c000 -     0x7fff35577fff  libGL.dylib (17.7.3) <2AC457EA-1BD3-3C8E-AFAB-7EA6234EB749> /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libGL.dylib
    0x7fff35578000 -     0x7fff355b2fef  libGLImage.dylib (17.7.3) <AA027AFA-C115-3861-89B2-0AE946838952> /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libGLImage.dylib
    0x7fff35726000 -     0x7fff35764fff  libGLU.dylib (17.7.3) <CB3B0579-D9A2-3CA5-8942-0C8344FAD054> /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libGLU.dylib
    0x7fff36101000 -     0x7fff36110ffb  com.apple.opengl (17.7.3 - 17.7.3) <94B5CF34-5BD6-3652-9A8C-E9C56E0A9FB4> /System/Library/Frameworks/OpenGL.framework/Versions/A/OpenGL
    0x7fff3648d000 -     0x7fff365d6ff7  com.apple.QTKit (7.7.3 - 3040) <D42BB4BE-B347-3113-ACA4-3257A5E45F52> /System/Library/Frameworks/QTKit.framework/Versions/A/QTKit
    0x7fff365d7000 -     0x7fff3682bfff  com.apple.imageKit (3.0 - 1067) <4F398AF4-828E-3FC2-9E3D-4EE3F36F7619> /System/Library/Frameworks/Quartz.framework/Versions/A/Frameworks/ImageKit.framework/Versions/A/ImageKit
    0x7fff3682c000 -     0x7fff36918fff  com.apple.PDFKit (1.0 - 745.3) <EF7A5FC1-017A-329E-BDAE-3D136CE28E64> /System/Library/Frameworks/Quartz.framework/Versions/A/Frameworks/PDFKit.framework/Versions/A/PDFKit
    0x7fff36919000 -     0x7fff36de8ff7  com.apple.QuartzComposer (5.1 - 370) <9C59494E-8D09-359E-B457-AA893520984C> /System/Library/Frameworks/Quartz.framework/Versions/A/Frameworks/QuartzComposer.framework/Versions/A/QuartzComposer
    0x7fff36de9000 -     0x7fff36e0fff7  com.apple.quartzfilters (1.10.0 - 83.1) <1CABB0FA-A6DB-3DD5-A598-F298F081E04E> /System/Library/Frameworks/Quartz.framework/Versions/A/Frameworks/QuartzFilters.framework/Versions/A/QuartzFilters
    0x7fff36e10000 -     0x7fff36f11ff7  com.apple.QuickLookUIFramework (5.0 - 775.6) <5660DDBA-2BE4-310A-9E81-370106EDB21D> /System/Library/Frameworks/Quartz.framework/Versions/A/Frameworks/QuickLookUI.framework/Versions/A/QuickLookUI
    0x7fff36f12000 -     0x7fff36f12fff  com.apple.quartzframework (1.5 - 23) <31783652-5E36-3773-8847-9FECFE2487F0> /System/Library/Frameworks/Quartz.framework/Versions/A/Quartz
    0x7fff36f13000 -     0x7fff3716aff7  com.apple.QuartzCore (1.11 - 701.14) <33E846BE-1794-3186-9BF2-6ADF62C782A3> /System/Library/Frameworks/QuartzCore.framework/Versions/A/QuartzCore
    0x7fff3716b000 -     0x7fff371c2fff  com.apple.QuickLookFramework (5.0 - 775.6) <CB74C63F-E223-3783-9021-8E28091BCDA6> /System/Library/Frameworks/QuickLook.framework/Versions/A/QuickLook
    0x7fff37389000 -     0x7fff373a1fff  com.apple.SafariServices.framework (14608 - 14608.1.49) <2631FDD1-6A7F-30A7-A4AC-5BD1443741CD> /System/Library/Frameworks/SafariServices.framework/Versions/A/SafariServices
    0x7fff379a0000 -     0x7fff37ca0fff  com.apple.security (7.0 - 58286.270.3.0.1) <DF7677A7-9765-3B6A-9D1C-3589145E4B65> /System/Library/Frameworks/Security.framework/Versions/A/Security
    0x7fff37ca1000 -     0x7fff37d2dfff  com.apple.securityfoundation (6.0 - 55185.260.1) <1EE899E6-222A-3526-B505-B0D0B6FA042A> /System/Library/Frameworks/SecurityFoundation.framework/Versions/A/SecurityFoundation
    0x7fff37d2e000 -     0x7fff37d5effb  com.apple.securityinterface (10.0 - 55109.200.8) <02B83641-2D21-3DB8-AAB8-6F8AAD0F6264> /System/Library/Frameworks/SecurityInterface.framework/Versions/A/SecurityInterface
    0x7fff37d5f000 -     0x7fff37d63fff  com.apple.xpc.ServiceManagement (1.0 - 1) <FCF7BABA-DDDD-3770-8DAC-7069850203C2> /System/Library/Frameworks/ServiceManagement.framework/Versions/A/ServiceManagement
    0x7fff37fb2000 -     0x7fff37fc8ffb  com.apple.StoreKit (1.0 - 1) <5E26D23D-D85C-32EF-AE44-2B0437893274> /System/Library/Frameworks/StoreKit.framework/Versions/A/StoreKit
    0x7fff380fc000 -     0x7fff38169fff  com.apple.SystemConfiguration (1.17 - 1.17) <30C8327F-3EFF-3520-9C50-016F8B6B954F> /System/Library/Frameworks/SystemConfiguration.framework/Versions/A/SystemConfiguration
    0x7fff383c8000 -     0x7fff38729fff  com.apple.VideoToolbox (1.0 - 2290.13) <7FCB2FC0-EFB8-37C2-B0D3-60AE9FDFE230> /System/Library/Frameworks/VideoToolbox.framework/Versions/A/VideoToolbox
    0x7fff3b3a5000 -     0x7fff3b44afeb  com.apple.APFS (1.0 - 1) <2D22485D-552D-3CB6-9FE1-38547597918F> /System/Library/PrivateFrameworks/APFS.framework/Versions/A/APFS
    0x7fff3be5f000 -     0x7fff3be60ff7  com.apple.AggregateDictionary (1.0 - 1) <A6AF8AC4-1F25-37C4-9157-A02E9C200926> /System/Library/PrivateFrameworks/AggregateDictionary.framework/Versions/A/AggregateDictionary
    0x7fff3c21e000 -     0x7fff3c361fff  com.apple.AnnotationKit (1.0 - 232.3.30) <A35C5450-FBA1-3E76-9F27-4ED0179AE6A6> /System/Library/PrivateFrameworks/AnnotationKit.framework/Versions/A/AnnotationKit
    0x7fff3c461000 -     0x7fff3c48dff7  com.apple.framework.Apple80211 (13.0 - 1380.2) <16F093EF-370B-3B90-8DB4-E94624431D15> /System/Library/PrivateFrameworks/Apple80211.framework/Versions/A/Apple80211
    0x7fff3c5b5000 -     0x7fff3c5c4fc7  com.apple.AppleFSCompression (96.200.3 - 1.0) <3CF60CE8-976E-3CB8-959D-DD0948C1C2DE> /System/Library/PrivateFrameworks/AppleFSCompression.framework/Versions/A/AppleFSCompression
    0x7fff3c6c0000 -     0x7fff3c6cbfff  com.apple.AppleIDAuthSupport (1.0 - 1) <2E9D1398-DBE6-328B-ADDA-20FA5FAD7405> /System/Library/PrivateFrameworks/AppleIDAuthSupport.framework/Versions/A/AppleIDAuthSupport
    0x7fff3c70c000 -     0x7fff3c755ff3  com.apple.AppleJPEG (1.0 - 1) <4C1F426B-7D77-3980-9633-7DBD8C666B9A> /System/Library/PrivateFrameworks/AppleJPEG.framework/Versions/A/AppleJPEG
    0x7fff3c9a9000 -     0x7fff3c9cbfff  com.apple.applesauce (1.0 - ???) <F49107C7-3C51-3024-8EF1-C57643BE4F3B> /System/Library/PrivateFrameworks/AppleSauce.framework/Versions/A/AppleSauce
    0x7fff3ca8b000 -     0x7fff3ca8eff7  com.apple.AppleSystemInfo (3.1.5 - 3.1.5) <A48BC6D4-224C-3A25-846B-4D06C53568AE> /System/Library/PrivateFrameworks/AppleSystemInfo.framework/Versions/A/AppleSystemInfo
    0x7fff3ca8f000 -     0x7fff3cadfff7  com.apple.AppleVAFramework (5.1.4 - 5.1.4) <3399D678-8741-3B70-B8D0-7C63C8ACF7DF> /System/Library/PrivateFrameworks/AppleVA.framework/Versions/A/AppleVA
    0x7fff3cb2a000 -     0x7fff3cb3effb  com.apple.AssertionServices (1.0 - 1) <456E507A-4561-3628-9FBE-173ACE7429D8> /System/Library/PrivateFrameworks/AssertionServices.framework/Versions/A/AssertionServices
    0x7fff3cf0d000 -     0x7fff3cff9ff7  com.apple.AuthKit (1.0 - 1) <2765ABE9-54F2-3E45-8A93-1261E251B90D> /System/Library/PrivateFrameworks/AuthKit.framework/Versions/A/AuthKit
    0x7fff3d1bb000 -     0x7fff3d1c3fff  com.apple.coreservices.BackgroundTaskManagement (1.0 - 57.1) <2A396FC0-7B79-3088-9A82-FB93C1181A57> /System/Library/PrivateFrameworks/BackgroundTaskManagement.framework/Versions/A/BackgroundTaskManagement
    0x7fff3d1c4000 -     0x7fff3d259fff  com.apple.backup.framework (1.10.5 - ???) <4EEC51E2-AE4C-340A-B686-901810152C12> /System/Library/PrivateFrameworks/Backup.framework/Versions/A/Backup
    0x7fff3d25a000 -     0x7fff3d2c7ff3  com.apple.BaseBoard (360.28 - 360.28) <68FA8044-F3CD-3BC6-9DAB-27DACF52BFC0> /System/Library/PrivateFrameworks/BaseBoard.framework/Versions/A/BaseBoard
    0x7fff3d2d0000 -     0x7fff3d2d6ffb  com.apple.BezelServicesFW (317.5 - 317.5) <25807B30-117A-33D9-93E6-48E8AE90BD63> /System/Library/PrivateFrameworks/BezelServices.framework/Versions/A/BezelServices
    0x7fff3e125000 -     0x7fff3e174ff7  com.apple.ChunkingLibrary (201 - 201) <DFE16C42-24E6-386F-AC50-0058F61980A2> /System/Library/PrivateFrameworks/ChunkingLibrary.framework/Versions/A/ChunkingLibrary
    0x7fff3ef32000 -     0x7fff3ef3bffb  com.apple.CommonAuth (4.0 - 2.0) <93335CB6-ABEB-3EC7-A040-8A667F40D5F3> /System/Library/PrivateFrameworks/CommonAuth.framework/Versions/A/CommonAuth
    0x7fff3f3d4000 -     0x7fff3f7b7fef  com.apple.CoreAUC (274.0.0 - 274.0.0) <C71F1581-E73B-3DA0-958B-E912C3FB3F23> /System/Library/PrivateFrameworks/CoreAUC.framework/Versions/A/CoreAUC
    0x7fff3f7b8000 -     0x7fff3f7e6ff7  com.apple.CoreAVCHD (6.0.0 - 6000.4.1) <A04A99B8-DAC5-36FC-BAC7-7431600C1F89> /System/Library/PrivateFrameworks/CoreAVCHD.framework/Versions/A/CoreAVCHD
    0x7fff3f87c000 -     0x7fff3f8daffb  com.apple.corebrightness (1.0 - 1) <61040CCD-0AFD-389F-87E8-0FD9D8C3BAE1> /System/Library/PrivateFrameworks/CoreBrightness.framework/Versions/A/CoreBrightness
    0x7fff3fc14000 -     0x7fff3fc25ff7  com.apple.CoreEmoji (1.0 - 69.19.9) <228457B3-E191-356E-9A5B-3C0438D05FBA> /System/Library/PrivateFrameworks/CoreEmoji.framework/Versions/A/CoreEmoji
    0x7fff3fdce000 -     0x7fff3febdfff  com.apple.CoreHandwriting (161 - 1.2) <7CBB18C3-FE95-3352-9D67-B441E89AD10F> /System/Library/PrivateFrameworks/CoreHandwriting.framework/Versions/A/CoreHandwriting
    0x7fff4008f000 -     0x7fff400a5ffb  com.apple.CoreMediaAuthoring (2.2 - 959) <86089759-E920-37DB-A3BB-F5621C351E4A> /System/Library/PrivateFrameworks/CoreMediaAuthoring.framework/Versions/A/CoreMediaAuthoring
    0x7fff401cf000 -     0x7fff40235ff7  com.apple.CoreNLP (1.0 - 130.15.22) <27877820-17D0-3B02-8557-4014E876CCC7> /System/Library/PrivateFrameworks/CoreNLP.framework/Versions/A/CoreNLP
    0x7fff403a1000 -     0x7fff4042dfff  com.apple.CorePDF (4.0 - 414) <E4ECDD15-34C0-30C2-AFA9-27C8EDAC3DB0> /System/Library/PrivateFrameworks/CorePDF.framework/Versions/A/CorePDF
    0x7fff404e2000 -     0x7fff404eaff7  com.apple.CorePhoneNumbers (1.0 - 1) <11F97C7E-C183-305F-8E6C-9B374F50E26B> /System/Library/PrivateFrameworks/CorePhoneNumbers.framework/Versions/A/CorePhoneNumbers
    0x7fff40666000 -     0x7fff40697ff3  com.apple.CoreServicesInternal (358 - 358) <DD6EF60D-048F-3186-83DA-EB191EDF48AE> /System/Library/PrivateFrameworks/CoreServicesInternal.framework/Versions/A/CoreServicesInternal
    0x7fff40a5e000 -     0x7fff40ae2fff  com.apple.CoreSymbolication (10.2 - 64490.25.1) <28B2FF2D-3FDE-3A20-B343-341E5BD4E22F> /System/Library/PrivateFrameworks/CoreSymbolication.framework/Versions/A/CoreSymbolication
    0x7fff40b72000 -     0x7fff40c9dff7  com.apple.coreui (2.1 - 499.10) <A80F4B09-F940-346F-A9DF-4EFADD9220A8> /System/Library/PrivateFrameworks/CoreUI.framework/Versions/A/CoreUI
    0x7fff40c9e000 -     0x7fff40e3efff  com.apple.CoreUtils (5.9 - 590.16) <66CC50F7-766D-33E2-A388-4DE22840ADFB> /System/Library/PrivateFrameworks/CoreUtils.framework/Versions/A/CoreUtils
    0x7fff40e92000 -     0x7fff40ef5ff7  com.apple.framework.CoreWiFi (13.0 - 1375.2) <CA4B835A-27AC-3FAB-9F44-E48548EA2442> /System/Library/PrivateFrameworks/CoreWiFi.framework/Versions/A/CoreWiFi
    0x7fff40ef6000 -     0x7fff40f07ff7  com.apple.CrashReporterSupport (10.13 - 938.26) <E93D84A6-891D-38EE-BB4F-E9CD681189B7> /System/Library/PrivateFrameworks/CrashReporterSupport.framework/Versions/A/CrashReporterSupport
    0x7fff40f97000 -     0x7fff40fa6fff  com.apple.framework.DFRFoundation (1.0 - 211.1) <E3F02F2A-2059-39CC-85DA-969676EB88EB> /System/Library/PrivateFrameworks/DFRFoundation.framework/Versions/A/DFRFoundation
    0x7fff40fa7000 -     0x7fff40fabff7  com.apple.DSExternalDisplay (3.1 - 380) <787B9748-B120-3453-B8FE-61D9E363A9E0> /System/Library/PrivateFrameworks/DSExternalDisplay.framework/Versions/A/DSExternalDisplay
    0x7fff4102c000 -     0x7fff410a1ffb  com.apple.datadetectorscore (7.0 - 590.27) <06FB1A07-7AE6-3ADD-8E7E-41955FAB38E8> /System/Library/PrivateFrameworks/DataDetectorsCore.framework/Versions/A/DataDetectorsCore
    0x7fff410ed000 -     0x7fff4112aff7  com.apple.DebugSymbols (190 - 190) <6F4FAACA-E06B-38AD-A0C2-14EA5408A231> /System/Library/PrivateFrameworks/DebugSymbols.framework/Versions/A/DebugSymbols
    0x7fff4112b000 -     0x7fff41266ff7  com.apple.desktopservices (1.13.5 - ???) <265C0E94-B8BF-3F58-8D68-EA001EEA0B15> /System/Library/PrivateFrameworks/DesktopServicesPriv.framework/Versions/A/DesktopServicesPriv
    0x7fff41472000 -     0x7fff41538fff  com.apple.DiskManagement (12.1 - 1555.270.2) <EB207683-FBD6-3B74-A606-3FE22234372C> /System/Library/PrivateFrameworks/DiskManagement.framework/Versions/A/DiskManagement
    0x7fff41539000 -     0x7fff4153dffb  com.apple.DisplayServicesFW (3.1 - 380) <62041594-2A4C-3362-87EE-F8E8C8E5BEEC> /System/Library/PrivateFrameworks/DisplayServices.framework/Versions/A/DisplayServices
    0x7fff415e6000 -     0x7fff415e9ff3  com.apple.EFILogin (2.0 - 2) <210948F9-FD39-392D-8349-34985B3C751C> /System/Library/PrivateFrameworks/EFILogin.framework/Versions/A/EFILogin
    0x7fff41d1f000 -     0x7fff42001ff7  com.apple.vision.EspressoFramework (1.0 - 120) <8B56D943-F87B-3A01-B7A4-19DE3312B61C> /System/Library/PrivateFrameworks/Espresso.framework/Versions/A/Espresso
    0x7fff421ad000 -     0x7fff425c8fff  com.apple.vision.FaceCore (3.3.4 - 3.3.4) <A576E2DA-BF6F-3B18-8FEB-324E5C5FA9BD> /System/Library/PrivateFrameworks/FaceCore.framework/Versions/A/FaceCore
    0x7fff45e7c000 -     0x7fff45e7dfff  libmetal_timestamp.dylib (902.3.2) <05389463-AF2E-33E2-A14F-1416E4A30835> /System/Library/PrivateFrameworks/GPUCompiler.framework/Versions/3902/Libraries/libmetal_timestamp.dylib
    0x7fff4751d000 -     0x7fff47522fff  com.apple.GPUWrangler (3.50.12 - 3.50.12) <6C820ED9-F306-3978-B5B8-432AD97BBDAF> /System/Library/PrivateFrameworks/GPUWrangler.framework/Versions/A/GPUWrangler
    0x7fff478b0000 -     0x7fff478d4ff3  com.apple.GenerationalStorage (2.0 - 285.101) <84C2E52C-F2C6-3FF8-87E5-3C88A40D3881> /System/Library/PrivateFrameworks/GenerationalStorage.framework/Versions/A/GenerationalStorage
    0x7fff4832e000 -     0x7fff4833dfff  com.apple.GraphVisualizer (1.0 - 5) <48D020B7-5938-3FAE-B468-E291AEE2C06F> /System/Library/PrivateFrameworks/GraphVisualizer.framework/Versions/A/GraphVisualizer
    0x7fff484a3000 -     0x7fff48517ffb  com.apple.Heimdal (4.0 - 2.0) <D97FCF19-EAD6-3E2F-BE88-F817E45CAE96> /System/Library/PrivateFrameworks/Heimdal.framework/Versions/A/Heimdal
    0x7fff48518000 -     0x7fff48546fff  com.apple.HelpData (2.3 - 184.4) <22850610-29F8-3902-93A3-BBF403440185> /System/Library/PrivateFrameworks/HelpData.framework/Versions/A/HelpData
    0x7fff4981d000 -     0x7fff49824ffb  com.apple.IOAccelerator (404.14 - 404.14) <11A50171-C8AE-3BBC-9FB9-2A3313FFBD31> /System/Library/PrivateFrameworks/IOAccelerator.framework/Versions/A/IOAccelerator
    0x7fff49828000 -     0x7fff49840fff  com.apple.IOPresentment (1.0 - 42.6) <6DFD9A6E-BF95-3A27-89E7-ACAA9E30D90A> /System/Library/PrivateFrameworks/IOPresentment.framework/Versions/A/IOPresentment
    0x7fff49be8000 -     0x7fff49c15ff7  com.apple.IconServices (379 - 379) <7BAD562D-4FA3-3E11-863C-1EEBE2406D2C> /System/Library/PrivateFrameworks/IconServices.framework/Versions/A/IconServices
    0x7fff49d3f000 -     0x7fff49d43ffb  com.apple.InternationalSupport (1.0 - 10.15.6) <6226A905-D055-321D-B665-5B0CC4798A74> /System/Library/PrivateFrameworks/InternationalSupport.framework/Versions/A/InternationalSupport
    0x7fff49ea8000 -     0x7fff49ebaff3  com.apple.security.KeychainCircle.KeychainCircle (1.0 - 1) <30CFE05C-4108-3879-AFAA-5BB02CBE190B> /System/Library/PrivateFrameworks/KeychainCircle.framework/Versions/A/KeychainCircle
    0x7fff49ed5000 -     0x7fff49fb0ff7  com.apple.LanguageModeling (1.0 - 159.15.15) <3DE3CE61-542B-37B7-883E-4B9717CAC65F> /System/Library/PrivateFrameworks/LanguageModeling.framework/Versions/A/LanguageModeling
    0x7fff49fb1000 -     0x7fff49fedff7  com.apple.Lexicon-framework (1.0 - 33.15.10) <4B5E843E-2809-3E70-9560-9254E2656419> /System/Library/PrivateFrameworks/Lexicon.framework/Versions/A/Lexicon
    0x7fff49ff4000 -     0x7fff49ff9fff  com.apple.LinguisticData (1.0 - 238.25) <F529B961-098C-3E4C-A3E9-9DA9BFA1B3F0> /System/Library/PrivateFrameworks/LinguisticData.framework/Versions/A/LinguisticData
    0x7fff4a817000 -     0x7fff4a81afff  com.apple.Mangrove (1.0 - 25) <537A5B2E-4C30-3CFD-8BDC-79F9A04AC327> /System/Library/PrivateFrameworks/Mangrove.framework/Versions/A/Mangrove
    0x7fff4a8a1000 -     0x7fff4a8c7ff3  com.apple.MarkupUI (1.0 - 232.3.30) <C6A452D8-CA97-3044-A025-8ED4B7264FE2> /System/Library/PrivateFrameworks/MarkupUI.framework/Versions/A/MarkupUI
    0x7fff4a92f000 -     0x7fff4a962ff7  com.apple.MediaKit (16 - 907) <5EE0E7DA-5ACC-33F3-9BF0-47A448C011A1> /System/Library/PrivateFrameworks/MediaKit.framework/Versions/A/MediaKit
    0x7fff4acee000 -     0x7fff4ad16ff7  com.apple.spotlight.metadata.utilities (1.0 - 1191.57) <38BB1FB7-3336-384C-B71F-4D0D402EB606> /System/Library/PrivateFrameworks/MetadataUtilities.framework/Versions/A/MetadataUtilities
    0x7fff4ad17000 -     0x7fff4ada4ff7  com.apple.gpusw.MetalTools (1.0 - 1) <CBE2176A-8048-3A9C-AFE4-13973D44C704> /System/Library/PrivateFrameworks/MetalTools.framework/Versions/A/MetalTools
    0x7fff4adbb000 -     0x7fff4add4ffb  com.apple.MobileAssets (1.0 - 437.250.3) <8BE5B3A0-8F3A-3FAE-9AFF-32836300183C> /System/Library/PrivateFrameworks/MobileAsset.framework/Versions/A/MobileAsset
    0x7fff4af4f000 -     0x7fff4af6affb  com.apple.MobileKeyBag (2.0 - 1.0) <C7C5DD21-66DE-31D1-92D9-BBEEAAE156FB> /System/Library/PrivateFrameworks/MobileKeyBag.framework/Versions/A/MobileKeyBag
    0x7fff4af7d000 -     0x7fff4aff2fff  com.apple.Montreal (1.0 - 42.15.9) <17BFD046-4362-3A76-A496-648D00FF3743> /System/Library/PrivateFrameworks/Montreal.framework/Versions/A/Montreal
    0x7fff4aff3000 -     0x7fff4b01dffb  com.apple.MultitouchSupport.framework (2450.1 - 2450.1) <42A23EC9-64A7-31C7-BF33-DF4412ED8A3F> /System/Library/PrivateFrameworks/MultitouchSupport.framework/Versions/A/MultitouchSupport
    0x7fff4b259000 -     0x7fff4b263fff  com.apple.NetAuth (6.2 - 6.2) <0D01BBE5-0269-310D-B148-D19DAE143DEB> /System/Library/PrivateFrameworks/NetAuth.framework/Versions/A/NetAuth
    0x7fff4bac4000 -     0x7fff4bb15ff3  com.apple.OTSVG (1.0 - ???) <5BF1A9EB-2694-3267-9514-A4EB3BEF4081> /System/Library/PrivateFrameworks/OTSVG.framework/Versions/A/OTSVG
    0x7fff4cbb9000 -     0x7fff4ccacfff  com.apple.PencilKit (1.0 - 1) <79225726-6980-3680-AC0B-D8C5C5DB2224> /System/Library/PrivateFrameworks/PencilKit.framework/Versions/A/PencilKit
    0x7fff4ccad000 -     0x7fff4ccbcff7  com.apple.PerformanceAnalysis (1.218.2 - 218.2) <65F3DB3E-6D4E-33A0-B510-EF768D323DAB> /System/Library/PrivateFrameworks/PerformanceAnalysis.framework/Versions/A/PerformanceAnalysis
    0x7fff4eaf9000 -     0x7fff4eb4dffb  com.apple.ProtectedCloudStorage (1.0 - 1) <53B3C1F3-BB97-379F-8CBA-8FDCDF085793> /System/Library/PrivateFrameworks/ProtectedCloudStorage.framework/Versions/A/ProtectedCloudStorage
    0x7fff4eb4e000 -     0x7fff4eb6cff7  com.apple.ProtocolBuffer (1 - 263.2) <907D6C95-D050-31DE-99CA-16A5135BC6F9> /System/Library/PrivateFrameworks/ProtocolBuffer.framework/Versions/A/ProtocolBuffer
    0x7fff4ecea000 -     0x7fff4ecedff3  com.apple.QuickLookNonBaseSystem (1.0 - 1) <69D0DD00-A3D2-3835-91F0-F33BD9D7D740> /System/Library/PrivateFrameworks/QuickLookNonBaseSystem.framework/Versions/A/QuickLookNonBaseSystem
    0x7fff4ecee000 -     0x7fff4ed03ff3  com.apple.QuickLookThumbnailing (1.0 - 1) <B5E746AE-1DCB-3299-8626-10CCCBC2D5EE> /System/Library/PrivateFrameworks/QuickLookThumbnailing.framework/Versions/A/QuickLookThumbnailing
    0x7fff4ed04000 -     0x7fff4ed54fff  com.apple.ROCKit (27.6 - 27.6) <756C2253-E8B1-3C48-9945-DE8D6AD24DE2> /System/Library/PrivateFrameworks/ROCKit.framework/Versions/A/ROCKit
    0x7fff4ee94000 -     0x7fff4ee9ffff  com.apple.xpc.RemoteServiceDiscovery (1.0 - 1336.261.2) <651F994E-21E1-359B-8FEA-6909CE9AAD56> /System/Library/PrivateFrameworks/RemoteServiceDiscovery.framework/Versions/A/RemoteServiceDiscovery
    0x7fff4eeb2000 -     0x7fff4eed4fff  com.apple.RemoteViewServices (2.0 - 128) <8FB0E4EB-DCBB-32E6-94C6-AA9BA9EE4CAC> /System/Library/PrivateFrameworks/RemoteViewServices.framework/Versions/A/RemoteViewServices
    0x7fff4eed5000 -     0x7fff4eee8ff3  com.apple.xpc.RemoteXPC (1.0 - 1336.261.2) <E7B66B18-F5DF-3819-BA47-E35122BA09E8> /System/Library/PrivateFrameworks/RemoteXPC.framework/Versions/A/RemoteXPC
    0x7fff506de000 -     0x7fff507fcfff  com.apple.Sharing (1288.62 - 1288.62) <48B1F247-7910-3C16-814C-B99DE231F7F0> /System/Library/PrivateFrameworks/Sharing.framework/Versions/A/Sharing
    0x7fff507fd000 -     0x7fff5081cffb  com.apple.shortcut (2.16 - 101) <FA635B3A-8B45-3132-BB06-BD0398F03E12> /System/Library/PrivateFrameworks/Shortcut.framework/Versions/A/Shortcut
    0x7fff51610000 -     0x7fff518bffff  com.apple.SkyLight (1.600.0 - 340.54) <90EB1C2E-B264-3EC4-AF7F-CDE7E7585746> /System/Library/PrivateFrameworks/SkyLight.framework/Versions/A/SkyLight
    0x7fff52062000 -     0x7fff5206efff  com.apple.SpeechRecognitionCore (5.0.21 - 5.0.21) <7A6A67DB-C813-328E-AAFB-D267A5B50B3D> /System/Library/PrivateFrameworks/SpeechRecognitionCore.framework/Versions/A/SpeechRecognitionCore
    0x7fff5270d000 -     0x7fff52749ff3  com.apple.StreamingZip (1.0 - 1) <046FAD5C-E0C5-3013-B1FE-24C018A0DDCF> /System/Library/PrivateFrameworks/StreamingZip.framework/Versions/A/StreamingZip
    0x7fff527bf000 -     0x7fff5284afc7  com.apple.Symbolication (10.2 - 64490.38.1) <9FDCC98D-5B32-35AD-A9BF-94DF2B78507F> /System/Library/PrivateFrameworks/Symbolication.framework/Versions/A/Symbolication
    0x7fff52d21000 -     0x7fff52d2dfff  com.apple.private.SystemPolicy (1.0 - 1) <9CDA85A3-875C-3615-8818-2DC73E9FFE8B> /System/Library/PrivateFrameworks/SystemPolicy.framework/Versions/A/SystemPolicy
    0x7fff52d32000 -     0x7fff52d3effb  com.apple.TCC (1.0 - 1) <73CF6FA9-44CE-30C9-887F-235940976585> /System/Library/PrivateFrameworks/TCC.framework/Versions/A/TCC
    0x7fff52fa4000 -     0x7fff5306cff3  com.apple.TextureIO (3.8.4 - 3.8.1) <7CEAC05A-D283-3D5A-B1E3-C849285FA0BF> /System/Library/PrivateFrameworks/TextureIO.framework/Versions/A/TextureIO
    0x7fff53129000 -     0x7fff532e0ffb  com.apple.UIFoundation (1.0 - 551.2) <917480B5-14BE-30E0-ABE6-9702336CC35A> /System/Library/PrivateFrameworks/UIFoundation.framework/Versions/A/UIFoundation
    0x7fff53f5c000 -     0x7fff54035fff  com.apple.ViewBridge (401.1 - 401.1) <18144EC1-5DEF-369C-8EBA-2826E7142784> /System/Library/PrivateFrameworks/ViewBridge.framework/Versions/A/ViewBridge
    0x7fff5480d000 -     0x7fff54810fff  com.apple.dt.XCTTargetBootstrap (1.0 - 14490.66) <7AE3457F-AF40-3508-93FB-1D9E31EB1C9D> /System/Library/PrivateFrameworks/XCTTargetBootstrap.framework/Versions/A/XCTTargetBootstrap
    0x7fff54c11000 -     0x7fff54c13ffb  com.apple.loginsupport (1.0 - 1) <3F8D6334-BCD6-36C1-BA20-CC8503A84375> /System/Library/PrivateFrameworks/login.framework/Versions/A/Frameworks/loginsupport.framework/Versions/A/loginsupport
    0x7fff54c14000 -     0x7fff54c29fff  com.apple.login (3.0 - 3.0) <E168F05D-A5DF-3848-8686-DF5015EA4BA4> /System/Library/PrivateFrameworks/login.framework/Versions/A/login
    0x7fff54edd000 -     0x7fff54f11fff  libCRFSuite.dylib (41.15.4) <406DAC06-0C77-3F90-878B-4D38F11F0256> /usr/lib/libCRFSuite.dylib
    0x7fff54f14000 -     0x7fff54f1eff7  libChineseTokenizer.dylib (28.15.3) <9B7F6109-3A5D-3641-9A7E-31D2239D73EE> /usr/lib/libChineseTokenizer.dylib
    0x7fff54f1f000 -     0x7fff54fa8fff  libCoreStorage.dylib (546.50.1) <8E643B27-7986-3351-B37E-038FB6794BF9> /usr/lib/libCoreStorage.dylib
    0x7fff54fac000 -     0x7fff54fadffb  libDiagnosticMessagesClient.dylib (107) <A14D0819-0970-34CD-8680-80E4D7FE8C2C> /usr/lib/libDiagnosticMessagesClient.dylib
    0x7fff54fe4000 -     0x7fff5523bff3  libFosl_dynamic.dylib (18.3.4) <1B5DD4E2-8AE0-315E-829E-D5BFCD264EA8> /usr/lib/libFosl_dynamic.dylib
    0x7fff5525b000 -     0x7fff55262fff  libMatch.1.dylib (31.200.1) <EF8164CB-B599-39D9-9E73-4958A372DC0B> /usr/lib/libMatch.1.dylib
    0x7fff5528c000 -     0x7fff552abfff  libMobileGestalt.dylib (645.270.1) <99A06C8A-97D6-383D-862C-F453BABB48A4> /usr/lib/libMobileGestalt.dylib
    0x7fff552ac000 -     0x7fff552acfff  libOpenScriptingUtil.dylib (179.1) <4D603146-EDA5-3A74-9FF8-4F75D8BB9BC6> /usr/lib/libOpenScriptingUtil.dylib
    0x7fff553ec000 -     0x7fff553edffb  libSystem.B.dylib (1252.250.1) <B1006948-7AD0-3CA9-81E0-833F4DD6BFB4> /usr/lib/libSystem.B.dylib
    0x7fff55469000 -     0x7fff5546afff  libThaiTokenizer.dylib (2.15.1) <ADB37DC3-7D9B-3E73-A72A-BCC3433C937A> /usr/lib/libThaiTokenizer.dylib
    0x7fff5547c000 -     0x7fff55492ffb  libapple_nghttp2.dylib (1.24.1) <6F04250A-6686-3FDC-9A8D-290C64B06502> /usr/lib/libapple_nghttp2.dylib
    0x7fff55493000 -     0x7fff554bcffb  libarchive.2.dylib (54.250.1) <47289946-8504-3966-9127-6CE39993DC2C> /usr/lib/libarchive.2.dylib
    0x7fff554bd000 -     0x7fff5553cfff  libate.dylib (1.13.8) <92B44EDB-369D-3EE8-AEC5-61F8B9313DBF> /usr/lib/libate.dylib
    0x7fff55540000 -     0x7fff55540ff3  libauto.dylib (187) <3E3780E1-96F3-3A22-91C5-92F9A5805518> /usr/lib/libauto.dylib
    0x7fff55610000 -     0x7fff55620ffb  libbsm.0.dylib (39.200.18) <CF381E0B-025B-364F-A83D-2527E03F1AA3> /usr/lib/libbsm.0.dylib
    0x7fff55621000 -     0x7fff5562efff  libbz2.1.0.dylib (38.200.3) <272953A1-8D36-329B-BDDB-E887B347710F> /usr/lib/libbz2.1.0.dylib
    0x7fff5562f000 -     0x7fff55682ff7  libc++.1.dylib (400.9.4) <9A60A190-6C34-339F-BB3D-AACE942009A4> /usr/lib/libc++.1.dylib
    0x7fff55683000 -     0x7fff55698ff7  libc++abi.dylib (400.17) <38C09CED-9090-3719-90F3-04A2749F5428> /usr/lib/libc++abi.dylib
    0x7fff55699000 -     0x7fff55699ff3  libcharset.1.dylib (51.200.6) <2A27E064-314C-359C-93FC-8A9B06206174> /usr/lib/libcharset.1.dylib
    0x7fff5569a000 -     0x7fff556aaffb  libcmph.dylib (6.15.1) <9C52B2FE-179F-32AC-B87E-2AFC49ABF817> /usr/lib/libcmph.dylib
    0x7fff556ab000 -     0x7fff556c3ffb  libcompression.dylib (52.250.2) <7F4BB18C-1FB4-3825-8D8B-6E6B168774C6> /usr/lib/libcompression.dylib
    0x7fff55938000 -     0x7fff5594efff  libcoretls.dylib (155.220.1) <4C64BE3E-41E3-3020-8BB7-07E90C0C861C> /usr/lib/libcoretls.dylib
    0x7fff5594f000 -     0x7fff55950ff3  libcoretls_cfhelpers.dylib (155.220.1) <0959B3E9-6643-3589-8BB3-21D52CDF0EF1> /usr/lib/libcoretls_cfhelpers.dylib
    0x7fff55de9000 -     0x7fff55df4ff7  libcsfde.dylib (546.50.1) <7BAF8FCF-33A1-3C7C-8FEB-2020C8ED6063> /usr/lib/libcsfde.dylib
    0x7fff55dfc000 -     0x7fff55e52ff3  libcups.2.dylib (462.12) <095619DC-9233-3937-9E50-5F10D917A40D> /usr/lib/libcups.2.dylib
    0x7fff55f86000 -     0x7fff55f86fff  libenergytrace.dylib (17.200.1) <80BB567A-FD18-3497-BF97-353F57D98CDD> /usr/lib/libenergytrace.dylib
    0x7fff55f87000 -     0x7fff55fa0ffb  libexpat.1.dylib (16.1.1) <28A385F1-4210-32D2-861B-C1B2189A5294> /usr/lib/libexpat.1.dylib
    0x7fff55fb8000 -     0x7fff55fbdff7  libgermantok.dylib (17.15.2) <E5F0F794-FF27-3D64-AE52-C78C6A84DD67> /usr/lib/libgermantok.dylib
    0x7fff55fbe000 -     0x7fff55fc3ff7  libheimdal-asn1.dylib (520.270.1) <73F60D6F-76F8-35EF-9C86-9A81225EE4BE> /usr/lib/libheimdal-asn1.dylib
    0x7fff55fee000 -     0x7fff560defff  libiconv.2.dylib (51.200.6) <2047C9B7-3F74-3A95-810D-2ED8F0475A99> /usr/lib/libiconv.2.dylib
    0x7fff560df000 -     0x7fff56340ffb  libicucore.A.dylib (62141.0.1) <A0D63918-76E9-3C1B-B255-46F4C1DA7FE8> /usr/lib/libicucore.A.dylib
    0x7fff5638d000 -     0x7fff5638efff  liblangid.dylib (128.15.1) <22D05C4F-769B-3075-ABCF-44A0EBACE028> /usr/lib/liblangid.dylib
    0x7fff5638f000 -     0x7fff563a7ff3  liblzma.5.dylib (10.200.3) <E1F4FD60-1CE4-37B9-AD95-29D348AF1AC0> /usr/lib/liblzma.5.dylib
    0x7fff563bf000 -     0x7fff56463ff7  libmecab.1.0.0.dylib (779.24.1) <A8D0379B-85FA-3B3D-89ED-5CF2C3826AB2> /usr/lib/libmecab.1.0.0.dylib
    0x7fff56464000 -     0x7fff56668fff  libmecabra.dylib (779.24.1) <D71F71E0-30E2-3DB3-B636-7DE13D51FB4B> /usr/lib/libmecabra.dylib
    0x7fff56840000 -     0x7fff56b91ff7  libnetwork.dylib (1229.250.15) <72C7E9E3-B2BE-3300-BE1B-64606222022C> /usr/lib/libnetwork.dylib
    0x7fff56c23000 -     0x7fff573a8fdf  libobjc.A.dylib (756.2) <7C312627-43CB-3234-9324-4DEA92D59F50> /usr/lib/libobjc.A.dylib
    0x7fff573ba000 -     0x7fff573beffb  libpam.2.dylib (22.200.1) <586CF87F-349C-393D-AEEB-FB75F94A5EB7> /usr/lib/libpam.2.dylib
    0x7fff573c1000 -     0x7fff573f6fff  libpcap.A.dylib (79.250.1) <C0893641-7DFF-3A33-BDAE-190FF54837E8> /usr/lib/libpcap.A.dylib
    0x7fff5750f000 -     0x7fff57527ffb  libresolv.9.dylib (65.200.2) <893142A5-F153-3437-A22D-407EE542B5C5> /usr/lib/libresolv.9.dylib
    0x7fff57529000 -     0x7fff57564ff3  libsandbox.1.dylib (851.270.1) <04B924EF-2385-34DF-807E-93AAD9EF3AAB> /usr/lib/libsandbox.1.dylib
    0x7fff57578000 -     0x7fff57579ff7  libspindump.dylib (267.3) <A584E403-8C95-3841-9C16-E22664A5A63F> /usr/lib/libspindump.dylib
    0x7fff5757a000 -     0x7fff57757fff  libsqlite3.dylib (274.26) <6404BA3B-BCA4-301F-B2FE-8776105A2AA3> /usr/lib/libsqlite3.dylib
    0x7fff57970000 -     0x7fff57973ff7  libutil.dylib (51.200.4) <CE9B18C9-66ED-32D4-9D29-01F8FCB467B0> /usr/lib/libutil.dylib
    0x7fff57974000 -     0x7fff57981fff  libxar.1.dylib (417.1) <39CCF46B-C81A-34B1-92A1-58C4E5DA846E> /usr/lib/libxar.1.dylib
    0x7fff57986000 -     0x7fff57a68ff3  libxml2.2.dylib (32.10) <AA4E1B1F-0FDE-3274-9FA5-75446298D1AC> /usr/lib/libxml2.2.dylib
    0x7fff57a69000 -     0x7fff57a91ff3  libxslt.1.dylib (16.5) <E330D3A2-E32B-378A-973E-A8D245C0F712> /usr/lib/libxslt.1.dylib
    0x7fff57a92000 -     0x7fff57aa4ff7  libz.1.dylib (70.200.4) <B048FC1F-058F-3A08-A1FE-81D5308CB3E6> /usr/lib/libz.1.dylib
    0x7fff58288000 -     0x7fff5828cff3  libcache.dylib (81) <1987D1E1-DB11-3291-B12A-EBD55848E02D> /usr/lib/system/libcache.dylib
    0x7fff5828d000 -     0x7fff58297ff3  libcommonCrypto.dylib (60118.250.2) <1765BB6E-6784-3653-B16B-CB839721DC9A> /usr/lib/system/libcommonCrypto.dylib
    0x7fff58298000 -     0x7fff5829fff7  libcompiler_rt.dylib (63.4) <5212BA7B-B7EA-37B4-AF6E-AC4F507EDFB8> /usr/lib/system/libcompiler_rt.dylib
    0x7fff582a0000 -     0x7fff582a9ff7  libcopyfile.dylib (146.250.1) <98CD00CD-9B91-3B5C-A9DB-842638050FA8> /usr/lib/system/libcopyfile.dylib
    0x7fff582aa000 -     0x7fff5832efc3  libcorecrypto.dylib (602.260.2) <01464D24-570C-3B83-9D18-467769E0FCDD> /usr/lib/system/libcorecrypto.dylib
    0x7fff583b5000 -     0x7fff583eeff7  libdispatch.dylib (1008.270.1) <97273678-E94C-3C8C-89F6-2E2020F4B43B> /usr/lib/system/libdispatch.dylib
    0x7fff583ef000 -     0x7fff5841bff7  libdyld.dylib (655.1.1) <002418CC-AD11-3D10-865B-015591D24E6C> /usr/lib/system/libdyld.dylib
    0x7fff5841c000 -     0x7fff5841cffb  libkeymgr.dylib (30) <0D0F9CA2-8D5A-3273-8723-59987B5827F2> /usr/lib/system/libkeymgr.dylib
    0x7fff5841d000 -     0x7fff58429ff3  libkxld.dylib (4903.271.2) <FBF128C8-D3F0-36B6-983A-A63B8A3E0E52> /usr/lib/system/libkxld.dylib
    0x7fff5842a000 -     0x7fff5842aff7  liblaunch.dylib (1336.261.2) <2B07E27E-D404-3E98-9D28-BCA641E5C479> /usr/lib/system/liblaunch.dylib
    0x7fff5842b000 -     0x7fff58430fff  libmacho.dylib (927.0.3) <A377D608-77AB-3F6E-90F0-B4F251A5C12F> /usr/lib/system/libmacho.dylib
    0x7fff58431000 -     0x7fff58433ffb  libquarantine.dylib (86.220.1) <6D0BC770-7348-3608-9254-F7FFBD347634> /usr/lib/system/libquarantine.dylib
    0x7fff58434000 -     0x7fff58435ff7  libremovefile.dylib (45.200.2) <9FBEB2FF-EEBE-31BC-BCFC-C71F8D0E99B6> /usr/lib/system/libremovefile.dylib
    0x7fff58436000 -     0x7fff5844dff3  libsystem_asl.dylib (356.200.4) <A62A7249-38B8-33FA-9875-F1852590796C> /usr/lib/system/libsystem_asl.dylib
    0x7fff5844e000 -     0x7fff5844eff7  libsystem_blocks.dylib (73) <A453E8EE-860D-3CED-B5DC-BE54E9DB4348> /usr/lib/system/libsystem_blocks.dylib
    0x7fff5844f000 -     0x7fff584d6fff  libsystem_c.dylib (1272.250.1) <7EDACF78-2FA3-35B8-B051-D70475A35117> /usr/lib/system/libsystem_c.dylib
    0x7fff584d7000 -     0x7fff584daffb  libsystem_configuration.dylib (963.270.3) <2B4A836D-68A4-33E6-8D48-CD4486B03387> /usr/lib/system/libsystem_configuration.dylib
    0x7fff584db000 -     0x7fff584deff7  libsystem_coreservices.dylib (66) <719F75A4-74C5-3BA6-A09E-0C5A3E5889D7> /usr/lib/system/libsystem_coreservices.dylib
    0x7fff584df000 -     0x7fff584e5fff  libsystem_darwin.dylib (1272.250.1) <EC9B39A5-9592-3577-8997-7DC721D20D8C> /usr/lib/system/libsystem_darwin.dylib
    0x7fff584e6000 -     0x7fff584ecff7  libsystem_dnssd.dylib (878.270.2) <E9A5ACCF-E35F-3909-AF0A-2A37CD217276> /usr/lib/system/libsystem_dnssd.dylib
    0x7fff584ed000 -     0x7fff58538ffb  libsystem_info.dylib (517.200.9) <D09D5AE0-2FDC-3A6D-93EC-729F931B1457> /usr/lib/system/libsystem_info.dylib
    0x7fff58539000 -     0x7fff58561ff7  libsystem_kernel.dylib (4903.271.2) <EA204E3C-870B-30DD-B4AF-D1BB66420D14> /usr/lib/system/libsystem_kernel.dylib
    0x7fff58562000 -     0x7fff585adff7  libsystem_m.dylib (3158.200.7) <F19B6DB7-014F-3820-831F-389CCDA06EF6> /usr/lib/system/libsystem_m.dylib
    0x7fff585ae000 -     0x7fff585d8fff  libsystem_malloc.dylib (166.270.1) <011F3AD0-8E6A-3A89-AE64-6E5F6840F30A> /usr/lib/system/libsystem_malloc.dylib
    0x7fff585d9000 -     0x7fff585e3ff7  libsystem_networkextension.dylib (767.250.2) <FF06F13A-AEFE-3A27-A073-910EF78AEA36> /usr/lib/system/libsystem_networkextension.dylib
    0x7fff585e4000 -     0x7fff585ebfff  libsystem_notify.dylib (172.200.21) <145B5CFC-CF73-33CE-BD3D-E8DDE268FFDE> /usr/lib/system/libsystem_notify.dylib
    0x7fff585ec000 -     0x7fff585f5fef  libsystem_platform.dylib (177.270.1) <9D1FE5E4-EB7D-3B3F-A8D1-A96D9CF1348C> /usr/lib/system/libsystem_platform.dylib
    0x7fff585f6000 -     0x7fff58600ff7  libsystem_pthread.dylib (330.250.2) <2D5C08FF-484F-3D59-9132-CE1DCB3F76D7> /usr/lib/system/libsystem_pthread.dylib
    0x7fff58601000 -     0x7fff58604ff7  libsystem_sandbox.dylib (851.270.1) <9494594B-5199-3186-82AB-5FF8BED6EE16> /usr/lib/system/libsystem_sandbox.dylib
    0x7fff58605000 -     0x7fff58607ff3  libsystem_secinit.dylib (30.260.2) <EF1EA47B-7B22-35E8-BD9B-F7003DCB96AE> /usr/lib/system/libsystem_secinit.dylib
    0x7fff58608000 -     0x7fff5860fff3  libsystem_symptoms.dylib (820.267.1) <03F1C2DD-0F5A-3D9D-88F6-B26C0F94EB52> /usr/lib/system/libsystem_symptoms.dylib
    0x7fff58610000 -     0x7fff58625fff  libsystem_trace.dylib (906.260.1) <FC761C3B-5434-3A52-912D-F1B15FAA8EB2> /usr/lib/system/libsystem_trace.dylib
    0x7fff58627000 -     0x7fff5862cffb  libunwind.dylib (35.4) <24A97A67-F017-3CFC-B0D0-6BD0224B1336> /usr/lib/system/libunwind.dylib
    0x7fff5862d000 -     0x7fff5865cfff  libxpc.dylib (1336.261.2) <7DEE2300-6D8E-3C00-9C63-E3E80D56B0C4> /usr/lib/system/libxpc.dylib

External Modification Summary:
  Calls made by other processes targeting this process:
    task_for_pid: 1
    thread_create: 0
    thread_set_state: 0
  Calls made by this process:
    task_for_pid: 0
    thread_create: 0
    thread_set_state: 0
  Calls made by all processes on this machine:
    task_for_pid: 5163
    thread_create: 0
    thread_set_state: 0

VM Region Summary:
ReadOnly portion of Libraries: Total=538.1M resident=0K(0%) swapped_out_or_unallocated=538.1M(100%)
Writable regions: Total=351.4M written=0K(0%) resident=0K(0%) swapped_out=0K(0%) unallocated=351.4M(100%)
 
                                VIRTUAL   REGION 
REGION TYPE                        SIZE    COUNT (non-coalesced) 
===========                     =======  ======= 
Accelerate framework               512K        4 
Activity Tracing                   256K        1 
CG backing stores                 1160K        2 
CG image                            52K        6 
CoreAnimation                      196K        8 
CoreGraphics                         8K        1 
CoreImage                           28K        3 
CoreUI image data                  868K       11 
CoreUI image file                  416K        5 
Dispatch continuations            16.0M        1 
Foundation                           4K        1 
IOKit                             7940K        1 
Kernel Alloc Once                   12K        2 
MALLOC                            96.4M       40 
MALLOC guard page                   32K        7 
Memory Tag 242                      12K        1 
Memory Tag 255                   135.1M       40 
PROTECTED_MEMORY                     4K        1 
STACK GUARD                       56.1M       32 
Stack                            217.8M       33 
VM_ALLOCATE                       9460K       18 
__DATA                            38.0M      307 
__FONT_DATA                          4K        1 
__LINKEDIT                       224.8M       10 
__TEXT                           313.3M      311 
__UNICODE                          564K        1 
mapped file                       75.8M       31 
shared memory                      680K       14 
===========                     =======  ======= 
TOTAL                              1.2G      893 

Model: MacBookPro15,2, BootROM 220.270.99.0.0 (iBridge: 16.16.6571.0.0,0), 4 processors, Intel Core i7, 2,8 GHz, 16 GB, SMC 
Graphics: kHW_IntelIrisGraphics655Item, Intel Iris Plus Graphics 655, spdisplays_builtin
Memory Module: BANK 0/ChannelA-DIMM0, 8 GB, LPDDR3, 2133 MHz, Micron, -
Memory Module: BANK 2/ChannelB-DIMM0, 8 GB, LPDDR3, 2133 MHz, Micron, -
AirPort: spairport_wireless_card_type_airport_extreme (0x14E4, 0x7BF), wl0: Mar 28 2019 19:17:52 version 9.137.9.0.32.6.34 FWID 01-36f56c94
Bluetooth: Version 6.0.14d3, 3 services, 27 devices, 1 incoming serial ports
Network Service: Wi-Fi, AirPort, en0
USB Device: USB 3.1 Bus
USB Device: iBridge Bus
USB Device: iBridge DFR brightness
USB Device: iBridge Display
USB Device: Apple Internal Keyboard / Trackpad
USB Device: Headset
USB Device: iBridge ALS
USB Device: iBridge FaceTime HD Camera (Built-in)
USB Device: iBridge
Thunderbolt Bus: MacBook Pro, Apple Inc., 41.2
Thunderbolt Bus: MacBook Pro, Apple Inc., 41.2
```
