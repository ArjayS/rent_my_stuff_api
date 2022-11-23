DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS items CASCADE;
DROP TABLE IF EXISTS reservations CASCADE;
DROP TABLE IF EXISTS user_reviews CASCADE;
DROP TABLE IF EXISTS item_reviews CASCADE;

CREATE DATABASE rentmystuff;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL,
  user_image VARCHAR(255) NOT NULL
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  item_name VARCHAR(255) NOT NULL,
  item_location VARCHAR(255) NOT NULL,
  item_base_price INTEGER NOT NULL DEFAULT 0,
  item_status BOOLEAN NOT NULL DEFAULT TRUE,
  item_image VARCHAR(255) NOT NULL,
  item_description TEXT
);

CREATE TABLE reservations (
  id SERIAL PRIMARY KEY NOT NULL,
  guest_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  item_id INTEGER REFERENCES items(id) ON DELETE CASCADE NOT NULL,
  rsrv_start_date DATE,
  rsrv_end_date DATE,
  rsrv_date_returned DATE,
  rsrv_price_bid INTEGER NOT NULL DEFAULT 0,
  rsrv_approval BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE user_reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  guest_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  item_id INTEGER REFERENCES items(id) ON DELETE CASCADE,
  rent_worthy INTEGER NOT NULL check(rent_worthy >= 1 AND rent_worthy <= 10),
  rent_message TEXT
);

CREATE TABLE item_reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  guest_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  item_id INTEGER REFERENCES items(id) ON DELETE CASCADE,
  item_rating INTEGER NOT NULL check(item_rating >= 1 AND item_rating <= 5),
  item_message TEXT
);