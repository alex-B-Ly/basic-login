var connection = require('./connection.js');

var orm = {
  showEverything: function(table, callback){
    connection.query('SELECT * FROM '+table, callback);
  },
  login: function(table, email, password, callback){
    var q = 'SELECT * FROM ' + table + ' WHERE email=? AND password=?';
    connection.query(q, [email, password], callback);
  },
  register: function(table, fName, lName, email, password, callback){
    var q = 'INSERT INTO ' + table + '(f_name, l_name, email, password) VALUES (?,?,?,?);';
    connection.query(q, [fName, lName, email, password], callback);
  }
}

module.exports = orm;

// TEST SUCCESS - showEverything, login and register connecting to database