module.exports = function () {
	return function (request, response, next) {
		if (request.headers['x-forwarded-proto'] === 'http') {
			response.redirect(301, 'https://' + request.headers.host + request.url);
			return;
		}
		next();
	};
};