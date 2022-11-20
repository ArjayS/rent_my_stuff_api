# rent_my_stuff_api

Use the _psql -U development_ command to login to the PostgreSQL server with the username _development_ and the password _development_. This command **MUST** be run in vagrant terminal, we are using the PostgreSQL installation provided in the vagrant environment.

Create a database with the command _CREATE DATABASE rentmystuff;_

Copy the _.env.example_ file to _.env_ and fill in the necessary PostgreSQL configuration. The _node-postgres_ library uses the environment variables by default.

```sh
PORT=3005

PGUSER=development
PGPASSWORD=development
PGHOST=localhost
PGDATABASE=rentmystuff
PGPORT=5432
```
