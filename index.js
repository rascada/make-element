'use strict';

const Appender = require('./Appender');

module.exports = function make$(type, options) {
  let element$ = document.createElement(type);
  let append = new Appender(options).append;

  Object.assign(element$, options);

  append(element$);
  return element$;
};
