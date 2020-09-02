//configure the Express(HTML) server here

const express = require('express');
const path = require('path');
const app = express();
// const cors = require('cors');
const session = require('express-session');
const morgan = require('morgan');
const dotenv = require('dotenv')
const { ApolloServer } = require('apollo-server-express')

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

//session middleware to persist a user
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'yall are going to jail periodt!',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
)

//serving static files
app.use(express.static(path.join(__dirname, '..', 'public')))

//initialize apollo server
const server = new ApolloServer({
  introspection: true,
  playground: true,
  debug: true,
  // TODO: need to import typedefs and resolvers
  typeDefs,
  resolvers,
})


//let's send index.html babey
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

//apply apollo server as middleware (express)
server.applyMiddleware({app, path: '/graphql'})

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

