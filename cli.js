const keypress = require('keypress');
let currentIndex = 0;
let menuItems = [
    ['Create Regex', './createRegex.js'],
    ['String Starts With', './startsWith.js'],
    ['Read File', './readFile.js'],
    ['Math - Power', './math/pow.js']
];

// Make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// Listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
    if (key && key.ctrl && key.name == 'c')
        process.stdin.pause();
    else if (key && key.name == 'down') {
        currentIndex++;
        renderMenu();
    } else if (key && key.name == 'up') {
        currentIndex--;
        renderMenu();
    } else if (key && (key.name == 'enter' || key.name == 'return')) {
        let filePath = menuItems[currentIndex][1];
        process.stdin.pause();
        console.clear();
        console.log(`Staring to run: ${filePath}`);
        require(filePath);
    } else
        renderMenu();
});

process.stdin.setRawMode(true);
process.stdin.resume();
renderMenu();

/**
 * Render the menu
 */
function renderMenu() {
    console.clear(); // Starting by clearing the console

    if (currentIndex < 0)
        currentIndex = menuItems.length - 1;

    currentIndex %= menuItems.length;

    console.log("Welcome to JS Benchmarks! Please select a benchmark to run by using up/down arrows and enter/return to choose:");

    menuItems.forEach((item, i) => {
        item = item[0];
        let start = '  ';
        if (i === currentIndex)
            start = ' >';

        console.log(`${start} ${i + 1}. ${item}.`);
    });
}