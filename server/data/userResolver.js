const { db, User } = require('../db')

module.exports = {
  Query: {
    user: ({id}) => User.findOne({where: {id}})
  }
}
