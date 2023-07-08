CREATE TABLE weekend_gallery (
    id SERIAL PRIMARY KEY,
    alt VARCHAR(800) NOT NULL,
    path VARCHAR(800) NOT NULL,
    description VARCHAR(800) NOT NULL,
    likes INTEGER DEFAULT 0
);

INSERT INTO weekend_gallery (alt, path, description)
VALUES ('cat', 'images/cheeto.jpeg', 'Cheeto is cuddly and mellow'), ('dog', 'images/eva.jpeg', 'Eva is shy'),  ('dog', 'images/kuma.jpeg', 'Kuma is shy and socially awkward'),  ('dog', 'images/petunia.jpeg', 'Petunia is sweet'),  ('dog', 'images/roxie.jpeg', 'Roxie is smart');