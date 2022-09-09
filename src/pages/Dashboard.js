import Typography from '@mui/material/Typography'
import React from 'react'
//components
import Card from '../components/Dashboard/Card'
import Charts from '../components/Dashboard/Charts'
import LatestOrders from '../components/Dashboard/LatestOrders'
///css
import '../css/Dashboard.css'
function Dashboard() {
  return (
    <>
      <Typography variant='h4' component='h3'  style={{ marginTop: '20px' }}> Dashboard </Typography>
      <div className="dashboard_content">
        <div className="balance_info">
          <Card />
          <div className="chart">
            <Charts />
          </div>
        </div>
        <div >
          <Typography variant='h5'  style={{ marginTop: '20px', marginBottom: '20px' }}> LatestOrders </Typography>
          <LatestOrders />
        </div>
      </div>
    </>
  )
}

export default Dashboard