const Sequelize = require('sequelize')
const db = require('./database')

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  }
})

module.exports = User
