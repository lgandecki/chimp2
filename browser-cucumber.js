import {Before, After} from 'cucumber';
import browser from './browser';

// console.log("this", this);
// console.log("window", window);
console.log("global", global);

Before(async function () {
  await browser.init();
});


After(async function() {
  await browser.end();
});

// ./node_modules/.bin/cucumberjs --compiler js:babel-core/register cucumber


export default browser;
