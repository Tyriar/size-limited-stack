# size-limited-stack [![NPM version](http://img.shields.io/npm/v/size-limited-stack.svg?style=flat)](https://www.npmjs.org/package/size-limited-stack)

[![Build Status](http://img.shields.io/travis/Tyriar/size-limited-stack.svg?style=flat)](https://travis-ci.org/Tyriar/size-limited-stack)

A stack with a maximum size that evicts elements from the bottom when reached. It features familiar interfaces and does not directly extend `Array.prototype` to prevent possible misuse.



## Install

```
npm install --save size-limited-stack
```



## Usage

```js
var SizeLimitedStack = require('size-limited-stack');
var stack = new SizeLimitedStack(2);
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // undefined
```



## API

### `SizeLimitedStack(int maxSize)`

Create a size limited stack, setting the maximum size to `maxSize`.

### `SizeLimitedStack.push(object value)`

Push `value` onto the stack, if the size threshold is hit a value is evicted from the _bottom_ of the stack.

### `SizeLimitedStack.pop()`

Removes and returns the value on the top of the stack.

### `SizeLimitedStack.setMaxSize(int maxSize)`

Sets the maximum size of the stack, evicting any elements exceeding the limit if necessary.
