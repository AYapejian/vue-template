'use strict';
const routes = module.exports = {};

const _internals = { handlers: {} };

_internals.handlers = {
    getUsers: function getUsers(request, reply) {
        return reply([
            { userId: 1, email: 'test1@test.com' },
            { userId: 2, email: 'test2@test.com' }
        ]);
    },
    getUser: function getUser(request, reply) {
        const userId = request.params.userId;
        return reply({ userId: 1, email: 'test1@test.com' });
    },
    getUserSettings: function getUserSettings(request, reply) {
        return reply({ userId: 1, settings: { nickname: 'test1' } });
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
