const { readFile, writeFile } = require('fs')
console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
        const first = result;
        readFile('./content/subfolder/test.txt', 'utf8', (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                const second = result;
                writeFile('./content/result-async.txt', ` Here is the result: ${first} , ${second} `, (err, result) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log('Done with this task');
                });
            }
        });
    }
})
console.log("next task");