# httpsonly

[![https://img.shields.io/npm/v/httpsonly](https://img.shields.io/npm/v/httpsonly)](https://www.npmjs.com/package/httpsonly)
[![Node.js CI](https://github.com/debitoor/httpsonly/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/debitoor/httpsonly/actions/workflows/node.js.yml)

Express middleware that redirects http requests to https.

Also sets Strict Transport Security header, telling browsers to visit by HTTPS for the next year.
Also hides the powered by express header.

```shell
npm install httpsonly
```

## Usage

```javascript
var httpsonly = require('httpsonly');
app.use(httpsonly()); //app is the express app
```

## License

[MIT](http://opensource.org/licenses/MIT)
