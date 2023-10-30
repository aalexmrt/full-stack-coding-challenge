import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const API_URL = 'http://0.0.0.0:3000/api/stackless'

function App () {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(API_URL)
      const data = await response.json()
      setData(data)
    }

    getData()
  }, [])

  return (
    <>
      <h1>Stackless</h1>
      <div className='App'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Datetime</th>
                    <th>Database Size</th>
                    <th>Rows</th>
                    <th>Tables</th>
                    <th>DataPoints</th>
                  </tr>
                </thead>
                <tbody>

                {data?.map((item, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{item.datetime}</td>
                    <td>{item.databaseSize}</td>
                    <td>{item.rows}</td>
                    <td>{item.tables}</td>
                    <td>{item.dataPoints}</td>
                  </tr>

                ))
                  }
                  </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
