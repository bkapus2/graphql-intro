CREATE TABLE candidates (
	candidate_id SERIAL PRIMARY KEY,
	name TEXT
);

CREATE TABLE emails (
	email_id SERIAL PRIMARY KEY,
	candidate_id INTEGER NOT NULL REFERENCES candidates,
	address TEXT NOT NULL,
	is_bad BOOLEAN NOT NULL DEFAULT FALSE
);