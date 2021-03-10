# GraphQL로 영화 API 만들기 - typescript 버전

노마드 코더 GraphQL로 영화 API 만들기 강의를 2년전쯤에 수강했었는데 오랫동안 사용하지 않아서 기억이 잘 나지 않는다.<br>이번에 다시 들으면서 공부할건데 typescript 버전으로 바꿔서 진행할 예정.

## Set up

package.json 생성

```
yarn init -y
```

tsconfig.json 생성

```
tsc --init
```

package.json

```
{
  "name": "movieql",
  "version": "1.0.0",
  "description": "Movie API with Graphql",
  "main": "index.js",
  "author": "heeyou",
  "license": "MIT",
  "dependencies": {
    "@types/ws": "^7.4.0",
    "concurrently": "^6.0.0",
    "graphql-yoga": "^1.18.3",
    "nodemon": "^2.0.7"
  },
  "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon --exec babel-node build/index.js",
    "start": "concurrently yarn:start:*"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-stage-3": "^6.24.1"
  }
}

```

tsconfig.json

```
{
  "compilerOptions": {
    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
     "outDir": "./build",                        /* Redirect output structure to the directory. */
     "rootDir": "./src",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true,                           /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
  }
}

```

## Creating a GraphQL Server with GraphQL Yoga

### babel 환경설정

.babelrc

```
{
  "presets": ["env", "stage-3"]
}
```

최신 es6로 코드작성이 가능하다.

## Creating the first Query and Resolver

> Schema는 내가 받거나 줄 정보에 대한 서술

- schema.graphql : 사용자가 뭘 할지에 대해 정의
- Query: Database로 부터 정보를 얻는 것
- Mutation: 서버 혹은 Database에서 메모리에서 정보를 바꾸는 작업을 할 때

src/graphql/schema.graphql

```
type Query {
  name: String!
}

```

- !의 의미는 해당 필드가 null일 수 없다는 것을 의미한다.

  src/graphql/resolvers.ts

```
const resolvers = {
  Query: {
    name: () => 'heeyou',
  },
};

export default resolvers;

```

src/index.ts

```
import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
  typeDefs: 'src/graphql/schema.graphql',
  resolvers,
});

server.start(() => console.log('Graphql Server Running'));
```

- http://localhost:4000 으로 접속하면 playground에서 결과를 확인할 수 있다.
- graphql-yoga: fully featured GraphQL Server with focus on easy setup, performance & great developer experience.

```
query {
  name
}
```

결과

```
{
  "data": {
    "name": "heeyou"
  }
}
```
