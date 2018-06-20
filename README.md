# JS Benchmarks

One day I was bored and tried to look up what is the most effective way to test if a string starts with. For my surprise I didn't find a central place for Node.js (or just JS) performance, so I created one.

Enjoy!

## Table of Content

* [Summery](#summery)
* [How to run](#how-to-run)
* [Create Regex](#create-regex)
* [String Starts With](#string-starts-with)
* [Read File](#read-file)
* [Math](#math)
    * [Power](#power)
* [Credits](#credits)
* [Hardware](#hardware)
* [Contributes](#contributes)
* [License](#license)

## Summery

Category           | Winner                      | ops/sec
------------------ | --------------------------- | --------
Create Regex       | Hard coded regex            | 668,945,850
String Starts With | String#substring            | 21,021,430
Read File          | fs#readFileSync,fs#readFile | 1.91
Math - Power       |

## How to Run

You can easily run the code yourself by choosing the benchmark from the CLI menu. To run the CLI menu just type:

```bash
$ npm run
```

## Create Regex

What is the most effective way to create regex? Hard coded!

### Output

```
RegExp#new x 8,217,197 ops/sec ±1.01% (103 runs sampled)
hard coded RegExp x 668,945,850 ops/sec ±0.43% (106 runs sampled)
Fastest is hard coded RegExp
```

## String Starts With

What is the most effective way to find if a string starts with another string? substring!

```
String#indexOf x 73,269 ops/sec ±52.79% (86 runs sampled)
String#lastIndexOf x 8,344,793 ops/sec ±0.97% (90 runs sampled)
String#substring x 21,021,430 ops/sec ±1.83% (86 runs sampled)
String#slice x 18,305,956 ops/sec ±1.44% (90 runs sampled)
RegExp#tests x 12,018,282 ops/sec ±0.32% (92 runs sampled)
RegExp#tests (compiled) x 14,618,121 ops/sec ±1.03% (90 runs sampled)
String#startsWith x 7,604,207 ops/sec ±0.52% (92 runs sampled)
Fastest is String#substring
```

## Read File

What is the most effective way to read a file? fs#readFileSync OR fs#readFile!

### Output

```
fs#readFileSync x 1.92 ops/sec ±0.39% (9 runs sampled)
fs#readFile x 1.91 ops/sec ±0.54% (14 runs sampled)
readline x 0.23 ops/sec ±0.50% (6 runs sampled)
Fastest is fs#readFileSync,fs#readFile
```

## Math

### Power

What is the most effective way to read a file? Power by **!

#### Output

```
Math#pow x 640,743,171 ops/sec ±0.46% (93 runs sampled)
Power by ** x 648,307,080 ops/sec ±0.39% (91 runs sampled)
Fastest is Power by **
```

## Credits

Most (if not all) the startsWith benchmark was originally written by [@dai-shi](https://github.com/dai-shi)

## Hardware

Type    |  Value
--------|--------
Node.js | v9.6.0
OS      | Windows 7 64bit
CPU     | i7 4770 4 cores with hyper thread (Clock speed: 340GHz)
RAM     | 16 GB DDR3

## Contributes

PR and suggestions are more the welcome!

If you have a new benchmark or new test that I overlooked open an Issue and PR with the changes

## License

MIT License, read more [here](/LICENSE).