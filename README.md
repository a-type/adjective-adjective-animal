# adjective-adjective-animal
### Suitably random and reasonably unique (and fairly adorable) human readable ids

> Now with GfyCat lists!

## Usage
The library export is a function. Call the function with the number of adjectives you want before the animal. Default is 2.

The function returns a Promise for the adjective-animal string. This is mainly because generating cyrptographically strong random data is not guaranteed to be very quick.

 var generate = require("adjective-adjective-animal");

 generate().then(console.log);
 // "supercurious-senior-woodlouse"

 generate(5).then(console.log);
 // "unquiet-calm-omniscient-ornate-industrious-deer"

## About
There's nothing too special about this package—there are many like it—but I made this one because I thought it would be fun and I wanted mine to be cryptographically strong. Although the space is probably too small to guarantee any sort of uniqueness reliably, at least the randomness is not predictable. It uses node's core crypto library to choose each word.

## Thanks
Thanks to [@ChrissiQ](https://github.com/ChrissiQ) for pointing me in the right direction to use GfyCat lists instead of my own.