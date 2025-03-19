CREATE DATABASE IF NOT EXISTS pruebas;

USE pruebas;

CREATE TABLE bus_services (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL UNIQUE,
    description VARCHAR(250),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    PRIMARY KEY (id) 
);

INSERT INTO bus_services (name, start_date, end_date)
VALUES ('LUNES A VIERNES', '2000-01-01', '2000-12-31');