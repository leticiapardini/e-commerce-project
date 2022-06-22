const fs = require('fs');

const environment = process.argv[2];

const envFileContent = fs.readFileSync(`${__dirname}/${environment}.env`);

fs.writeFileSync(`.env`, envFileContent);