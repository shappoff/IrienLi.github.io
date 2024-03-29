const fs = require('fs');
const obj = JSON.parse(fs.readFileSync('./dist/res1.json', 'utf8'));

const formattedObj = {};

obj.results.forEach(({result}) => {
    const [tabType] = result.range.split('!');
    let titles = [];
    const resArr = [];
    result.rawData.forEach((row, rowIndex) => {
        const res = {};
        if (rowIndex === 0) {
            titles = row;
        } else {
            row.forEach((cell, cellIndex) => {
                const fieldName = titles[cellIndex];
                res[fieldName] = cell;
            });
            resArr.push(res)
        }
    });
    formattedObj[tabType] = resArr;
});

fs.writeFileSync("./dist/res2.json", JSON.stringify(formattedObj));

// console.log(formattedObj);
