"use strict";

var adjAdjAnimal = require("../lib/index");

var expect = require("chai").expect;

describe("the library", function () {
	describe("getting a default id", function () {
		var result;

		before(function () {
			return adjAdjAnimal()
			.then(function (id) {
				result = id;
			});
		});

		it("generates adj-adj-animal", function () {
			expect(result, "matches").to.match(/[a-z]+-[a-z]+-[a-z]+/);
		});
	});

	describe("getting an id with specified number of adjectives", function () {
		var result;

		before(function () {
			return adjAdjAnimal(6)
			.then(function (id) {
				result = id;
			});
		});

		it("generates adj-{6}animal", function () {
			expect(result, "matches").to.match(/([a-z]+-){6}[a-z]+/);
		});
	});
});