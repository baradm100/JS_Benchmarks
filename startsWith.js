const Benchmark = require('benchmark');

// Creating dummy string that will look like: "test,some other,some other,some other,some other,some other,some other..."
const longString = 'test,' + 'some other stuff,'.repeat(1000);
const regexTest = new RegExp('^test');
const regexNotThere = new RegExp('^not there');

const suite = new Benchmark.Suite();

// Running the tests
suite
    .add('String#indexOf', function () {
        let r1 = longString.indexOf('test') === 0;
        let r2 = longString.indexOf('not there') === 0;
    })
    .add('String#lastIndexOf', function () {
        let r1 = longString.lastIndexOf('test', 0) === 0;
        let r2 = longString.lastIndexOf('not there', 0) === 0;
    })
    .add('String#substring', function () {
        let r1 = longString.substring(0, 'test'.length) === 'test';
        let r2 = longString.substring(0, 'not there'.length) === 'not there';
    })
    .add('String#slice', function () {
        let r1 = longString.slice(0, 'test'.length) === 'test';
        let r2 = longString.slice(0, 'not there'.length) === 'not there';
    })
    .add('RegExp#tests', function () {
        let r1 = /^test/.test(longString);
        let r2 = /^not there/.test(longString);
    })
    .add('RegExp#tests (compiled)', function () {
        let r1 = regexTest.test(longString);
        let r2 = regexNotThere.test(longString);
    })
    .add('String#startsWith', function () {
        let r1 = longString.startsWith('test');
        let r2 = longString.startsWith('not there');
    })
    // Add listeners
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log(`Fastest is ${this.filter('fastest').map('name')}`);
    })
    // Run async
    .run({
        async: true,
    });
