var helmet = require('helmet');
var ONE_YEAR = 31536000000;
module.exports = function () {
	return function (request, response, next) {
		if (request.headers['x-forwarded-proto'] === 'http') {
			response.redirect(301, 'https://' + request.headers.host + request.url);
			return;
		}
		helmet.hsts({
			maxAge: ONE_YEAR,
			includeSubdomains: true,
			force: true
		})(request, response, function(req, res, next){
			helmet.hidePoweredBy()(req, res, next);
		});
	};
};