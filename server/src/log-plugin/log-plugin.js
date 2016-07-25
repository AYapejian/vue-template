'use strict';
const routes = module.exports = {};

routes.register = function register(server, options, next) {
    server.on('route', (route, connection, server) => {
        console.log('New route added: ' + route.path);
    });
    server.on('response', (request) => {
        console.log(request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.url.path + ' --> ' + request.response.statusCode);
    });
    server.on('log', (event, tags) => {
        console.log(Object.keys(tags), (event.data || 'unspecified'));
    });
    server.on('request', (request, event, tags) => {
        console.log('New request: ' + request.id);
    });
    server.on('request-error', (request, err) => {
        console.log('Error response (500) sent for request: ' + request.id + ' because: ' + err.message);
    });

    next();
};

routes.register.attributes = {
    name:    'log-plugin',
    version: '0.1.0'
}
