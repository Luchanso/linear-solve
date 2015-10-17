var Linear = require('linear-solve');
var should = require('should');

describe('Linear', function() {
	describe('#solve(a, b)', function () {
		it('Check solve solution', function () {
			var solution = Linear.solve([[2, 1, -1], [-3, -1, 2], [-2, 1, 2]], [8, -11, -3]);

			solution.should.be.eql([2, 3, -1]);
		});
	});
});
