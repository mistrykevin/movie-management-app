CREATE DATABASE movie_db;

USE movie_db;

CREATE TABLE movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    casting TEXT,
    releaseDate DATE,
    director VARCHAR(255),
    producer VARCHAR(255)
);
