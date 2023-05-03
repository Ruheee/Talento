DROP TABLE IF EXISTS job_seekers CASCADE;
DROP TABLE IF EXISTS employers CASCADE;
DROP TABLE IF EXISTS messages CASCADE;
DROP TABLE IF EXISTS favourites CASCADE;
DROP TABLE IF EXISTS careers CASCADE;
DROP TABLE IF EXISTS matches CASCADE;
DROP TABLE IF EXISTS job_listings CASCADE;

CREATE TABLE job_seekers (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  career_id INTEGER REFERENCES careers(id) ON DELETE CASCADE,
  about_me TEXT,
  cover_letter TEXT,
  resume VARCHAR(255),
  skills VARCHAR(255),
  location VARCHAR(255),
  social_media VARCHAR(255)
);

CREATE TABLE employers (
  id SERIAL PRIMARY KEY NOT NULL,
  company_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  career_id INTEGER REFERENCES careers(id) ON DELETE CASCADE,
  company_logo VARCHAR(255),
  company_description TEXT,
  location VARCHAR(255),
  social_media VARCHAR(255)
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  job_seekers_id INTEGER REFERENCES job_seekers(id) ON DELETE CASCADE,
  employers_id INTEGER REFERENCES employers(id) ON DELETE CASCADE,
  message TEXT NOT NULL,
  time_stamp TIMESTAMP DEFAULT NOW()
);

CREATE TABLE favourites (
  id SERIAL PRIMARY KEY NOT NULL,
  job_seekers_id INTEGER REFERENCES job_seekers(id) ON DELETE CASCADE,
  job_listings_id INTEGER REFERENCES job_listings(id) ON DELETE CASCADE
);

CREATE TABLE careers (
  id SERIAL PRIMARY KEY NOT NULL,
  career_name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE matches (
  id SERIAL PRIMARY KEY NOT NULL,
  job_seekers_id INTEGER REFERENCES job_seekers(id) ON DELETE CASCADE,
  job_listings_id INTEGER REFERENCES job_listings(id) ON DELETE CASCADE,
  seeker_status VARCHAR(255),
  employer_status VARCHAR(255)
);

CREATE TABLE job_listings (
  id SERIAL PRIMARY KEY NOT NULL,
  employers_id INTEGER REFERENCES employers(id) ON DELETE CASCADE,
  career_id INTEGER REFERENCES careers(id) ON DELETE CASCADE,
  job_title VARCHAR(255) NOT NULL,
  job_description TEXT NOT NULL,
  salary VARCHAR(255) NOT NULL,
  location VARCHAR(255),
  skills VARCHAR(255),
  date_posted TIMESTAMP DEFAULT NOW()
);
