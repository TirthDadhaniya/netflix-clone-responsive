const fs = require('fs');

const reader = fs.createReadStream('README.md');

reader.on('data', (chunk) =>{
    console.log("New chunk received:");
    console.log(chunk.toString());
});

reader.on('end', () => {
    console.log("No more data in the stream.");
});

reader.on('error', (err) => {
    console.log("An error occurred:");

});