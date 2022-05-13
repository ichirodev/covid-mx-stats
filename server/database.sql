CREATE DATABASE covidmx;

CREATE TABLE admins(
    admin_id SERIAL PRIMARY KEY,
    email VARCHAR(64),
    pass VARCHAR(64)
);
