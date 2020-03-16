<p align="center">

![npm](https://img.shields.io/npm/dm/@kbco/query-builder.svg)
![NPM](https://img.shields.io/npm/l/@kbco/query-builder.svg)
![npm](https://img.shields.io/npm/v/@kbco/query-builder.svg)
</p>

## node-http-query-builder
I just wanted an easy way to convert objects into query strings. I was tired of not having a decent option...

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
