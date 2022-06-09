const path = require('path');
const fs = require('fs');

const keysToDelete = ['scripts', 'private', 'jest'];

const packageJsonPath = path.resolve(process.cwd(), './build/package.json');
const packageJson = require(packageJsonPath);
keysToDelete.forEach((keyToDelete) => delete packageJson[keyToDelete]);
const preparedPackageJson = JSON.stringify({ ...packageJson }, null, 2);
fs.writeFileSync(`${packageJsonPath}`, preparedPackageJson);
