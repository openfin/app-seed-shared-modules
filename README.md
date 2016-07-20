#HTML5 and OpenFin modular development
###A guide to building HTML5 webb apps in OpenFin, using ES6, SASS, WebPack and React (optional)

The purpose of this repo is to show the possibility of developing HTML5 and OpenFin apps in a modular way. 

It ustalises ES6 syntax, post-processed through [WebPack](https://webpack.github.io/), to make it possible to write in modules, which may then be imported and incorporated, as required, and therefore shared beween windows and apps.

The project require some setting up and configuring and the steps are explained below and further annotated within the source code itself. The project is, however, set up and ready to run and may be used and modified as an 'app seed' without delving into the minutiae of the setup (although it recommend you do delve and learn). 

React is included in the project but is optional, it could be used as a starting point for 'vanilla' js apps. 

To build the project, clone the GitHub repo and, in a command line terminal (preferably GitBash on a Windows machine), navigate to the root directory and run:

```
$ npm install
```

It is important to add 'core.js' to any 'entry' file(s) - files which will be processed though WebPack - this will allow ES6 features like Object.assign, to be used via polyfills. [https://github.com/zloirock/core-js](https://github.com/zloirock/core-js) .

Add the following code at the head of any 'entry' files. Included sub-modules, imported into the entry file, do not require the polyfill adding.

```
import 'core-js';
```

The app runs on a simple Node/Express server. To start it, navigate to the root of the project in a terminal (again, Gitbash for Windows is best) and run:

```
$ node server
```

This will start a webserver at [http://localhost:9075/](http://localhost:9075/)

##Project organisation
###JavaScript
The raw, source files, are in 'src' and are output to 'build' after post-processing through WebPack. WebPack takes care of both javaScript and Sass postprocessing. The HTML files live in the build folder. 

Since there are two output files - the Main window and the Child window - there are two config files "webpack.config.js" and "webpack-childwin.config.js".

Below is the crucial setup instructions for the WebPack configs. It requires the module 'babel-loader' to be npm installed.

```
{
  test: /\.jsx?$/, 
  exclude: /node_modules/,
  loader: ['babel'], 
                query: {
                    presets: ['react', 'es2015']
                },
                "plugins": [],
            },
```
To run Webpack we have two scripts to run in the terminal, as we have two entry/output files to build. Run either:

```
 $ webpack --config webpack.config.js --watch
 $ webpack --config webpack-childwin.config.js --watch
```    
or run them from the 'scripts' section of the 'package.json' file like this:

```
$ npm run build-main
$ npm run build-child
```

Run each script in a seperate terminal as they start long-running 'watches' - polling for changes in the source code and compiling on the fly.

###CSS/SASS
The base for the css is Bootstrap-sass. It is installed via npm and then required into the 'sass/entry.scss' file, directly from the 'node_modules' folder and then compiled, via WebPack, for output. The BootStrap base may them be extended by app-specific or module-specific 'partials' - as below.

```
@import "../../node_modules/bootstrap-sass/assets/stylesheets/bootstrap-sprockets";
@import "../../node_modules/bootstrap-sass/assets/stylesheets/bootstrap";
@import "partials/header";
@import "partials/app"; 
```

The file named for the partials require and underscore preceeding them - so '@import "partials/header";' imports a file named '_header.scss'.

The 'webpack.config.js' requires the following configuration setting. 

```
 {
  test: /\.scss/,
  loader: 'style!css!sass',
  loaders: ['style', 'css', 'sass']
 },
 { test: /\.png$/, loader: "url-loader?limit=100000" }
```

Sass is not directly output to css, instead you require the root .scss file into the project's javaScript entry file, using CommonJs syntax, like so: 

```
require  ("../sass/entry.scss");
```
It is then compiled into the project.

###Unit testing
Unit testing in this project uses Jasmine as the testing framework and Karma as the test runner. To run the tests, in the terminal window, navigate to the root of the project and run:

```
$ karma start
```
As we are testing ES6/React, the code needs running through WebPack and this requires the 'karma-webpack' module to be npm installed and some configuring in the 'karma.conf.js' file.

we need to add the following to the 'karma.conf.js':

```
var webpackConfig = require('./webpack.config'); //Path to your webpack config file.
```

```
preprocessors: {
  'test/*-test.js': [ 'webpack' ],
  'build/bundle.js': [ 'webpack' ]
},
webpack: webpackConfig,
webpackMiddleware: {
   noInfo: true
}
```

More information on setting up Karma may be found [here](https://karma-runner.github.io/1.0/index.html) 


When testing React components 'ReactTestUtils' is required and should have been imported as part of the React package at 'node_modules/react/lib/ReactTestUtils.js'

At the head of the test case for your React Component add:

```
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils.js';
import ReactHeader from '../src/js/components/common-header.js';
```
Then you are able to write your tests against your React components. See the API documentation on the [React](https://facebook.github.io/react/docs/test-utils.html) site. 

###OpenFin
The app is setup as an OpenFin app but with 'try/catch' checks set up to prevent the app breaking if viewed in a browser and allowing the individual components to be unit tested, again, without throwing errors.

The app uses the OpenFin [InterApplicationBus](http://cdn.openfin.co/jsdocs/stable/fin.desktop.module_InterApplicationBus.html) to update all the common headers when one is changed. 

To install as an OpenFin app click on the link below. For the app to run the localhost sever must be started by running 'node server' in the terminal.

[https://dl.openfin.co/services/download?fileName=openfin_modules&config=http://localhost:9075/app_local.json](https://dl.openfin.co/services/download?fileName=openfin_modules&config=http://localhost:9075/app_local.json)

