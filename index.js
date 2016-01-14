'use strict';

module.exports = function make$(type) {
  let element$ = document.createElement(type);

  return element$;
};
