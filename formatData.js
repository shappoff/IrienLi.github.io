const fs = require('fs');
const obj = JSON.parse(fs.readFileSync('./dist/res1.json', 'utf8'));

const formattedObj = {};

obj.results.forEach(({result}) => {
    const [tabType] = result.range.split('!');
    formattedObj[tabType] = result.formatted;
});

fs.writeFileSync("./dist/res2.json", JSON.stringify(formattedObj));

// console.log(formattedObj);
