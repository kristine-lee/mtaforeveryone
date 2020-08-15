const express = require('express');
const path = require('path');
const app = express();
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');
const session = require('express-session');
const morgan = require('morgan');
const PORT = process.env.PORT || 3030

module.exports = app

//constructing a schema using graphQL language
// const typeDefs = gql`
//     type Query {
//       hello: String
//   }
// `;

//constructing a resolver
// const resolvers = {
//   Query: {
//     hello: () => 'Hello world!',
//   },
// };

// const server = new ApolloServer({ typeDefs, resolvers });
// server.applyMiddleware({ app });

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//app.use('/api', require('./api'))
app.use(express.static(path.join(__dirname, '..', 'public')))



app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

//error-handling middleware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
  }
);

app.listen(PORT, () =>
    console.log(`Starting the party on port: ${PORT}`)
  )
