CREATE TABLE weekend_gallery (
    id SERIAL PRIMARY KEY,
    alt VARCHAR(800),
    path VARCHAR(10000),
    description VARCHAR(800),
    likes INTEGER DEFAULT 0
);

INSERT INTO weekend_gallery (alt, path, description)
VALUES ('cat', 'images/cheeto.jpeg', 'Cheeto is cuddly and mellow'), ('dog', 'images/eva.jpeg', 'Eva is shy'),  ('dog', 'images/kuma.jpeg', 'Kuma is shy and socially awkward'),  ('dog', 'images/petunia.jpeg', 'Petunia is sweet'),  ('dog', 'images/roxie.jpeg', 'Roxie is smart'),  ('dog', 'images/thor.jpeg', 'Thor is chonky');