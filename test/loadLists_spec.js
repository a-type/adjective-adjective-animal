"use strict";

var fs        = require("fs");
var loadLists;
var Sinon = require("sinon");

var expect = require("chai").expect;

describe("the list loader", function () {
	before(function () {
		var cached = require.resolve("../lib/loadLists");
		delete require.cache[cached];
		loadLists = require("../lib/loadLists");
	});

	describe("loading the lists", function () {
		describe("for the first time", function () {
			var loadSpy;
			var lists;

			before(function () {
				loadSpy = Sinon.spy(fs, "readFileSync");

				lists = loadLists();
			});

			after(function () {
				loadSpy.restore();
			});

			it("loads the lists from file", function () {
				expect(loadSpy.callCount, "called twice").to.equal(2);
			});

			it("loads the correct lists", function () {
				expect(lists.adjectives.length, "adj length").to.equal(loadLists.NUM_ADJECTIVES);
				expect(lists.animals.length, "animals length").to.equal(loadLists.NUM_ANIMALS);
			});
		});

		describe("a second time", function () {
			var loadSpy;
			var lists;

			before(function () {
				loadSpy = Sinon.spy(fs, "readFileSync");

				lists = loadLists();
			});

			after(function () {
				loadSpy.restore();
			});

			it("caches and does not load from file", function () {
				expect(loadSpy.called, "called").to.be.false;
			});

			it("loads the correct lists", function () {
				expect(lists.adjectives.length, "adj length").to.equal(loadLists.NUM_ADJECTIVES);
				expect(lists.animals.length, "animals length").to.equal(loadLists.NUM_ANIMALS);
			});
		});
	});
});