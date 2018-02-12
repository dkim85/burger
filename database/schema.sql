CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

CREATE TABLE burgers(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured boolean,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Criminal Burger' , FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Death Tongue' , FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Rotten Burger' , FALSE);

SELECT * FROM burgers_db.burgers;