"use strict";

var Bluebird = require("bluebird");
var randWord = require("./cryptoRand");

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
		return parts.join("-");
	});
};