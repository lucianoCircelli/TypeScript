Input::
//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/user/username/projects/myproject/index.ts]
let compiler = new Compiler(); for (let i = 0; j < 5; i++) {}

//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{"module":"commonjs"},"files":["index.ts"]}


fileExists:: {} 

directoryExists:: {} 

getModifiedTimes:: {} 

setModifiedTimes:: {} 

/a/lib/tsc.js --w --p /user/username/projects/myproject/tsconfig.json
Output::
>> Screen clear
[[90m12:00:21 AM[0m] Starting compilation in watch mode...

[96mindex.ts[0m:[93m1[0m:[93m20[0m - [91merror[0m[90m TS2552: [0mCannot find name 'Compiler'. Did you mean 'compiler'?

[7m1[0m let compiler = new Compiler(); for (let i = 0; j < 5; i++) {}
[7m [0m [91m                   ~~~~~~~~[0m

  [96mindex.ts[0m:[93m1[0m:[93m5[0m
    [7m1[0m let compiler = new Compiler(); for (let i = 0; j < 5; i++) {}
    [7m [0m [96m    ~~~~~~~~[0m
    'compiler' is declared here.

[96mindex.ts[0m:[93m1[0m:[93m48[0m - [91merror[0m[90m TS2304: [0mCannot find name 'j'.

[7m1[0m let compiler = new Compiler(); for (let i = 0; j < 5; i++) {}
[7m [0m [91m                                               ~[0m

[[90m12:00:24 AM[0m] Found 2 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/index.ts"]
Program options: {"module":1,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/index.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/index.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/index.ts (used version)

WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/index.ts:
  {"fileName":"/user/username/projects/myproject/index.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/index.js]
var compiler = new Compiler();
for (var i = 0; j < 5; i++) { }



fileExists:: {} 

directoryExists:: {
 "/user/username/projects/myproject/node_modules/@types": 1,
 "/user/username/projects/node_modules/@types": 1,
 "/user/username/node_modules/@types": 1,
 "/user/node_modules/@types": 1,
 "/node_modules/@types": 1
} 

getModifiedTimes:: {} 

setModifiedTimes:: {} 
