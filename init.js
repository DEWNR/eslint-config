const fs = require('fs');
const path = require('path');
const configs = [
{
name: 'prettier.config.js',
content: "module.exports = require('@envsa/eslint-config/prettier.config');"
},
{
name: 'eslint.config.js',
content: "module.exports = {extends: '@envsa'}"
},
{
name: 'stylelint.config.js',
content:
"module.exports = {extends: '@envsa/eslint-config/stylelint.config.js',ignoreFiles: ['./vendor/**/*']};"
}
];

const createConfigFiles = () => {
configs.forEach((config) => {
const filePath = path.join(process.env.INIT_CWD, `${config.name}`);
if (!fs.existsSync(filePath)) {
fs.writeFile(filePath, config.content, (err) => {
if (err) throw err;
console.log(`📝 Created ./${config.name}`);
});
}
});
};

createConfigFiles();