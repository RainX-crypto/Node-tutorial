// const {readFileSync,writeFileSync}=require('fs')

// const first = readFileSync('./content/first.txt', 'utf8');
// const second = readFileSync('./content/subfolder/test.txt','utf8');
// console.log(first,second);

// writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`,{flag: 'a'});


const { readFile, writeFile } = require('fs')
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
                writeFile('./content/result-async.txt', `Here is the result: ${first} , ${second} `, (err, result) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log(result);
                });
            }
        });
    }
})