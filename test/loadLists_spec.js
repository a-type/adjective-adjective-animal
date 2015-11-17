"use strict";
var expect = require("chai").expect;
var _ = require("lodash");

describe("the list loader", function () {
	before(function () {
		var cached = require.resolve("../lib/lists");
		delete require.cache[cached];
	});

	describe("loading the lists", function () {
		describe("for the first time", function () {
			var lists;

			before(function () {
				lists = require("../lib/lists");
			});

			it("loads and processes the words", function () {
				var randomAdj = _.sample(lists.adjectives);
				var randomAnimal = _.sample(lists.animals);

				expect(randomAdj.toLowerCase() === randomAdj, "adjective is lowercase").to.be.true;
				expect(randomAdj.length, "adjective is a real word").to.be.greaterThan(0);

				expect(randomAnimal.toLowerCase() === randomAnimal, "animal is lowercase").to.be.true;
				expect(randomAnimal.length, "animal is a real word").to.be.greaterThan(0);
			});
		});
	});
});