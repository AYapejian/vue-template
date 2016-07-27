'use strict';
import Joi  from 'joi';
import Boom from 'boom';
const routes = module.exports = {};

const _internals = { handlers: {} };

_internals.handlers = {
    login: function login(request, reply) {
        const { email, password } = request.payload;

        if (email !== 'admin@test.com' || password !== 'test') {
            return reply(Boom.unauthorized('Email or password incorrect'));
        }

        return reply({
            firstName: 'Joe',
            lastName:  'Adminy',
            email:     'admin@test.com'
        }).header('x-auth-token', '123abc');
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
                        email:    Joi.string().required(),
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
