const Hapi = require('hapi');
const routes = require('./routes');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  port: process.env.PORT || 8000
});

// Add the routes
server.route(routes);

// Start the server
server.start((err) => {

  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
