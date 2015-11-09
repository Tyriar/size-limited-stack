'use strict';

module.exports = (function () {
  function SizeLimitedStack(maxSize) {
    this.stack = [];
    this.setMaxSize(maxSize);
  }

  SizeLimitedStack.prototype.push = function (value) {
    this.stack.push(value);
    this.length = this.stack.length;
    this.evictIfNecessary();
  };

  SizeLimitedStack.prototype.pop = function () {
    var value = this.stack.pop();
    this.length = this.stack.length;
    return value;
  };

  SizeLimitedStack.prototype.setMaxSize = function (maxSize) {
    if (typeof maxSize !== 'number') {
      throw new Error('Max size must be a number');
    }
    if (maxSize < 1) {
      throw new Error('Max size must be at least 1');
    }
    this.maxSize = maxSize;
    this.evictIfNecessary();
  };

  SizeLimitedStack.prototype.evictIfNecessary = function () {
    while (this.stack.length > this.maxSize) {
      this.stack.shift();
    }
    this.length = this.stack.length;
  };

  return SizeLimitedStack;
})();
