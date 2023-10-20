# Stackless full-stack developer coding challenge

Your task is to build a Node.js (or Python) application that retrieves warehouse metrics from Snowflake, a cloud-based data warehousing platform. The application should store this information in a database table and display the metrics graphically over time in a front-end user interface.

## Requirements

### Retrieve Snowflake Warehouse Metrics
- Develop a Node.js (or Python) application that connects to Snowflake using appropriate libraries or APIs.
- Retrieve relevant warehouse metrics such as warehouse size, data points, number of rows, and number of tables.

### Database Integration
- Create a database (you can choose a database system like PostgreSQL, MySQL, or SQLite).
- Store the retrieved warehouse metrics in the database.
  
### Front-end
- Develop a front-end interface using a framework - React.
- Implement a dashboard where users can view metrics over time.
- *(Optional)* Display the metrics graphically using charts or graphs (you can use libraries like D3.js, Chart.js, or others).

### Docker and Docker Compose
- Package your application components (Back-end app, database, and front-end) into Docker containers.
- Use Docker Compose to orchestrate the deployment of the entire application stack.
- Provide clear instructions for building and running the application stack using Docker and Docker Compose.
