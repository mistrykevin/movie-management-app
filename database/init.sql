-- CREATE DATABASE movie_db;-- 

USE movie_db;

-- CREATE TABLE movies (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     casting TEXT,
--     releaseDate DATE,
--     director VARCHAR(255),
--     producer VARCHAR(255)
-- );

INSERT INTO movies (name, casting, releaseDate, director, producer)
VALUES
('Inception', 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page', '2010-07-16', 'Christopher Nolan', 'Emma Thomas'),

('The Dark Knight', 'Christian Bale, Heath Ledger, Aaron Eckhart', '2008-07-18', 'Christopher Nolan', 'Charles Roven'),

('Interstellar', 'Matthew McConaughey, Anne Hathaway, Jessica Chastain', '2014-11-07', 'Christopher Nolan', 'Emma Thomas'),

('Avengers: Endgame', 'Robert Downey Jr., Chris Evans, Mark Ruffalo', '2019-04-26', 'Anthony Russo, Joe Russo', 'Kevin Feige'),

('Titanic', 'Leonardo DiCaprio, Kate Winslet', '1997-12-19', 'James Cameron', 'James Cameron');



