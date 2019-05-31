<p align="center">

![npm](https://img.shields.io/npm/dm/@kbco/query-builder.svg)
![NPM](https://img.shields.io/npm/l/@kbco/query-builder.svg)
![npm](https://img.shields.io/npm/v/@kbco/query-builder.svg)
</p>

## node-http-query-builder
This package is meant to be paired with Spatie's [Laravel Query Builder](https://github.com/spatie/laravel-query-builder) or my [Laravel Abstract](https://github.com/austinkregel/laravel-abstract) package.

Though neither package is required to be used with this one. This one just makes using those ones easier!

### Installation
```bash
npm install --save @kbco/query-builder
```
```bash
yarn add @kbco/query-builder
```

### Usage
```js
const { buildUrl } = require('@kbco/query-builder')

let url = buildUrl('/your-route-to-build-a-query-for', {
    option: 'do build something for',
    objectThing: {
        'a key-value pair': 'of values'
    },
    arrayThing: ['array', 'of', 'values'],
})

// The url value would be '/your-route-to-build-a-query-for?option=do%20build%20something%20for&objectThing[a%20key-value%20pair]=of%20valuesarrayThing=array,of,values'
// then use your favorite ajax lib to make a call against that URL. (For me I like axios)
axios.get(url)
    .then(({ data })=> {
        // do something with the returned data.
    })
```