# JS Benchmarks

One day I was bored and tried to look up what is the most effective way to test if a string starts with. For my surprise I didn't find a central place for Node.js (or just JS) performance, so I created one.

Enjoy!

## Table of Content

-   [Summery](#summery)
-   [How to run](#how-to-run)
-   [Create Regex](#create-regex)
-   [String Starts With](#string-starts-with)
-   [Read File](#read-file)
-   [Math](#math)
    -   [Power](#power)
-   [Credits](#credits)
-   [Hardware](#hardware)
-   [Contributes](#contributes)
-   [License](#license)

## Summery

| Category           | Winner                      | ops/sec     |
| ------------------ | --------------------------- | ----------- |
| Create Regex       | Hard coded regex            | 811,885,533 |
| String Starts With | String#substring            | 835,000,457 |
| Read File          | fs#readFileSync,fs#readFile | 1.61        |
| Math - Power       | Power by \*\*               | 824,394,518 |

## How to Run

You can easily run the code yourself by choosing the benchmark from the CLI menu. To run the CLI menu just type:

```bash
$ npm run
```

## Create Regex

What is the most effective way to create regex? Hard coded!

### Output

```
RegExp#new x 9,653,554 ops/sec ±1.60% (85 runs sampled)
hard coded RegExp x 811,885,533 ops/sec ±1.65% (84 runs sampled)
Fastest is hard coded RegExp
```

## String Starts With

What is the most effective way to find if a string starts with another string? substring!

```
String#indexOf x 803,084,164 ops/sec ±1.31% (87 runs sampled)
String#lastIndexOf x 17,167,310 ops/sec ±0.92% (87 runs sampled)
String#substring x 835,000,457 ops/sec ±1.24% (88 runs sampled)
String#slice x 818,594,603 ops/sec ±1.03% (86 runs sampled)
RegExp#tests x 18,745,095 ops/sec ±0.79% (84 runs sampled)
RegExp#tests (compiled) x 23,899,970 ops/sec ±1.17% (87 runs sampled)
String#startsWith x 29,204,473 ops/sec ±1.10% (87 runs sampled)
Fastest is String#substring
```

## Read File

What is the most effective way to read a file? fs#readFileSync OR fs#readFile!

### Output

```
fs#readFileSync x 1.61 ops/sec ±2.68% (9 runs sampled)
fs#readFile x 1.60 ops/sec ±2.56% (12 runs sampled)
readline x 0.18 ops/sec ±4.85% (5 runs sampled)
Fastest is fs#readFileSync,fs#readFile
```

## Math

### Power

What is the most effective way to read a file? Power by \*\*!

#### Output

```
Math#pow x 806,111,918 ops/sec ±1.31% (85 runs sampled)
Power by ** x 824,394,518 ops/sec ±0.94% (87 runs sampled)
Fastest is Power by **
```

## Credits

Most (if not all) the startsWith benchmark was originally written by [@dai-shi](https://github.com/dai-shi)

## Hardware

| Type    | Value                           |
| ------- | ------------------------------- |
| Node.js | v14.4.0                         |
| OS      | macOS 10.14.6                   |
| CPU     | Intel i7 (Clock speed: 2.2 GHz) |
| RAM     | 16 GB DDR4 2400 MHz             |

## Contributes

PR and suggestions are more the welcome!

If you have a new benchmark or new test that I overlooked open an Issue and PR with the changes

## License

MIT License, read more [here](/LICENSE).
