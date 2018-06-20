const Benchmark = require('benchmark');

let suite = new Benchmark.Suite();

// Add tests
suite.add('Math#pow', function () {
        let r = Math.pow(2, 100);
    })
    .add('Power by **', function () {
        let r = 2 ** 100;
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
        async: true
    });