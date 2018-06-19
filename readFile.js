const fs = require('fs'); // TODO needed?
const Benchmark = require('benchmark');
const readline = require('readline');
const filePath = './testFile.txt'
const expectedFileSize = 1000010000;
let suite = new Benchmark.Suite();

/**
 * Generating a test file
 */
function generateFile() {
    for (let i = 0; i < 10000; i++) {
        let string = "";
        for (let j = 0; j < 10000; j++) {
            string += "Test Data ";
        }

        fs.appendFileSync(filePath, string + '\n');
    }
};

// If the file doesn't exists generate data and write to file
if (!fs.existsSync(filePath)) {
    generateFile();
} else if (fs.statSync(filePath).size != expectedFileSize) {
    fs.unlinkSync(filePath);
    generateFile();
}

// Add tests
suite.add('fs#readFileSync', function () {
        let string = fs.readFileSync(filePath);
    })
    .add('fs#readFile', function (deferred) {
        let string = fs.readFile(filePath, (string) => deferred.resolve());
    }, {
        // a flag to indicate the benchmark is deferred
        defer: true
    })
    .add('readline', function (deferred) {
        let string = "";
        let lineReader = readline.createInterface({
            input: fs.createReadStream(filePath)
        });

        lineReader.on('line', (line) => string += line + '\n');

        lineReader.on('close', () => deferred.resolve());
    }, {
        // a flag to indicate the benchmark is deferred
        defer: true
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