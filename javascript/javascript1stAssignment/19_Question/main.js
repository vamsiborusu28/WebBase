const country=require('./countries');
const tech=require('./technologies');

console.log(
`
Contents in countries.js file are :\n
${country.asianCountries}\n
${country.europeanCountries}\n
${country.americanCountries}\n
${country.africanCountries}
`
);


console.log(
    `
    Contents in technologies.js file are \n
    ${tech.webTechs}
    `
);