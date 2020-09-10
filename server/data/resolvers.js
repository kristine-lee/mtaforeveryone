// /**
//  * resolvers tell us how to handle our queries
// this is where you plug in the external map API and stuff. Be sure to stash the API keys in another file

// * https://github.com/the-road-to-graphql/fullstack-apollo-express-postgresql-boilerplate/tree/master/src/resolvers very helpful
// **/

// // const { GraphQLScalarType } = require('graphql')

// const { combineResolvers, skip } = require('graphql-resolvers')
// const {AMS, User, Routes} = require('../db')

// //how to import from NYS?

// //query = GET
// //mutation = POST, PUT, DELETE (defined in schema)

// const resolvers = {
//   /*
//   GraphQL Query for getting stations using AMS model, defined through Sequelize
//   */
//   Query: {
//     // getStations: () => {
//     //   return Object.values(AMS)
//     // },
//     getStations: () => AMS.findAll({}),
//     getOneStation: (parent, {id}) => {
//       return parent.find(parent => parent[id] == id) //because type id is ID
//     }
//   },
//   /*
//   GraphQL Mutation for adding a new user and return user after successfully adding it
//   */
//   Mutation: {
//     addUser: (parent, user) => {
//       const newUser = new User({location: user.location});
//       return newUser.save()
//     }
//   }
// }

// module.exports = resolvers
