'use strict';

module.exports = function make$(type, options) {
  let element$ = document.createElement(type);

  return Object.assign(element$, options);
};
