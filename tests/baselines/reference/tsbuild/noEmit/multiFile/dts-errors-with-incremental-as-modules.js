currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/home/src/projects/project/a.ts]
export const a = class { private p = 10; };

//// [/home/src/projects/project/b.ts]
export const b = 10;

//// [/home/src/projects/project/tsconfig.json]
{
  "compilerOptions": {
    "incremental": true,
    "declaration": true
  }
}

//// [/lib/lib.d.ts]
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



Output::
/lib/tsc --b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because output file 'home/src/projects/project/tsconfig.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

[96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m14[0m - [91merror[0m[90m TS4094: [0mProperty 'p' of exported class expression may not be private or protected.

[7m1[0m export const a = class { private p = 10; };
[7m [0m [91m             ~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/home/src/projects/project/a.ts",
  "/home/src/projects/project/b.ts"
]
Program options: {
  "incremental": true,
  "declaration": true,
  "noEmit": true,
  "tscBuild": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/home/src/projects/project/a.ts
/home/src/projects/project/b.ts

Semantic diagnostics in builder refreshed for::
/lib/lib.d.ts
/home/src/projects/project/a.ts
/home/src/projects/project/b.ts

Shape signatures in builder refreshed for::
/lib/lib.d.ts (used version)
/home/src/projects/project/a.ts (used version)
/home/src/projects/project/b.ts (used version)


//// [/home/src/projects/project/tsconfig.tsbuildinfo]
{"fileNames":["../../../../lib/lib.d.ts","./a.ts","./b.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-9502176711-export const a = class { private p = 10; };","-13368947479-export const b = 10;"],"root":[2,3],"options":{"declaration":true},"emitDiagnosticsPerFile":[[2,[{"start":13,"length":1,"messageText":"Property 'p' of exported class expression may not be private or protected.","category":1,"code":4094}]]],"affectedFilesPendingEmit":[[2,17],[3,17]],"version":"FakeTSVersion"}

//// [/home/src/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../../lib/lib.d.ts",
    "./a.ts",
    "./b.ts"
  ],
  "fileInfos": {
    "../../../../lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "./a.ts": {
      "version": "-9502176711-export const a = class { private p = 10; };",
      "signature": "-9502176711-export const a = class { private p = 10; };"
    },
    "./b.ts": {
      "version": "-13368947479-export const b = 10;",
      "signature": "-13368947479-export const b = 10;"
    }
  },
  "root": [
    [
      2,
      "./a.ts"
    ],
    [
      3,
      "./b.ts"
    ]
  ],
  "options": {
    "declaration": true
  },
  "emitDiagnosticsPerFile": [
    [
      "./a.ts",
      [
        {
          "start": 13,
          "length": 1,
          "messageText": "Property 'p' of exported class expression may not be private or protected.",
          "category": 1,
          "code": 4094
        }
      ]
    ]
  ],
  "affectedFilesPendingEmit": [
    [
      [
        "./a.ts",
        17
      ],
      "Js | DtsEmit"
    ],
    [
      [
        "./b.ts",
        17
      ],
      "Js | DtsEmit"
    ]
  ],
  "version": "FakeTSVersion",
  "size": 933
}



Change:: no-change-run
Input::


Output::
/lib/tsc --b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because buildinfo file 'home/src/projects/project/tsconfig.tsbuildinfo' indicates that program needs to report errors.

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

[96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m14[0m - [91merror[0m[90m TS4094: [0mProperty 'p' of exported class expression may not be private or protected.

[7m1[0m export const a = class { private p = 10; };
[7m [0m [91m             ~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/home/src/projects/project/a.ts",
  "/home/src/projects/project/b.ts"
]
Program options: {
  "incremental": true,
  "declaration": true,
  "noEmit": true,
  "tscBuild": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/home/src/projects/project/a.ts
/home/src/projects/project/b.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::




Change:: Fix error
Input::
//// [/home/src/projects/project/a.ts]
export const a = "hello";



Output::
/lib/tsc --b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because buildinfo file 'home/src/projects/project/tsconfig.tsbuildinfo' indicates that program needs to report errors.

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

exitCode:: ExitStatus.Success
Program root files: [
  "/home/src/projects/project/a.ts",
  "/home/src/projects/project/b.ts"
]
Program options: {
  "incremental": true,
  "declaration": true,
  "noEmit": true,
  "tscBuild": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/home/src/projects/project/a.ts
/home/src/projects/project/b.ts

Semantic diagnostics in builder refreshed for::
/home/src/projects/project/a.ts

Shape signatures in builder refreshed for::
/home/src/projects/project/a.ts (computed .d.ts)


//// [/home/src/projects/project/tsconfig.tsbuildinfo]
{"fileNames":["../../../../lib/lib.d.ts","./a.ts","./b.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-16641552193-export const a = \"hello\";","signature":"-2692717255-export declare const a = \"hello\";\n"},"-13368947479-export const b = 10;"],"root":[2,3],"options":{"declaration":true},"affectedFilesPendingEmit":[[2,17],[3,17]],"version":"FakeTSVersion"}

//// [/home/src/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../../lib/lib.d.ts",
    "./a.ts",
    "./b.ts"
  ],
  "fileInfos": {
    "../../../../lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "./a.ts": {
      "original": {
        "version": "-16641552193-export const a = \"hello\";",
        "signature": "-2692717255-export declare const a = \"hello\";\n"
      },
      "version": "-16641552193-export const a = \"hello\";",
      "signature": "-2692717255-export declare const a = \"hello\";\n"
    },
    "./b.ts": {
      "version": "-13368947479-export const b = 10;",
      "signature": "-13368947479-export const b = 10;"
    }
  },
  "root": [
    [
      2,
      "./a.ts"
    ],
    [
      3,
      "./b.ts"
    ]
  ],
  "options": {
    "declaration": true
  },
  "affectedFilesPendingEmit": [
    [
      [
        "./a.ts",
        17
      ],
      "Js | DtsEmit"
    ],
    [
      [
        "./b.ts",
        17
      ],
      "Js | DtsEmit"
    ]
  ],
  "version": "FakeTSVersion",
  "size": 821
}



Change:: no-change-run
Input::


Output::
/lib/tsc --b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is up to date because newest input 'home/src/projects/project/a.ts' is older than output 'home/src/projects/project/tsconfig.tsbuildinfo'

exitCode:: ExitStatus.Success




Change:: Emit after fixing error
Input::


Output::
/lib/tsc --b --v /home/src/projects/project
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because buildinfo file 'home/src/projects/project/tsconfig.tsbuildinfo' indicates that some of the changes were not emitted

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

exitCode:: ExitStatus.Success
Program root files: [
  "/home/src/projects/project/a.ts",
  "/home/src/projects/project/b.ts"
]
Program options: {
  "incremental": true,
  "declaration": true,
  "tscBuild": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/home/src/projects/project/a.ts
/home/src/projects/project/b.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::


//// [/home/src/projects/project/a.d.ts]
export declare const a = "hello";


//// [/home/src/projects/project/a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
exports.a = "hello";


//// [/home/src/projects/project/b.d.ts]
export declare const b = 10;


//// [/home/src/projects/project/b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = void 0;
exports.b = 10;


//// [/home/src/projects/project/tsconfig.tsbuildinfo]
{"fileNames":["../../../../lib/lib.d.ts","./a.ts","./b.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-16641552193-export const a = \"hello\";","signature":"-2692717255-export declare const a = \"hello\";\n"},{"version":"-13368947479-export const b = 10;","signature":"-3829150557-export declare const b = 10;\n"}],"root":[2,3],"options":{"declaration":true},"version":"FakeTSVersion"}

//// [/home/src/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../../lib/lib.d.ts",
    "./a.ts",
    "./b.ts"
  ],
  "fileInfos": {
    "../../../../lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "./a.ts": {
      "original": {
        "version": "-16641552193-export const a = \"hello\";",
        "signature": "-2692717255-export declare const a = \"hello\";\n"
      },
      "version": "-16641552193-export const a = \"hello\";",
      "signature": "-2692717255-export declare const a = \"hello\";\n"
    },
    "./b.ts": {
      "original": {
        "version": "-13368947479-export const b = 10;",
        "signature": "-3829150557-export declare const b = 10;\n"
      },
      "version": "-13368947479-export const b = 10;",
      "signature": "-3829150557-export declare const b = 10;\n"
    }
  },
  "root": [
    [
      2,
      "./a.ts"
    ],
    [
      3,
      "./b.ts"
    ]
  ],
  "options": {
    "declaration": true
  },
  "version": "FakeTSVersion",
  "size": 847
}



Change:: no-change-run
Input::


Output::
/lib/tsc --b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is up to date because newest input 'home/src/projects/project/a.ts' is older than output 'home/src/projects/project/tsconfig.tsbuildinfo'

exitCode:: ExitStatus.Success




Change:: Introduce error
Input::
//// [/home/src/projects/project/a.ts]
export const a = class { private p = 10; };



Output::
/lib/tsc --b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because output 'home/src/projects/project/tsconfig.tsbuildinfo' is older than input 'home/src/projects/project/a.ts'

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

[96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m14[0m - [91merror[0m[90m TS4094: [0mProperty 'p' of exported class expression may not be private or protected.

[7m1[0m export const a = class { private p = 10; };
[7m [0m [91m             ~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/home/src/projects/project/a.ts",
  "/home/src/projects/project/b.ts"
]
Program options: {
  "incremental": true,
  "declaration": true,
  "noEmit": true,
  "tscBuild": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/home/src/projects/project/a.ts
/home/src/projects/project/b.ts

Semantic diagnostics in builder refreshed for::
/home/src/projects/project/a.ts

Shape signatures in builder refreshed for::
/home/src/projects/project/a.ts (computed .d.ts)


//// [/home/src/projects/project/tsconfig.tsbuildinfo]
{"fileNames":["../../../../lib/lib.d.ts","./a.ts","./b.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-9502176711-export const a = class { private p = 10; };","signature":"-7147472585-export declare const a: {\n    new (): {\n        p: number;\n    };\n};\n(13,1)Error4094: Property 'p' of exported class expression may not be private or protected."},{"version":"-13368947479-export const b = 10;","signature":"-3829150557-export declare const b = 10;\n"}],"root":[2,3],"options":{"declaration":true},"emitDiagnosticsPerFile":[[2,[{"start":13,"length":1,"messageText":"Property 'p' of exported class expression may not be private or protected.","category":1,"code":4094}]]],"affectedFilesPendingEmit":[[2,17]],"version":"FakeTSVersion"}

//// [/home/src/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../../lib/lib.d.ts",
    "./a.ts",
    "./b.ts"
  ],
  "fileInfos": {
    "../../../../lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "./a.ts": {
      "original": {
        "version": "-9502176711-export const a = class { private p = 10; };",
        "signature": "-7147472585-export declare const a: {\n    new (): {\n        p: number;\n    };\n};\n(13,1)Error4094: Property 'p' of exported class expression may not be private or protected."
      },
      "version": "-9502176711-export const a = class { private p = 10; };",
      "signature": "-7147472585-export declare const a: {\n    new (): {\n        p: number;\n    };\n};\n(13,1)Error4094: Property 'p' of exported class expression may not be private or protected."
    },
    "./b.ts": {
      "original": {
        "version": "-13368947479-export const b = 10;",
        "signature": "-3829150557-export declare const b = 10;\n"
      },
      "version": "-13368947479-export const b = 10;",
      "signature": "-3829150557-export declare const b = 10;\n"
    }
  },
  "root": [
    [
      2,
      "./a.ts"
    ],
    [
      3,
      "./b.ts"
    ]
  ],
  "options": {
    "declaration": true
  },
  "emitDiagnosticsPerFile": [
    [
      "./a.ts",
      [
        {
          "start": 13,
          "length": 1,
          "messageText": "Property 'p' of exported class expression may not be private or protected.",
          "category": 1,
          "code": 4094
        }
      ]
    ]
  ],
  "affectedFilesPendingEmit": [
    [
      [
        "./a.ts",
        17
      ],
      "Js | DtsEmit"
    ]
  ],
  "version": "FakeTSVersion",
  "size": 1199
}



Change:: Emit when error
Input::


Output::
/lib/tsc --b --v /home/src/projects/project
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because buildinfo file 'home/src/projects/project/tsconfig.tsbuildinfo' indicates that program needs to report errors.

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

[96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m14[0m - [91merror[0m[90m TS4094: [0mProperty 'p' of exported class expression may not be private or protected.

[7m1[0m export const a = class { private p = 10; };
[7m [0m [91m             ~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/home/src/projects/project/a.ts",
  "/home/src/projects/project/b.ts"
]
Program options: {
  "incremental": true,
  "declaration": true,
  "tscBuild": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/home/src/projects/project/a.ts
/home/src/projects/project/b.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::


//// [/home/src/projects/project/a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
exports.a = /** @class */ (function () {
    function class_1() {
        this.p = 10;
    }
    return class_1;
}());


//// [/home/src/projects/project/tsconfig.tsbuildinfo]
{"fileNames":["../../../../lib/lib.d.ts","./a.ts","./b.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-9502176711-export const a = class { private p = 10; };","signature":"-7147472585-export declare const a: {\n    new (): {\n        p: number;\n    };\n};\n(13,1)Error4094: Property 'p' of exported class expression may not be private or protected."},{"version":"-13368947479-export const b = 10;","signature":"-3829150557-export declare const b = 10;\n"}],"root":[2,3],"options":{"declaration":true},"emitDiagnosticsPerFile":[[2,[{"start":13,"length":1,"messageText":"Property 'p' of exported class expression may not be private or protected.","category":1,"code":4094}]]],"version":"FakeTSVersion"}

//// [/home/src/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../../lib/lib.d.ts",
    "./a.ts",
    "./b.ts"
  ],
  "fileInfos": {
    "../../../../lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "./a.ts": {
      "original": {
        "version": "-9502176711-export const a = class { private p = 10; };",
        "signature": "-7147472585-export declare const a: {\n    new (): {\n        p: number;\n    };\n};\n(13,1)Error4094: Property 'p' of exported class expression may not be private or protected."
      },
      "version": "-9502176711-export const a = class { private p = 10; };",
      "signature": "-7147472585-export declare const a: {\n    new (): {\n        p: number;\n    };\n};\n(13,1)Error4094: Property 'p' of exported class expression may not be private or protected."
    },
    "./b.ts": {
      "original": {
        "version": "-13368947479-export const b = 10;",
        "signature": "-3829150557-export declare const b = 10;\n"
      },
      "version": "-13368947479-export const b = 10;",
      "signature": "-3829150557-export declare const b = 10;\n"
    }
  },
  "root": [
    [
      2,
      "./a.ts"
    ],
    [
      3,
      "./b.ts"
    ]
  ],
  "options": {
    "declaration": true
  },
  "emitDiagnosticsPerFile": [
    [
      "./a.ts",
      [
        {
          "start": 13,
          "length": 1,
          "messageText": "Property 'p' of exported class expression may not be private or protected.",
          "category": 1,
          "code": 4094
        }
      ]
    ]
  ],
  "version": "FakeTSVersion",
  "size": 1163
}



Change:: no-change-run
Input::


Output::
/lib/tsc --b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because buildinfo file 'home/src/projects/project/tsconfig.tsbuildinfo' indicates that program needs to report errors.

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

[96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m14[0m - [91merror[0m[90m TS4094: [0mProperty 'p' of exported class expression may not be private or protected.

[7m1[0m export const a = class { private p = 10; };
[7m [0m [91m             ~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/home/src/projects/project/a.ts",
  "/home/src/projects/project/b.ts"
]
Program options: {
  "incremental": true,
  "declaration": true,
  "noEmit": true,
  "tscBuild": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/home/src/projects/project/a.ts
/home/src/projects/project/b.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::


