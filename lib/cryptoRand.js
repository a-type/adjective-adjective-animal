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
			num = num % 16384; // smallest power of 2 > num adjectives (8997)

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
			num = num % 1024; // smallest power of 2 > num animals (591)

			if (num < loadLists.NUM_ANIMALS && lists.animals[num]) {
				return lists.animals[num];
			}
			else {
				return randomAnim();
			}
		});
	}
};