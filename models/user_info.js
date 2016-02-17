var orm = require('../config/orm.js');

var userInfo = {
  userLogin: function(email, password, cb){
    orm.login('users', email, password, cb);
  }
}

module.exports = userInfo;