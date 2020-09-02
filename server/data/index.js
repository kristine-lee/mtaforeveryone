const schema = require('./schema');
const resolvers = require('./resolvers')

const apollo = new ApolloServer({
  schema,
  resolvers
})

module.exports = apollo

//think i should use graphql-tools to stitch together schema and resolvers smh
