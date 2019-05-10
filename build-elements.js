const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/custom-form-app/runtime.js',
    './dist/custom-form-app/polyfills.js',
    './dist/custom-form-app/scripts.js',
    './dist/custom-form-app/main.js',
  ]
  await fs.ensureDir('elements')
  await concat(files, 'src/assets/form-package.js');
  await fs.copyFile('./dist/custom-form-app/styles.css', 'src/assets/styles.css')
})()
