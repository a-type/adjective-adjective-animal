"use strict";

var Crypto = require("crypto");
var CryptoRand = require("../lib/cryptoRand");
var lists  = require("../lib/lists");
var Sinon = require("sinon");

var expect = require("chai").expect;

describe("The random word generator", function () {
	describe("getting a random adjective", function () {
		var adjective;

		before(function () {
			return CryptoRand.randomAdjective()
			.then(function (word) {
				adjective = word;
			});
		});

		it("returns an adjective from the list", function () {
			expect(lists.adjectives, "contained").to.contain(adjective);
		});
	});

	describe("getting a random animal", function () {
		var animal;

		before(function () {
			return CryptoRand.randomAnimal()
			.then(function (word) {
				animal = word;
			});
		});

		it("returns an animal from the list", function () {
			expect(lists.animals, "contained").to.contain(animal);
		});
	});

	describe("getting a random adjective with unfavorable entropy", function () {
		var adjective;

		before(function () {
			Sinon.stub(Buffer.prototype, "readUInt16LE")
				.onCall(0).returns(10000)
				.onCall(1).returns(3);

			return CryptoRand.randomAdjective()
			.then(function (word) {
				adjective = word;
			});
		});

		after(function () {
			Buffer.prototype.readUInt16LE.restore();
		});

		it("still returns an adjective", function () {
			expect(lists.adjectives, "contained").to.contain(adjective);
		});
	});

	describe("getting a random adjective with unfavorable entropy", function () {
		var animal;

		before(function () {
			Sinon.stub(Buffer.prototype, "readUInt16LE")
				.onCall(0).returns(10000)
				.onCall(1).returns(3);

			return CryptoRand.randomAnimal()
			.then(function (word) {
				animal = word;
			});
		});

		after(function () {
			Buffer.prototype.readUInt16LE.restore();
		});

		it("still returns an animal", function () {
			expect(lists.animals, "contained").to.contain(animal);
		});
	});
});