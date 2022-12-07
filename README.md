# Rent My Stuff API

## Project Description

This is the server-side of our app, rent_my_stuff_api. The technology used on the server-side are, as follows,

```js
  "bcrypt": "^5.1.0",
  "body-parser": "^1.20.1",
  "cookie-parser": "^1.4.6",
  "cors": "^2.8.5",
  "dotenv": "^16.0.3",
  "express": "^4.18.2",
  "express-session": "^1.17.3",
  "morgan": "^1.10.0",
  "nodemon": "^2.0.20",
  "pg": "^8.8.0"
```

The members who did this project are [Robert Servado](https://github.com/ArjayS) and [Roberto Cervantes Betancourt](https://github.com/robertocervantesbetancourt)

## Project Conception

We did our Project Planning using Miro, [RentMyStuff](https://miro.com/app/board/uXjVPekaWGA=/?share_link_id=417791244789)

### Setup Instruction

Install dependencies with,

```sh
npm install
```

#### Create the Database

To load all of the information within the db directory and go to the root directory of 'rent_my_stuff_api',

and then connect to your <PGUSER>,

```sql
psql <PG USER>
```

Create a database within psql

```sql
CREATE DATABASE rentmystuff;
```

Copy the _.env.example_ file to _.env_ and fill in the necessary PostgreSQL configuration. The _node-postgres_ library uses the environment variables by default.

```sh
PORT=3005

PGUSER=labber
PGPASSWORD=labber
PGHOST=localhost
PGDATABASE=rentmystuff
PGPORT=5432
```

#### Setup Database (Create Table and Seeding Information)

To load all of the information within the db directory go to the root directory of 'rent_my_stuff_api',

and then connect to your <PGUSER>,

```sql
psql <PG USER>
```

and then connect to the rentmystuff DATABASE,

```sql
\c rentmystuff
```

within psql run the following codes to create the _table setup_ and _seeding information_,

```sql
\i db/schema/create.sql
```

and,

```sql
\i db/seeds/seeding.sql
```

You should have all the needed information for the database

### Run the Server

Running the server normally,

```sh
npm start
```

## Future Plans for the project

- List of goals and milestones will be displayed here soon
