const fs = require('fs');

try{
    const data = fs.readFileSync('C:/Users/negroinvalid/Desktop/ewrwerwer-main/data/personData.json', 'utf8');
    console.log(data);
} catch (err) {
    console.error('error while reading file', err.message);
}