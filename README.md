# adjective-adjective-animal
### Suitably random and reasonably unique (and fairly adorable) human readable ids

> Now with GfyCat animals!

## Usage
The library export is a function. Call the function with the number of adjectives you want before the animal. Default is 2.

The function returns a Promise for the adjective-animal string. This is mainly because generating cyrptographically strong random data is not guaranteed to be very quick.

``` javascript
var generate = require("adjective-adjective-animal");

generate().then(console.log);
// "supercurious-senior-woodlouse"

generate(5).then(console.log);
// "unquiet-calm-omniscient-ornate-industrious-deer"

// valid formats :
//    formats with spaces between words:
//        upper, lower, sentence, title,
//    formats without spaces between words:
//        camel, pascal, snake, param, dot, path, constant, swap, ucFirst, lcFirst
generate("pascal").then(console.log);
// "OddPortentBullfrog"

generate({ adjectives : 3, format : "dot"}).then(console.log);
// "undead.energetic.mortified.albatross"
```
## Command Line Usage

If you install the package globally (`npm install -g adjective-adjective-animal`), you can run the application from the command line by running `adjective-adjective-animal`. Because that's really annoying to type, you can also just run `aaa` for short.

Optionally, the first argument can set the number of adjectives you want, and the second argument can set a different format.

Example

	$ adjective-adjective-animal 3 title
	Decorated Despondent Insomniac Sunbear

## Browserified Usage

`adjective-adjective-animal` is available from Bower, and exports a global function `adjAdjAnimal`, which is used in the same manner as in NodeJS shown above.

## About
There's nothing too special about this package—there are many like it—but I made this one because I thought it would be fun and I wanted mine to be cryptographically strong. Although the space is probably too small to guarantee any sort of uniqueness reliably, at least the randomness is not predictable. It uses node's core crypto library to choose each word.

## Thanks
Thanks to [@ChrissiQ](https://github.com/ChrissiQ) for pointing me in the right direction to use GfyCat lists instead of my own.
