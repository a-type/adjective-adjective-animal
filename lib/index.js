"use strict";

var Bluebird   = require("bluebird");
var changeCase = require("change-case");
var randWord   = require("./cryptoRand");
var _          = require("lodash");

module.exports = Bluebird.method(function (param) {
	var numAdjectives = 2; // default
	var format = "param";

	if (param) {
		if (typeof param === "number") {
			numAdjectives = param;
		}
		else if (typeof param === "string") {
			format = param;
		}
		else if (typeof param === "object") {
			numAdjectives = param.adjectives || numAdjectives;
			format = param.format || format;
		}
		else {
			throw new Error("Invalid argument type.");
		}
	}

	var validFormats = _.without(_.keys(changeCase), "isUpper", "isLower");
	if (!_.contains(validFormats, format)) {
		throw new Error("Invalid format, please see casing functions of change-case module, https://www.npmjs.com/package/change-case.");
	}

	var promises = [];
	for (var i = 0; i < numAdjectives; i += 1) {
		promises.push(randWord.randomAdjective());
	}
	promises.push(randWord.randomAnimal());

	return Bluebird.all(promises)
	.then(function (parts) {
		return changeCase[format](parts.join(" "));
	});
});