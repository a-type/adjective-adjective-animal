#!/usr/bin/env node

"use strict";

var generate = require("../lib/index");

var numberOfAdjectives = process.argv[2] || 2;
var format = process.argv[3] || "param";

generate({ adjectives : numberOfAdjectives, format : format }).then(console.log);
