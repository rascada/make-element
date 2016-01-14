'use strict';

module.exports = class Appender{
  constructor(options) {
    this.appendTo = options.appendTo;
    delete options.appendTo;

    // @autobind
    this.append = this.append.bind(this);
  }

  append(element$) {
    this.appendTo.appendChild(element$);
  }
};
