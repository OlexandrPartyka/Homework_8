const fs = require('fs');

try{
    const data = fs.readFileSync('file', 'utf8');
    console.log(data);
} catch (err) {
    console.error('error while reading file', err.message);
}
