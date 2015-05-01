"use strict";

var Bluebird = require("bluebird");
var randWord = require("./cryptoRand");

var capitalize = function(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

module.exports = function (numAdjectives) {
	if (!numAdjectives) {
		numAdjectives = 2; // default
	}

	var promises = [];
	for (var i = 0; i < numAdjectives; i += 1) {
		promises.push(randWord.randomAdjective());
	}
	promises.push(randWord.randomAnimal());

	return Bluebird.all(promises)
	.then(function (parts) {
		return parts.map(function(part){return capitalize(part)}).join("");
	});
};