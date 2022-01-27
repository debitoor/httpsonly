const helmet = require('helmet');
const ONE_YEAR = 31536000000;

module.exports = () => httpsOnlyMiddleware;

function httpsOnlyMiddleware(req, res, next) {
	if (req.headers['x-forwarded-proto'] === 'http') {
		res.redirect(301, 'https://' + req.headers.host + req.url);
		return;
	}

	helmet.hsts({
		maxAge: ONE_YEAR,
		includeSubDomains: true,
		force: true
	})(req, res, () => helmet.hidePoweredBy()(req, res, next));
}