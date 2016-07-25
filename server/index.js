import "babel-polyfill";
import { Server } from 'hapi';
import Blipp      from 'blipp';
import apiPlugin  from './src/api-plugin/api-plugin';
import logPlugin  from './src/log-plugin/log-plugin';
import authPlugin from './src/auth-plugin/auth-plugin';

const config = {
    apiHost: '0.0.0.0',
    apiPort: 3001,
    debug:   true
};

if (process.env === 'development') {
    process.on('unhandledRejection', (reason, promise) => console.log('unhandled', reason, promise));
    process.on('rejectionHandled',   (promise) => console.log('handled', promise));
}
const server = new Server({ debug: { request: ['error'] } });

server.connection({
    host: config.apiHost,
    port: config.apiPort
});

server.register({
    register: authPlugin,
    options:  config
}, { routes: { prefix: '/api/auth' } }, err => err ? console.log(err) : null);

server.register({
    register: apiPlugin,
    options:  config
}, { routes: { prefix: '/api' } }, err => err ? console.log(err) : null);


if (process.env !== 'test') {
    server.register({
        register: logPlugin,
        options:  config
    }, err => err ? console.log(err) : null);

    server.register({
        register: Blipp,
        options: {}
    });
}

server.start(() => console.log('Server running at:', server.info.uri));

module.exports = server;
