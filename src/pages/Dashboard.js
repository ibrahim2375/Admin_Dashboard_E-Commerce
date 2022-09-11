import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography'
//api request
import { public_request } from '../util/requestMethods'
//components
import Card from '../components/Dashboard/Card'
import Charts from '../components/Dashboard/Charts'
import LatestOrders from '../components/Dashboard/LatestOrders'
///css
import '../css/Dashboard.css'

function Dashboard({ latestOrders }) {
  const [sales, setSales] = useState([])
  useEffect(() => {
    const getSales = async () => {
      await public_request.get('/sales/get')
        .then(res => {
          if (res.status === 200) {
            setSales(res.data)
          }
        }).catch(err => console.log(err))
    }
    getSales()
  },[])

  return (
    <>
      <Typography variant='h4' component='h3' style={{ marginTop: '20px' }}> Dashboard </Typography>
      <div className="dashboard_content">
        <div className="balance_info">
          <Card sales={sales} />
          <div className="chart">
            <Charts sales={sales} />
          </div>
        </div>
        <div >
          <Typography variant='h5' style={{ marginTop: '20px', marginBottom: '20px' }}> LatestOrders </Typography>
          <LatestOrders latestOrders={latestOrders} />
        </div>
      </div>
    </>
  )
}

export default Dashboard