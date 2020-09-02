const { gql } = require('apollo-server-express')
const { PointObject } = require('graphql-geojson')


//typedefs defines the data types and query structures
//https://github.com/the-road-to-graphql/fullstack-apollo-express-postgresql-boilerplate/tree/master/src/schema very helpful
//https://www.robinwieruch.de/graphql-apollo-server-tutorial#apollo-server-type-definitions


//_id is automatically created by postgres
const typeDefs = gql`

type Train {
  name: String!
}

type AMS {
  _id: ID!,
  name: String!,
  trains: [Train],
  location: Coordinate
}

type Coordinate {
  lang: Int!,
  long: Int!
}

type User {
  _id: ID!,
  location: Coordinate
}

type Query {
  getStations: [AMS]
  getOneStation(id: Int!): AMS
}

type Mutation {
  postUserLocation(id: ID!): User
}

`

module.exports = typeDefs
