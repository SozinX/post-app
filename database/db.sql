-- Active: 1699820728282@@127.0.0.1@3306
-- to create a new database

CREATE DATABASE posts;

-- to use database
use posts;

-- creating a new table
CREATE TABLE post (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  description VARCHAR(250) NOT NULL,
  author VARCHAR(250) NOT NULL
);

-- to show all tables
show tables;

-- to describe table
describe post;
