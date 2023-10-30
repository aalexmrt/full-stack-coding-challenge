const snowflake = require('snowflake-sdk')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3000
const { SNOWFLAKE_DATABASE, SNOWFLAKE_ENDPOINT, SNOWFLAKE_PASSWORD, SNOWFLAKE_ROLE, SNOWFLAKE_USER, SNOWFLAKE_WAREHOUSE } = require('./const.js')
const data = require('./mocks.json')

const connection = snowflake.createConnection({
  account: SNOWFLAKE_ENDPOINT,
  username: SNOWFLAKE_USER,
  password: SNOWFLAKE_PASSWORD,
  database: SNOWFLAKE_DATABASE,
  warehouse: SNOWFLAKE_WAREHOUSE,
  role: SNOWFLAKE_ROLE
})

connection.connect(
  function (err, conn) {
    if (err) {
      console.error('Unable to connect: ' + err)
    } else {
      console.log('Successfully connected to Snowflake.')
    }
  }
)

// Get the total rows of the table
connection.execute({
  sqlText: 'SELECT COUNT(*) FROM "INTERVIEW_DB"."CUSTOMER_SEGMENTATION"."DATASET"',
  complete: function (err, stmt, rows) {
    if (err) {
      console.error('Failed to execute statement due to the following error: ' + err.message)
    } else {
      console.log('Successfully executed statement: ' + stmt.getSqlText())

    }
  }
})

// I can't get the size of the db
// connection.execute({
//   sqlText: 'SELECT pg_size_pretty(pg_total_relation_size(\'INTERVIEW_DB\'))',
//   complete: function (err, stmt, rows) {
//     if (err) {
//       console.error('Failed to execute statement due to the following error: ' + err.message)
//     } else {
//       console.log('Successfully executed statement: ' + stmt.getSqlText())
//       console.log(rows)
//     }
//   }
// })

app.get('/api/stackless', (req, res) => {
  res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
