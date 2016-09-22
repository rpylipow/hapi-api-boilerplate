const Users = require('../collections').Users;

const routes = [
  {
    method: 'GET',
    path:'/api/v1/users/{userId}',
    handler(request, reply) {
      const apiKey = request.query.apiKey;
      if (!apiKey || apiKey !== '1234') {
        return reply({error: {message: 'Incorrect API Key'}})
      }
      return reply({userId: request.params.userId});
    }
  }
]

module.exports = routes;
