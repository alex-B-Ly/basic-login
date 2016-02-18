var orm = require('../config/orm.js');

var userInfo = {
  showUsers: function(cb){
    orm.showEverything('users', cb);
  },
  userLogin: function(email, password, cb){
    orm.login('users', email, password, cb);
  }
}

module.exports = userInfo;

// MYSQL TEST SUCCESS - Tested showusers and got data back