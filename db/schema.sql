CREATE DATABASE login_ex_db;
USE login_ex_db;

CREATE TABLE users(
  id INT AUTO_INCREMENT PRIMARY KEY,
  f_name VARCHAR(50) NOT NULL,
  l_name VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);