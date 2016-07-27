'use strict';
const routes = module.exports = {};

const _internals = { handlers: {} };

const fakeUsers = [
    { userId: 1, email: 'test1@test.com',     firstName: 'Peter',  lastName: 'Parker', settings: { nickname: '1' } },
    { userId: 2, email: 'test2@test.com',     firstName: 'Joe',    lastName: 'Smith' , settings: { nickname: '2' } },
    { userId: 3, email: 'someother@test.com', firstName: 'Jackie', lastName: 'Test'  , settings: { nickname: '3' } },
    { userId: 4, email: 'admin@admin.com',    firstName: 'Lisa',   lastName: 'Jones' , settings: { nickname: '4' } },
    { userId: 5, email: 'john@test.com',      firstName: 'John',   lastName: 'Smith' , settings: { nickname: '5' } },
    { userId: 6, email: 'asdf@fake.com',      firstName: 'Bruce',  lastName: 'Banner', settings: { nickname: '6' } }
]

_internals.handlers = {
    getUsers: function getUsers(request, reply) {
        return reply(fakeUsers);
    },
    getUser: function getUser(request, reply) {
        const userId = request.params.userId;
        return reply(fakeUsers.filter(user => user.userId === userId));
    },
    getUserSettings: function getUserSettings(request, reply) {
        const userId = request.params.userId;
        const foundUser = fakeUsers.filter(user => user.userId === userId);
        const returnVal = (foundUser && foundUser.length) ? foundUser[0].settings : null;
        if (returnVal) return reply({ userId, settings: returnVal });

        return reply(Boom.notFound('User not found'));
    }
};

routes.register = function register(server, options, next) {
    server.route([
        {
            method:  'GET',
            path:    '/users',
            handler: _internals.handlers.getUsers
        },
        {
            method:  'GET',
            path:    '/users/{userId}',
            handler: _internals.handlers.getUser
        },
        {
            method:  'GET',
            path:    '/users/{userId}/settings',
            handler: _internals.handlers.getUserSettings
        }
    ]);

    next();
};

routes.register.attributes = {
    name:    'api-routes',
    version: '0.1.0'
}
