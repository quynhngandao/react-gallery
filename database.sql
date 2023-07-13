-- Name of database: "weekend-gallery"

CREATE TABLE weekend_gallery (
    id SERIAL PRIMARY KEY,
    alt VARCHAR(800),
    path VARCHAR(10000),
    description VARCHAR(800),
    likes INTEGER DEFAULT 0
);

-- Test data 
INSERT INTO weekend_gallery (alt, path, description)
VALUES ('Cheeto', 'images/cheeto.jpeg', 'Cheeto is cuddly and mellow'), ('Eva', 'images/eva.jpeg', 'Eva is shy'),  ('Kuma', 'images/kuma.jpeg', 'Kuma is shy and socially awkward'),  ('Petunia', 'images/petunia.jpeg', 'Petunia is sweet'),  ('Roxie', 'images/roxie.jpeg', 'Roxie is smart'),  ('Thor', 'images/thor.jpeg', 'Thor is chonky');
