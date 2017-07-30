import expect from 'expect';
import browser from './browser-jest';

describe('my webdriverio tests', function () {

  it('google test', async function () {
    await browser.url('https://google.com/')

    const title = await browser.getTitle();

    expect(title).toEqual('Google');
  });

});


//  ./node_modules/.bin/jest attempt-jest.spec.js
