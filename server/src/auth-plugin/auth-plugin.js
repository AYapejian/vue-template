'use strict';
import Joi from 'joi';
const routes = module.exports = {};

const _internals = { handlers: {} };

_internals.handlers = {
    login: function login(request, reply) {
        return reply({ status: 'success' });
    },
    logout: function logout(request, reply) {
        return reply({});
    },
    getUserSettings: function getUserSettings(request, reply) {
        return reply({ userId: 1, settings: { nickname: 'test1' } });
    }
};

routes.register = function register(server, options, next) {
    server.route([
        {
            method:  'POST',
            path:    '/login',
            handler: _internals.handlers.login,
            config: {
                validate: {
                    payload: {
                        user:     Joi.string().required(),
                        password: Joi.string().required()
                    }
                }
            }
        },
        {
            method:  'DELETE',
            path:    '/login',
            handler: _internals.handlers.logout
        }
    ]);

    next();
};

routes.register.attributes = {
    name:    'auth-routes',
    version: '0.1.0'
}
