CREATE TABLE weekend_gallery (
    id SERIAL PRIMARY KEY,
    alt VARCHAR(800) NOT NULL,
    path VARCHAR(800) NOT NULL,
    description VARCHAR(800) NOT NULL,
    likes INTEGER DEFAULT 0
);

INSERT INTO weekend_gallery (alt, path, description)
VALUES ('a goat', 'images/goat_small.jpg', 'GOATED'), ('a cat', 'images/cat.jpeg', 'KATO');