var helmet = require('helmet');
var ONE_YEAR = 31536000000;
module.exports = function () {
	return function (req, res, next) {
		if (req.headers['x-forwarded-proto'] === 'http') {
			res.redirect(301, 'https://' + req.headers.host + req.url);
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