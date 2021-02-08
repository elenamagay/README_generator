const fs = require("fs");
const inquirer = require("inquirer");
const renderLicense = license => {
    switch (license) {
        case "MIT":
            return "[MIT](https://opensource.org/licenses/MIT)";
        case "Apache License 2.0":
            return "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)";
        case "GNU GPLv3":
            return "[GNU GPLv3](https://opensource.org/licenses/GPL-3.0)";
        case "ISC License":
            return "[ISC License](https://opensource.org/licenses/ISC)";
        default:
            console.log("No license found!")
            return "";
    }
};

const renderLicenseBadge = badge => {
    switch (badge) {
        case "MIT":
            return "![License: MIT License](https://img.shields.io/badge/License-MIT-blue.svg)";
        case "Apache License 2.0":
            return "![License: Apache License 2.0](https://img.shields.io/badge/License-Apache-blue.svg)";
        case "GNU GPLv3":
            return "![License: GNU GPLv3](https://img.shields.io/badge/License-GNU-yellow.svg)";
        case "ISC License":
            return "![License: ISC License](https://img.shields.io/badge/License-ISC-lightgreen.svg)";
        default:
            console.log("No license found!")
            return "";
    }
};

inquirer.prompt ([
    {type: "Input",
    message: "What is GitHub username?",
    name: "githubName"
    },
    {type: "Input",
    message: "What is your email address?",
    name: "email"
    },
    {type: "Input",
    message: "What is the project name?",
    name: "projectName"
    },
    {type: "Input",
    message: "Please briefly describe your project",
    name: "briefDescription"
    },
    {type: "list",
    message: "Please choose a license for your project",
    choices:["MIT", "Apache License 2.0", "GNU GPLv3", "ISC License"],
    name: "license"
    },
    {type: "Input",
    message: "What command you need to install?",
    name: "install"
    },
    {type: "Input",
    message: "What command you need to run a project test?",
    name: "test"
    },
    {type: "Input",
    message: "Who contributed to a project?",
    name: "contribution"
    },
    {type: "Input",
    message: "What is this project used for?",
    name: "usage"
    },
]).then (response => 
    {
        console.log(response);
    const buidReadme = `
# ${response.projectName}

${renderLicenseBadge(response.license)}

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Test](#Test)
- [License](#License)
- [Questions](#Questions)

***
***

## Description
${response.briefDescription}

***

## Installation
\`\`\`
${response.install}
\`\`\`

***

## Usage
${response.usage}

***

## Contribution
${response.contribution}

***

## Test
\`\`\`
${response.test}
\`\`\`

***

## License
For this project was used ${renderLicense(response.license)} license

***

## Questions
My GitHub profile: ${"[" + response.githubName + "](https://github.com/" + response.githubName + ")"}

With any questions or concerns you can reach me at ${response.email}
`

    fs.writeFile('./example/README.md', buidReadme, (err)=>
      err ? console.error(err) : console.log('Success!')
    );

})

