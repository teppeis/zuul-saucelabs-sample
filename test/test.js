var test = require('tape');
var foo = require('../');

test('it returns "foo"', function(t) {
    t.plan(1);
    t.equal(foo(), 'foo');
});
