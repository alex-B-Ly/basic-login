var connection = require('./connection.js');

var orm = {
  login: function(table, email, password, callback){
    var q = 'SELECT * FROM ' + table + ' WHERE email=?, password=?';
    connection.query(q, [email, password], callback);
  }
  // TODO Create register method
}

module.exports = orm;