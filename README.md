# Material Components for React

Material Components for React (MDC-React) help developers execute [Material Design][] by providing bindings for [material-components-web][].

[Material Design]: https://material.io
[material-components-web]: https://github.com/material-components/material-components-web

[![NPM](https://img.shields.io/npm/v/@react-material/all.svg)](https://www.npmjs.com/package/@react-material/all)
[![Travis CI](https://img.shields.io/travis/kripod/material-components-react/master.svg)](https://travis-ci.org/kripod/material-components-react)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Quick start

Install the library:

```sh
npm i -S @react-material/all
```

Then simply import any of the available components along with the corresponding MDC-Web stylesheet(s):

```jsx
import { Button, Fab } from '@react-material/all';
import React from 'react';
import { render } from 'react-dom';
import 'material-components-web/dist/material-components-web.css';

render(
  <main>
    <Button>Hello, World!</Button>
    <Fab aria-label="Favorite">favorite_border</Fab>
  </main>,
  document.getElementById('root'),
);
```

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

Use [Create React App][] to bootstrap applications based on MDC-React with no build configuration.

[Create React App]: https://github.com/facebookincubator/create-react-app

## Installing individual components

MDC-React is modular by design. Each component lives within its own package under the [@react-material npm scope][].

```sh
npm i -S @react-material/button @react-material/checkbox @react-material/fab
```

All our components can be found in the [packages][] directory.

[@react-material npm scope]: https://npmjs.com/~react-material
[packages]: ./packages

## Including components

### JavaScript

If you are using a module loader such as Webpack or SystemJS to load your JS modules, you can simply `import` every component you need from `@react-material/all` and use it as such:

```js
import { Checkbox } from '@react-material/all';
```

You can do the same with individual components:

```js
import Checkbox from '@react-material/checkbox';
```

### CSS

All MDC-Web components which include styles provide them at `dist/mdc.COMPONENT.css`, as well as a complementary minified version at `dist/mdc.COMPONENT.min.css`. Note that _CSS files for a component's dependencies are not included within the component's CSS file_, so if you are using individual components you'll have to include each separately.

## Running the demo

```sh
npm i
npm run build
npm start
```
