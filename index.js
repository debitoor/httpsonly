var helmet = require('helmet');
var ONE_YEAR = 31536000000;
module.exports = function () {
	return function (req, res, next) {
		if (request.headers['x-forwarded-proto'] === 'http') {
			response.redirect(301, 'https://' + request.headers.host + request.url);
			return;
		}
		helmet.hsts({
			maxAge: ONE_YEAR,
			includeSubdomains: true,
			force: true
		})(req, res, function(){
			helmet.hidePoweredBy()(req, res, next);
		});
	};
};