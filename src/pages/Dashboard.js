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

function Dashboard() {
  const [latestOrders, setLatestOrders] = useState([])
  //calculate total paied money from all orders
  useEffect(() => {
    const getLatestOrders = async () => {
      await public_request.get('/orders/get')
        .then(res => {
          setLatestOrders(res?.data)
        }).catch(err => console.log(err))
    }
    getLatestOrders()

  }, [])

  return (
    <>
      <Typography variant='h4' component='h3' style={{ marginTop: '20px' }}> Dashboard </Typography>
      <div className="dashboard_content">
        <div className="balance_info">
          <Card orders={latestOrders}/>
          <div className="chart">
            <Charts />
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