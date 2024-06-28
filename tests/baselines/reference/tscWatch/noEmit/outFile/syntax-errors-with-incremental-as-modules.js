currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/home/src/projects/project/a.ts]
export const a = "hello

//// [/home/src/projects/project/tsconfig.json]
{
  "compilerOptions": {
    "outFile": "../outFile.js",
    "module": "amd",
    "incremental": true,
    "noEmit": true
  }
}

//// [/home/src/projects/project/b.ts]
export const b = 10;

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
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };


/a/lib/tsc.js -p /home/src/projects/project -w
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

[96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m24[0m - [91merror[0m[90m TS1002: [0mUnterminated string literal.

[7m1[0m export const a = "hello
[7m [0m [91m                       [0m

[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.



//// [/home/src/projects/outFile.tsbuildinfo]
{"fileNames":["../../../a/lib/lib.d.ts","./project/a.ts","./project/b.ts"],"fileInfos":["3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","-14000546910-export const a = \"hello","-13368947479-export const b = 10;"],"root":[2,3],"options":{"module":2,"outFile":"./outFile.js"},"changeFileSet":[1,2,3],"version":"FakeTSVersion"}

//// [/home/src/projects/outFile.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../a/lib/lib.d.ts",
    "./project/a.ts",
    "./project/b.ts"
  ],
  "fileInfos": {
    "../../../a/lib/lib.d.ts": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "./project/a.ts": "-14000546910-export const a = \"hello",
    "./project/b.ts": "-13368947479-export const b = 10;"
  },
  "root": [
    [
      2,
      "./project/a.ts"
    ],
    [
      3,
      "./project/b.ts"
    ]
  ],
  "options": {
    "module": 2,
    "outFile": "./outFile.js"
  },
  "changeFileSet": [
    "../../../a/lib/lib.d.ts",
    "./project/a.ts",
    "./project/b.ts"
  ],
  "version": "FakeTSVersion",
  "size": 717
}


PolledWatches::
/home/src/projects/node_modules/@types: *new*
  {"pollingInterval":500}
/home/src/projects/project/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/home/src/projects/project/a.ts: *new*
  {}
/home/src/projects/project/b.ts: *new*
  {}
/home/src/projects/project/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/home/src/projects/project: *new*
  {}

Program root files: [
  "/home/src/projects/project/a.ts",
  "/home/src/projects/project/b.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "module": 2,
  "incremental": true,
  "noEmit": true,
  "project": "/home/src/projects/project",
  "watch": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/home/src/projects/project/a.ts
/home/src/projects/project/b.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::

exitCode:: ExitStatus.undefined

Change:: Fix error

Input::
//// [/home/src/projects/project/a.ts]
export const a = "hello";


Timeout callback:: count: 1
1: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
1: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/home/src/projects/outFile.tsbuildinfo]
{"fileNames":["../../../a/lib/lib.d.ts","./project/a.ts","./project/b.ts"],"fileInfos":["3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","-16641552193-export const a = \"hello\";","-13368947479-export const b = 10;"],"root":[2,3],"options":{"module":2,"outFile":"./outFile.js"},"pendingEmit":false,"version":"FakeTSVersion"}

//// [/home/src/projects/outFile.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../a/lib/lib.d.ts",
    "./project/a.ts",
    "./project/b.ts"
  ],
  "fileInfos": {
    "../../../a/lib/lib.d.ts": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "./project/a.ts": "-16641552193-export const a = \"hello\";",
    "./project/b.ts": "-13368947479-export const b = 10;"
  },
  "root": [
    [
      2,
      "./project/a.ts"
    ],
    [
      3,
      "./project/b.ts"
    ]
  ],
  "options": {
    "module": 2,
    "outFile": "./outFile.js"
  },
  "pendingEmit": [
    "Js",
    false
  ],
  "version": "FakeTSVersion",
  "size": 716
}



Program root files: [
  "/home/src/projects/project/a.ts",
  "/home/src/projects/project/b.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "module": 2,
  "incremental": true,
  "noEmit": true,
  "project": "/home/src/projects/project",
  "watch": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/home/src/projects/project/a.ts
/home/src/projects/project/b.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/home/src/projects/project/a.ts
/home/src/projects/project/b.ts

No shapes updated in the builder::

exitCode:: ExitStatus.undefined

Change:: Emit after fixing error

Input::
//// [/home/src/projects/project/tsconfig.json]
{
  "compilerOptions": {
    "outFile": "../outFile.js",
    "module": "amd",
    "incremental": true
  }
}


Timeout callback:: count: 1
2: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
2: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/home/src/projects/outFile.tsbuildinfo]
{"fileNames":["../../../a/lib/lib.d.ts","./project/a.ts","./project/b.ts"],"fileInfos":["3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","-16641552193-export const a = \"hello\";","-13368947479-export const b = 10;"],"root":[2,3],"options":{"module":2,"outFile":"./outFile.js"},"version":"FakeTSVersion"}

//// [/home/src/projects/outFile.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../a/lib/lib.d.ts",
    "./project/a.ts",
    "./project/b.ts"
  ],
  "fileInfos": {
    "../../../a/lib/lib.d.ts": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "./project/a.ts": "-16641552193-export const a = \"hello\";",
    "./project/b.ts": "-13368947479-export const b = 10;"
  },
  "root": [
    [
      2,
      "./project/a.ts"
    ],
    [
      3,
      "./project/b.ts"
    ]
  ],
  "options": {
    "module": 2,
    "outFile": "./outFile.js"
  },
  "version": "FakeTSVersion",
  "size": 696
}

//// [/home/src/projects/outFile.js]
define("a", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.a = void 0;
    exports.a = "hello";
});
define("b", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.b = void 0;
    exports.b = 10;
});




Program root files: [
  "/home/src/projects/project/a.ts",
  "/home/src/projects/project/b.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "module": 2,
  "incremental": true,
  "project": "/home/src/projects/project",
  "watch": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/home/src/projects/project/a.ts
/home/src/projects/project/b.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

exitCode:: ExitStatus.undefined

Change:: no Emit run after fixing error

Input::
//// [/home/src/projects/project/tsconfig.json]
{
  "compilerOptions": {
    "outFile": "../outFile.js",
    "module": "amd",
    "incremental": true,
    "noEmit": true
  }
}


Timeout callback:: count: 1
3: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
3: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.





Program root files: [
  "/home/src/projects/project/a.ts",
  "/home/src/projects/project/b.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "module": 2,
  "incremental": true,
  "noEmit": true,
  "project": "/home/src/projects/project",
  "watch": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/home/src/projects/project/a.ts
/home/src/projects/project/b.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

exitCode:: ExitStatus.undefined

Change:: Introduce error

Input::
//// [/home/src/projects/project/a.ts]
export const a = "hello


Timeout callback:: count: 1
4: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
4: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m24[0m - [91merror[0m[90m TS1002: [0mUnterminated string literal.

[7m1[0m export const a = "hello
[7m [0m [91m                       [0m

[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.



//// [/home/src/projects/outFile.tsbuildinfo]
{"fileNames":["../../../a/lib/lib.d.ts","./project/a.ts","./project/b.ts"],"fileInfos":["3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","-14000546910-export const a = \"hello","-13368947479-export const b = 10;"],"root":[2,3],"options":{"module":2,"outFile":"./outFile.js"},"changeFileSet":[2],"version":"FakeTSVersion"}

//// [/home/src/projects/outFile.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../a/lib/lib.d.ts",
    "./project/a.ts",
    "./project/b.ts"
  ],
  "fileInfos": {
    "../../../a/lib/lib.d.ts": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "./project/a.ts": "-14000546910-export const a = \"hello",
    "./project/b.ts": "-13368947479-export const b = 10;"
  },
  "root": [
    [
      2,
      "./project/a.ts"
    ],
    [
      3,
      "./project/b.ts"
    ]
  ],
  "options": {
    "module": 2,
    "outFile": "./outFile.js"
  },
  "changeFileSet": [
    "./project/a.ts"
  ],
  "version": "FakeTSVersion",
  "size": 713
}



Program root files: [
  "/home/src/projects/project/a.ts",
  "/home/src/projects/project/b.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "module": 2,
  "incremental": true,
  "noEmit": true,
  "project": "/home/src/projects/project",
  "watch": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/home/src/projects/project/a.ts
/home/src/projects/project/b.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::

exitCode:: ExitStatus.undefined

Change:: Emit when error

Input::
//// [/home/src/projects/project/tsconfig.json]
{
  "compilerOptions": {
    "outFile": "../outFile.js",
    "module": "amd",
    "incremental": true
  }
}


Timeout callback:: count: 1
5: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
5: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m24[0m - [91merror[0m[90m TS1002: [0mUnterminated string literal.

[7m1[0m export const a = "hello
[7m [0m [91m                       [0m

[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.



//// [/home/src/projects/outFile.tsbuildinfo]
{"fileNames":["../../../a/lib/lib.d.ts","./project/a.ts","./project/b.ts"],"fileInfos":["3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","-14000546910-export const a = \"hello","-13368947479-export const b = 10;"],"root":[2,3],"options":{"module":2,"outFile":"./outFile.js"},"semanticDiagnosticsPerFile":[1,2,3],"version":"FakeTSVersion"}

//// [/home/src/projects/outFile.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../a/lib/lib.d.ts",
    "./project/a.ts",
    "./project/b.ts"
  ],
  "fileInfos": {
    "../../../a/lib/lib.d.ts": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "./project/a.ts": "-14000546910-export const a = \"hello",
    "./project/b.ts": "-13368947479-export const b = 10;"
  },
  "root": [
    [
      2,
      "./project/a.ts"
    ],
    [
      3,
      "./project/b.ts"
    ]
  ],
  "options": {
    "module": 2,
    "outFile": "./outFile.js"
  },
  "semanticDiagnosticsPerFile": [
    [
      "../../../a/lib/lib.d.ts",
      "not cached or not changed"
    ],
    [
      "./project/a.ts",
      "not cached or not changed"
    ],
    [
      "./project/b.ts",
      "not cached or not changed"
    ]
  ],
  "version": "FakeTSVersion",
  "size": 730
}

//// [/home/src/projects/outFile.js]
define("a", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.a = void 0;
    exports.a = "hello;
});
define("b", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.b = void 0;
    exports.b = 10;
});




Program root files: [
  "/home/src/projects/project/a.ts",
  "/home/src/projects/project/b.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "module": 2,
  "incremental": true,
  "project": "/home/src/projects/project",
  "watch": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/home/src/projects/project/a.ts
/home/src/projects/project/b.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::

exitCode:: ExitStatus.undefined

Change:: no Emit run when error

Input::
//// [/home/src/projects/project/tsconfig.json]
{
  "compilerOptions": {
    "outFile": "../outFile.js",
    "module": "amd",
    "incremental": true,
    "noEmit": true
  }
}


Timeout callback:: count: 1
6: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
6: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m24[0m - [91merror[0m[90m TS1002: [0mUnterminated string literal.

[7m1[0m export const a = "hello
[7m [0m [91m                       [0m

[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.





Program root files: [
  "/home/src/projects/project/a.ts",
  "/home/src/projects/project/b.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "module": 2,
  "incremental": true,
  "noEmit": true,
  "project": "/home/src/projects/project",
  "watch": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/home/src/projects/project/a.ts
/home/src/projects/project/b.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::

exitCode:: ExitStatus.undefined
