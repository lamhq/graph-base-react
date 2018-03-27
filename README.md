# React Blog Frontend

## Introduction

ReactJs source code for React Blog project

## Requirements

- [Node.js](https://nodejs.org/) v8.9 or newer
- [Yarn](https://yarnpkg.com/) package or newer

## Setup

``` bash
yarn install
yarn run
```

## Directory Layout

**The directory layout of this source code should be refactored as below:**

```
.
├── /.vscode/                   # contain workspace visual studio code setting
├── /src/                       # application's source code
│   ├── App.jsx                 # root component
│   ├── index.html              # html template file for HtmlWebpackPlugin
│   ├── index.jsx               # webpack entry point
│   ├── reducers.js             # root redux reducer
│   ├── sagas.js                # root redux saga
│   ├── store.js                # redux store
│   ├── /common/                # reusable code for all projects
│   └── /admin/                 # custom module, contain codes related to admin area
│       ├── /login/             # sub module, contain codes related to login page
│       ├── /profile/           # sub module, contain codes related to update profile page
│       ├── /components/        # reactjs components
│       ├── /constants/         # pre-defined constants, redux action types
│       ├── /actions.js         # contains redux action creator functions
│       ├── /reducers.js        # redux reducer
│       ├── /sagas.js           # redux-saga code
│       ├── /helpers.js         # custom javascript functions
│       └── ...                 # any files specific to the technology we use
├── /node_modules/              # 3rd-party libraries and utilities
├── .babelrc                    # babel configuration file
├── .eslintrc.json              # eslint config file
├── .gitignore                  # gitignore file
├── package.json                # contains 3rd party libraries and utilities
├── webpack.common.js           # shared webpack configuration for both development & production
├── webpack.dev.js              # Webpack configuration for development
└── webpack.prod.js             # Webpack configuration for production
```

## How should i write code?

Please refer to [Code Standard](https://the-app-team.atlassian.net/wiki/spaces/CI/pages/33521966/Code+Standards) documentation here.