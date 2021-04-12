var changeCase = require('change-case');

module.exports = {
  /** @param {String} str */
  upper: function (str) {
    return str.toUpperCase();
  },
  /** @param {String} str */
  lower: function (str) {
    return str.toLowerCase();
  },
  sentence: changeCase.sentenceCase,
  title: changeCase.capitalCase,
  camel: changeCase.camelCase,
  pascal: changeCase.pascalCase,
  snake: changeCase.snakeCase,
  param: changeCase.paramCase,
  dot: changeCase.dotCase,
  path: changeCase.pathCase,
  constant: changeCase.constantCase,
};
