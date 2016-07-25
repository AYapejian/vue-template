const test = require('tape');
const server = require('../index');

test('can get users', function(t) {
    t.plan(2);

    const options = {
        method: 'GET',
        url:    '/api/users'
    };

    return server.inject(options, function(response) {
        t.equal(response.statusCode, 200);
        t.equal(response.result.length, 2);
        t.end();
    });
});
