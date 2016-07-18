# app-seed-shared-modules

The purpose of this repo is to show the possibility of developing HTML5 and OpenFin apps in a modular way. It ustalises ES6 syntax, post-processed through [WebPack](https://webpack.github.io/), to make it possible to write in modules - which may then be imported and incorporated, as required, and therefore shared beween windows and apps.

To build the project run:

```
$ npm install
```

It is important to add 'core.js' to the entry file(s) - this will allow ES6 features like Object.assign, to be used via polyfills. [https://github.com/zloirock/core-js](https://github.com/zloirock/core-js) .

Add the following code at the head of any 'entry' files, ones which will be run through WebPack.

```
import 'core-js';
```

[https://dl.openfin.co/services/download?fileName=openfin_modules&config=http://localhost:9075/app_local.json](https://dl.openfin.co/services/download?fileName=openfin_modules&config=http://localhost:9075/app_local.json)

