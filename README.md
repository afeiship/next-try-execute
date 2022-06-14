# next-try-execute
> Try execute a method on context.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-try-execute
```

## usage
```js
import '@jswork/next-try-execute';

const someApi = {
  deleted: false,
  del: function (value) {
    this.deleted = value;
  },
  delete: function (value) {
    console.warn("delete is deprecated, use del instead");
    this.del(value);
  },
};

console.log(someApi.deleted); // false
nx.tryExecute(someApi, [], ["del", "delete"]);
console.log(someApi.deleted); // undefined
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-try-execute/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-try-execute
[version-url]: https://npmjs.org/package/@jswork/next-try-execute

[license-image]: https://img.shields.io/npm/l/@jswork/next-try-execute
[license-url]: https://github.com/afeiship/next-try-execute/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-try-execute
[size-url]: https://github.com/afeiship/next-try-execute/blob/master/dist/next-try-execute.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-try-execute
[download-url]: https://www.npmjs.com/package/@jswork/next-try-execute
