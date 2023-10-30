# Stackless Technical Interview

## Backend

- [x] Connect to Snowflake and query to get total rows.
- [x] Create an endpoint `/api/stackless` that returns the retrieved data in JSON format.
- [ ] Retrieve data: 
  - [x] total number of rows
  - [ ] database size in gb
  - [ ] total number of tables
  - [ ] data points defined as the sum of the number of columns of each table times the number of rows for that table for each table in the database
- [ ] Create a database to store the retrieved data with a timestamp for when they were retrieved in UTC.

## Frontend

- [x] Consume the `/api/stackless` endpoint.
- [x] Display the data in a table.
- [ ] (Optional) Display the metrics graphically with a library

## Deployment

- [x] Create Dockerfiles for the server and frontend.
- [x] Create a docker-compose file to run both components.
- [x] Provide instructions to run the app


## How to run the application

1. Clone the repository.
2. Navigate to the project directory.
3. Run `docker-compose build` to build the Docker images.
4. Run `docker-compose up` to start the application.
5. Access the API endpoint at `http://0.0.0.0:3000/api/stackless`.
6. Access the React application at `http://0.0.0.0:4173`.
