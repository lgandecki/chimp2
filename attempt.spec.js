import browser from './browser-mocha';
import expect from 'expect';



describe('my webdriverio tests', function () {

  it('google test', async function () {
    await browser.url('https://google.com/')

    const title = await browser.getTitle();

    expect(title).toEqual('Google');
  });

});


//  ./node_modules/.bin/mocha attempt.spec.js --compilers js:babel-core/register
