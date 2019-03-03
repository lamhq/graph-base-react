# GraphQL Boilerplate React

## Introduction

GraphQL base source code for ReactJs project

## Requirements

- [Node.js](https://nodejs.org/) v8.9 or newer
- [Yarn](https://yarnpkg.com/) package or newer

## Setup

``` bash
yarn
yarn start
```

## Directory Layout

**The directory layout of this source code should be refactored as below:**

```
.
├── /.vscode/                   # contain workspace visual studio code setting
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # application's source code
│   ├── App.jsx                 # root component
│   ├── index.html              # html template file for HtmlWebpackPlugin
│   ├── index.jsx               # webpack entry point
│   ├── reducers.js             # root redux reducer
│   ├── sagas.js                # root redux saga
│   ├── store.js                # redux store
│   ├── /common/                # reusable code for all projects
│   └── /admin/                 # custom module, contain codes related to admin area
│       ├── /login/             # sub module, contain codes related to login feature
│       ├── /profile/           # sub module, contain codes related to update profile feature
│       ├── /components/        # shared components of admin module
│       ├── /constants/         # pre-defined constants, (redux) action types
│       ├── /actions.js         # contains (redux) action creator functions
│       ├── /reducers.js        # redux reducer
│       ├── /sagas.js           # redux-saga code
│       ├── /utils.js           # custom javascript functions
│       └── ...                 # any files specific to the technology we use
├── .babelrc                    # babel configuration file
├── .eslintrc.json              # eslint config file
├── .gitignore                  # gitignore file
├── package.json                # contains 3rd party libraries and utilities
├── README.md                   # project overview and setup instructions
├── webpack.common.js           # shared webpack configuration for both development & production
├── webpack.dev.js              # Webpack configuration for development
├── webpack.prod.js             # Webpack configuration for production
└── yarn.lock                   # specify exactly which versions of each dependency were installed
```

## What's Included?

- [x] React 16.6
- [x] Webpack 4 configured for both development and production
- [x] Less css supported
- [x] CSS module enabled with sourcemaps
- [x] Hot module replacement (HRM) enabled
- [x] Ant Design UI framework
- [x] Redux, Redux DevTools, Redux-Saga, React Router 4, React Router Redux integrated
- [x] ESLint configured with Airbnb coding style (you still need to install eslint extension for vscode)
- [x] Feature based project structure