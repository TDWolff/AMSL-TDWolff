// loader.js
const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];
if (!filePath) {
    console.error('Please provide a file path');
    process.exit(1);
}

const fullPath = path.resolve(filePath);
fs.readFile(fullPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        process.exit(1);
    }

    // Simulate AMSL execution
    console.log(`Executing AMSL script: ${fullPath}`);
    console.log(data);
});