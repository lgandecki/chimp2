const webdriverio = require('webdriverio');
const chromedriver = require('chromedriver');

const port = 9515;
const args = [
  '--url-base=wd/hub',
  `--port=${port}`
];
chromedriver.start(args);

const options = {
  port,
  desiredCapabilities: {
    browserName: 'chrome',
    "chromeOptions": {
      "args": [
        "--headless"
      ]
    }
  }
};


function setupBrowserAndzelo() {
  var client = webdriverio.remote(options);

  client
    .on('init', function (browser) {
      // console.log("Gozdecki: client", browser)
      // console.log("gozdecki this", this);
      // console.log("gozdecki client", client);
    })
    .init()
    .then(function() {
      // console.log("Gozdecki: arguments",arguments[0]);
      global.browser = this;
      // console.log("Gozdecki: this",this);
      // this.url('http://wp.pl');
      // console.log("Gozdecki: client",client);
    })
    // .url('http://google.com')
    // .getTitle().then(function(title) {
    // console.log('Title was: ' + title);
  // })
  //   .end()
    .catch((e) => console.log(e))
}

function setupBrowserAndzelo2() {
  global.browser = webdriverio.remote(options).init();

  // client
  //   .on('init', function (browser) {
  //     // console.log("Gozdecki: client", browser)
  //     // console.log("gozdecki this", this);
  //     // console.log("gozdecki client", client);
  //   })
  //   .init()
  //   .then(function() {
  //     // console.log("Gozdecki: arguments",arguments[0]);
  //     global.browser = this;
  //     // console.log("Gozdecki: this",this);
  //     // this.url('http://wp.pl');
  //     // console.log("Gozdecki: client",client);
  //   })
  //   // .url('http://google.com')
  //   // .getTitle().then(function(title) {
  //   // console.log('Title was: ' + title);
  // // })
  // //   .end()
  //   .catch((e) => console.log(e))
}

setupBrowserAndzelo2();

setTimeout(function() {
  global.browser.url('http://google.com')
  .getTitle().then(function(title) {
  console.log('Title was: ' + title);
  })
    .end()
}, 2500);

function setupBrowser(cb) {
  const client = webdriverio.remote(options).init()
    // .end()
    // .catch((e) => console.log(e))



  // cb()
  // const test = Promise.resolve('abc')
  // console.log("Gozdecki: test",test);
  // console.log("Gozdecki: browser",browser);
  client.on('init', function (browser) {
    console.log("Gozdecki: client",browser, this);
    // console.log("Gozdecki: abc",abc);
    // console.log("Gozdecki: arguments",arguments, this, browser);
    // console.log("Gozdecki: window",global);
    global.client = client;
    // console.log("after client", global.client);
    cb()
  })
  client.finally(function() {
    console.log("Gozdecki: arguments",arguments, this);
  })
  // // browser.then(() => {
  // // console.log("Gozdecki: this",this);
  // //
  // //   console.log("Gozdecki: arguments",arguments, browser);
  // // }, () => {
  // //   console.log("Gozdecki: this reject",this);
  // //   console.log("Gozdecki: arguments reject",arguments);
  // // })
  // // // .catch((error) => console.log("Gozdecki: error",error))
  // // //
  // // console.log("Gozdecki: browser2",browser);
  // // browser.on('result', function() { console.log("Gozdecki: result arguments",arguments)})
  // browser.on('error', function(e) { console.error(e) })
  // browser.once('end', function() {
  //   console.log('end');
  //   chromedriver.stop();
  //   process.nextTick()
  // })
  // browser.init()
  // // browser.url('http://www.google.com')
  // // browser.getTitle().then(function (title) {
  // //   console.log('Title was: ' + title);
  // // })
  // // browser.end();
  // // window.browser = browser;
  // console.log("after init");
}
// setupBrowser(getGoogleTitle);

function getGoogleTitle() {
  global.client.url('http://www.google.com')
    .getTitle().then(function(title) {
      console.log('Title was: ' + title);
    })
  // console.log("inside getGoogleTitle", global.client);
  // await global.client.url('http://www.google.com');
  // const title = await global.client.getTitle();
  // console.log("Gozdecki: title",title);
  global.client.end();
}

// getGoogleTitle();
// const webdriverio = require('webdriverio');
//   const assert      = require('assert');
// class doSomething {
//   async asyncSomething() {
//     try {
//       var client = webdriverio.remote({desiredCapabilities: {browserName: 'chrome'}, logLevel: 'verbose',});
//       console.log("Gozdecki: client", client);
//       console.log("Gozdecki: client.init()",await client.init());
//     } catch(e) {
//       console.log("Gozdecki: e",e);
//     }
//   }
// }
//
// async function doSomethingElse() {
//   const doer = new doSomething();
//   await doer.asyncSomething();
// }
//
// doSomethingElse();

// describe('my webdriverio tests', function(){
//
//   this.timeout(99999999);
//   var client2;
//
//   before(function(){
//     client2 = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'}, logLevel: 'verbose',});
//     console.log("Gozdecki: client2",client2);
//     return client2.init();
//   });
//
//   it('Github test',function() {
//     // return client
//     //   .url('https://github.com/')
//     //   .getElementSize('.header-logo-invertocat .octicon.octicon-mark-github').then(function (result) {
//     //     assert(result.height === 32);
//     //     assert(result.width  === 32);
//     //   })
//     //   .getTitle().then(function (title) {
//     //     assert(title === 'How people build software · GitHub');
//     //   })
//     //   .getCssProperty('a[href="/pricing"]', 'color').then(function (result) {
//     //     assert(result.value === 'rgba(60,65,70,1)');
//     //   });
//   });
//
//   after(function() {
//     return client.end();
//   });
// });


// var webdriverio = require('webdriverio');
// var options = {
//   desiredCapabilities: {browserName: 'chrome'},
//   logLevel: 'verbose',
//   // logOutput: null,
//   host: '127.0.0.1',
//   port: 4444,
//   path: '/wd/hub',
//   baseUrl: null,
//   coloredLogs: true,
//   screenshotPath: null,
//   waitforTimeout: 500,
//   waitforInterval: 250,
// }
// var client = webdriverio.remote(options);
// console.log("Gozdecki: client",client);
// client
//   .init()
// console.log("Gozdecki: client",client);
//   client
//   .url('https://duckduckgo.com/')
//     .pause(2000)
//   .setValue('#search_form_input_homepage', 'WebdriverIO')
//     .pause(5000)
//   .click('#search_button_homepage')
//   .getTitle().then(function(title) {
//   console.log('Title is: ' + title);
//   // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
// })
//   .end();