var orm = require('../config/orm.js');

var userInfo = {
  showUsers: function(cb){
    orm.showEverything('users', cb);
  },
  userLogin: function(email, password, cb){
    orm.login('users', email, password, cb);
  },
  userRegister: function(fName, lName, email, passw, cb){
    orm.register('users', fName, lName, email, passw, cb);
  }
}

module.exports = userInfo;

// TEST SUCCESS - showUsers and userLogin