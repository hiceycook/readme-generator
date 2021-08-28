const generateReadMe = res => {
    //LICENSE BADGE BEGIN //
    res.license = JSON.stringify(res.license);
    let licInfo = res.license;
    let showLic = "";
    if (licInfo === '["MIT"]') {
        licInfo = "MIT License";
        showLic = "MIT";
    } else if (licInfo === '["Apache License 2.0"]') {
        licInfo = "Apache License 2.0"
        showLic = "Apache%202.0"
    } else if (licInfo === '["GNU General Public License v3.0"]') {
        licInfo = 'GNU General Public License v3.0'
        showLic = "GPLv3"
    };
    //LICENSE BADGE END //

    //TEMPLATE BEGIN//
    return `
# ${res.projectName.toUpperCase()} ![License](https://img.shields.io/badge/License-${showLic}-blue.svg)

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

<div id='Desciption'/>

## Description
${res.description}
<div id='Installation'/>

## Installation
${res.installation}
<div id='Usage'/>

## Usage
${res.usage}
<div id='License'/>

## License       
This projected is covered under: ${licInfo}  
![License](https://img.shields.io/badge/License-${showLic}-blue.svg)
<div id='Contributing'/>

## Contributing
${res.contribution} 
<div id='Tests'/>

## Tests
${res.test}
<div id='Questions'/>

## Questions
For additional questions or concerns regarding this project, please contact the information below:

GitHub: github.com/${res.githubUser}  
Email: ${res.email}
`;
    //TEMPLATE END
};


// to allow 'generateReadMe' to be called from index.js
module.exports = generateReadMe;
























