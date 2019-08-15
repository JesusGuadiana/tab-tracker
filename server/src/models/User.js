const Promise = require('bluebird')
const bycrypt = Promise.promisifyAll(require('bcrypt-nodejs'))


function hashPassword (user, options) {
    const SALT_FACTOR = 8
  
    if (!user.changed('password')) {
      return
    }
  
    return bycrypt
      .genSaltAsync(SALT_FACTOR)
      .then(salt => bycrypt.hashAsync(user.password, salt, null))
      .then(hash => {
        user.setDataValue('password', hash)
      })
  }

  module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING
    }, {
      hooks: {
        beforeSave: hashPassword
      }
    })

    User.prototype.comparePassword = function (password) {
        return bycrypt.compareAsync(password, this.password)
      }
    return User
}
