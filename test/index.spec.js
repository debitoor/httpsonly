const httpsonly = require('../lib');
const mocks = require('node-mocks-http');

describe('index', () => {
	describe('when middleware is added', () => {
		it('should call next function', () => {
			const { req, res } = mocks.createMocks();

			let actuallyCalledNext = false;
			const next = () => actuallyCalledNext = true;

			httpsonly()(req, res, next);

			expect(actuallyCalledNext).to.equal.true;
		});
	});
});