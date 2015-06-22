"use strict";

var Bluebird = require("bluebird");
var Crypto   = require("crypto");

var loadLists = require("./loadLists");
var lists = loadLists();

var randomBytes = Bluebird.promisify(Crypto.randomBytes, Crypto);

module.exports = {
	randomAdjective : function randomAdj () {
		return randomBytes(2) // 0 - 65535
		.then(function (bytes) {
			var num = bytes.readUInt16LE(0);
			num = num % 2048; // smallest power of 2 > num adjectives (1501)

			if (num < loadLists.NUM_ADJECTIVES && lists.adjectives[num]) {
				return lists.adjectives[num];
			}
			else {
				return randomAdj();
			}
		});
	},

	randomAnimal : function randomAnim () {
		return randomBytes(2) // 0 - 65535
		.then(function (bytes) {
			var num = bytes.readUInt16LE(0);
			num = num % 2048; // smallest power of 2 > num animals (1750)

			if (num < loadLists.NUM_ANIMALS && lists.animals[num]) {
				return lists.animals[num];
			}
			else {
				return randomAnim();
			}
		});
	}
};