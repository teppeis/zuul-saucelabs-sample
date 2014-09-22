var assert = require('power-assert');
var sample = require('../');

describe('sample', function() {
    it('returns "foo"', function() {
        assert(sample() === 'foo');
    });
});

describe('RegExp.prototype.exec', function() {
    it('returns undefined when an optional capturing is not matched', function() {
        var actual = /foo(bar)?/.exec('foo');
        assert(actual.length === 2);
        assert(actual[0] === 'foo');
        assert(actual[1] === undefined);
    });
});
