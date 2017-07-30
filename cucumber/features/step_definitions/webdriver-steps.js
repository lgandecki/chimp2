import {When, Then} from 'cucumber';
import expect from 'expect';
import browser from '../../../browser-cucumber';

When(/^I visit "([^"]*)"$/, async function (url) {
  await browser.url(url);
});

Then(/^I see the title of "([^"]*)"$/, async function (title) {
  expect(await browser.getTitle()).toEqual(title);
});

// ./node_modules/.bin/cucumberjs --compiler js:babel-core/register cucumber
