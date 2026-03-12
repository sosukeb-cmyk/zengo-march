
  # Itinerary Creation Page

  This is a code bundle for Itinerary Creation Page. The original project is available at https://www.figma.com/design/ikzjXLaheWEk5gDeSWtXNm/Itinerary-Creation-Page.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the frontend development server.

Run `npm run server` to start the backend booking API.

  The backend defaults to SQLite (stored in `server/data/database.sqlite`). To use MySQL instead, set these environment variables before running the server:

  ```bash
  export DB_DIALECT=mysql
  export DB_HOST=127.0.0.1
  export DB_PORT=3306
  export DB_USER=root
  export DB_PASSWORD=""
  export DB_NAME=planner
  ```

  Then run:
  ```bash
  npm run server
  ```

  You can connect to the database via MySQL Workbench using the same host/user/password and the `planner` database.

  In development, the frontend proxies `/api/*` requests to the backend on `http://localhost:4000`.
  