var assert = require('assert');
var sut = require('../');

describe('sample', function() {
    it('returns "foo"', function() {
        assert(sut() === 'foo');
    });
});
