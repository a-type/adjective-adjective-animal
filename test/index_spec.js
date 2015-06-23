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

	describe("getting an id in snake_case", function () {
		var result;

		before(function () {
			return adjAdjAnimal("snake")
			.then(function (id) {
				result = id;
			});
		});

		it("generates a snake-cased id", function () {
			expect(result, "matches").to.match(/[a-z]+_[a-z]+_[a-z]+/);
		});
	});

	describe("getting an id with specified number of adjectives and case", function () {
		var result;

		before(function () {
			return adjAdjAnimal({ adjectives : 4, format : "pascal" })
			.then(function (id) {
				result = id;
			});
		});

		it("generates Adj{4}Animal", function () {
			expect(result, "matches").to.match(/([A-Z][a-z]+){4}[A-Z][a-z]+/);
		});
	});

	describe("getting an id with an empty object", function () {
		var result;

		before(function () {
			return adjAdjAnimal({ foo : "bar" })
			.then(function (id) {
				result = id;
			});
		});

		it("generates a default id", function () {
			expect(result, "matches").to.match(/[a-z]+-[a-z]+-[a-z]+/);
		});
	});

	describe("getting an id with an invalid format", function () {
		var result;

		before(function () {
			return adjAdjAnimal({ format : "isUppercase" })
			.catch(function (err) {
				result = err;
			});
		});

		it("throws an error", function () {
			expect(result, "error").to.be.an.instanceOf(Error);
			expect(result.message, "message").to.match(/invalid format/i);
		});
	});

	describe("getting an id with an invalid argument", function () {
		var result;

		before(function () {
			return adjAdjAnimal(true)
			.catch(function (err) {
				result = err;
			});
		});

		it("throws an error", function () {
			expect(result, "error").to.be.an.instanceOf(Error);
			expect(result.message, "message").to.match(/invalid argument/i);
		});
	});
});