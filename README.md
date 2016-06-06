# httpsonly

Express middleware that redirects http requests to https.

Also sets Strict Transport Security header, telling browsers to visit by HTTPS for the next year.
Also hides the powered by express header.

	npm install httpsonly

## Usage

```javascript
var httpsonly = require('httpsonly');
app.use(httpsonly); //app is the express app
```

## License

[MIT](http://opensource.org/licenses/MIT)
