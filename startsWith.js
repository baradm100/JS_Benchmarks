const Benchmark = require('benchmark');

// Creating dummy string that will look like: "test,some other,some other,some other,some other,some other,some other..."
let a = ["test"];
for (let i = 0; i < 10000; i++) {
	a.push("some other stuff");
}
let s = a.join();
let re1 = new RegExp("^test");
let re2 = new RegExp("^not there");
let suite = new Benchmark.Suite();

// Add tests
suite.add('String#indexOf', function () {
		let r1 = (s.indexOf("test") === 0);
		let r2 = (s.indexOf("not there") === 0);
	})
	.add('String#lastIndexOf', function () {
		let r1 = (s.lastIndexOf("test", 0) === 0);
		let r2 = (s.lastIndexOf("not there", 0) === 0);
	})
	.add('String#substring', function () {
		let r1 = (s.substring(0, "test".length) == "test");
		let r2 = (s.substring(0, "not there".length) == "not there");
	})
	.add('String#slice', function () {
		let r1 = (s.slice(0, "test".length) == "test");
		let r2 = (s.slice(0, "not there".length) == "not there");
	})
	.add('RegExp#tests', function () {
		let r1 = (/^test/).test(s);
		let r2 = (/^not there/).test(s);
	})
	.add('RegExp#tests (compiled)', function () {
		let r1 = re1.test(s);
		let r2 = re2.test(s);
	})
	.add('String#startsWith', function () {
		let r1 = s.startsWith('test');
		let r2 = s.startsWith('not there');
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