var assert = require('power-assert');
var sut = require('../');

describe('sample', function() {
    it('returns "foo"', function() {
        assert(sut() === 'foo!');
    });
});
