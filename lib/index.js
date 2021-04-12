'use strict';

var cases = require('./cases');
var randWord = require('./cryptoRand');
var _ = require('lodash');

module.exports = async function (param) {
  var numAdjectives = 2; // default
  var format = 'param';

  if (param) {
    if (typeof param === 'number') {
      numAdjectives = param;
    } else if (typeof param === 'string') {
      format = param;
    } else if (typeof param === 'object') {
      numAdjectives = param.adjectives || numAdjectives;
      format = param.format || format;
    } else {
      throw new Error('Invalid argument type.');
    }
  }

  var validFormats = Object.keys(cases);
  if (!validFormats.includes(format)) {
    throw new Error(
      'Invalid format, valid formats are: ' + validFormats.toString(),
    );
  }

  var promises = [];
  for (var i = 0; i < numAdjectives; i += 1) {
    promises.push(randWord.randomAdjective());
  }
  promises.push(randWord.randomAnimal());

  return Promise.all(promises).then(function (parts) {
    return cases[format](parts.join(' '));
  });
};
