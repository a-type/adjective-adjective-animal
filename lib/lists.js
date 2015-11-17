var adjectivesSource = require("./lists/adjectives");
var animalsSource = require("./lists/animals");
var path = require("path");
var _    = require("lodash");

var adjectives = _.map(adjectivesSource, function (word) { return word.toLowerCase(); });
var animals = _.map(animalsSource, function (word) { return word.toLowerCase(); });

module.exports =  { adjectives : adjectives, animals : animals };