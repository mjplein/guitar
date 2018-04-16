### Schema

CREATE DATABASE guitars_db;
USE guitars_db;

CREATE TABLE guitars
(
	id INT NOT NULL AUTO_INCREMENT,
	guitar_name VARCHAR(255) NOT NULL,
	strummed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
