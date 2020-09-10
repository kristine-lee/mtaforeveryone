//configure the Express(HTML) server here

const express = require('express');
const path = require('path');
const { db } = require('./db')
const app = express();
// const cors = require('cors');
const session = require('express-session');
const morgan = require('morgan');
const dotenv = require('dotenv');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sessionStore = new SequelizeStore({ db });
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./data/userSchema')
const resolvers = require('./data/userResolver')

// const apollo = require('./graphql')

const PORT = process.env.PORT || 3030

module.exports = app

require('dotenv').config()

if (process.env.NODE_ENV !== 'production') require('../secrets')

// server.applyMiddleware({ app });

//logging middleware;
app.use(morgan('dev'))
// app.use(cors())

//body parsing
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//serving static files
app.use(express.static(path.join(__dirname, '..', 'public')))

//session middleware to persist a user
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'yall are going to jail periodt!',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
)

//let's send index.html babey
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

//initialize apollo server
const server = new ApolloServer({
  introspection: true,
  playground: true,
  debug: true,
  typeDefs,
  resolvers,
})

//apply apollo server as middleware (express)
server.applyMiddleware({app, path: '/graphql'})

//error-handling middleware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
  }
);

const syncDb = () => db.sync()

//for graphql
// server.listen({ port: process.env.PORT || 4141 }).then(({ url }) => {
//   console.log(`🚀Yay! Server ready at ${url}`)
// })

app.listen(PORT, function () {
  try {
  console.log("HTTP server listening on port", PORT)
  syncDb()
  } catch (error) {
    console.error(error)
  }}
  )
