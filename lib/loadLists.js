var fs   = require("fs");
var path = require("path");
var _    = require("lodash");

var animals;
var adjectives;

module.exports = function () {
	if (animals && adjectives) {
		return { animals : animals, adjectives : adjectives };
	}

	adjectives = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "lists", "adjectives.json")));
	animals = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "lists", "animals.json")));

	_.each(adjectives, function (word, idx) { adjectives[idx] = word.toLowerCase(); });
	_.each(animals, function (word, idx) { animals[idx] = word.toLowerCase(); });

	return { adjectives : adjectives, animals : animals };
};

module.exports.NUM_ADJECTIVES = 1500;
module.exports.NUM_ANIMALS = 1750;