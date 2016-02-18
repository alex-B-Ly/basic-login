var connection = require('./connection.js');

var orm = {
  showEverything: function(table, callback){
    connection.query('SELECT * FROM '+table, callback);
  },
  login: function(table, email, password, callback){
    var q = 'SELECT * FROM ' + table + ' WHERE email=? AND password=?';
    connection.query(q, [email, password], callback);
  }
  // TODO Create register method
}

module.exports = orm;

// TEST SUCCESS - connected to database