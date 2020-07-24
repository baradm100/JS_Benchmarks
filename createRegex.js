const Benchmark = require('benchmark');

let suite = new Benchmark.Suite();

// Running the tests
suite
    .add('RegExp#new', function () {
        let re = new RegExp('a|b', 'i');
    })
    .add('hard coded RegExp', function () {
        let re = /a|b/i;
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
