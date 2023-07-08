CREATE TABLE weekend_gallery (
    id SERIAL PRIMARY KEY,
    alt VARCHAR(800) NOT NULL,
    path VARCHAR(800) NOT NULL,
    description VARCHAR(800) NOT NULL,
    likes INTEGER DEFAULT 0
);

INSERT INTO weekend_gallery (alt, path, description)
VALUES ('cat', 'images/cheeto.jepg', 'Cheeto is cuddly and mellow'), ('dog', 'images/eva.jpeg', 'Eva is shy'),  ('dog', 'images/kuma.jepg', 'Kuma is shy and socially awkward'),  ('dog', 'images/petunia.jepg', 'Petunia is sweet'),  ('dog', 'images/roxie.jepg', 'Roxie is smart');
