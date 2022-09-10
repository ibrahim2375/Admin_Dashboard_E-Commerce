import React from 'react'
//mui component
import Typography from '@mui/material/Typography'
//css
import '../../css/OrderDetails.css'
function OrderDetailesTable({ order }) {
  return (
    <div className='details' >
      <Typography variant='h6' className='center' style={{ margin: '20px' }}>Order Details</Typography>
      {/* img */}
      <img src={`${process.env.REACT_APP_API}/assets/uploads/${order?.order?.img}`} alt="" width="100" height="100" />
      {/* name */}
      <div className="field">
        <h4>Name</h4>
        <p>{order?.order?.name}</p>
      </div>
      {/* quantity */}
      <div className="field">
        <h4>Quantity</h4>
        <p>{order?.order?.quantity}</p>
      </div>

      {/* price */}
      <div className="field">
        <h4>Price for one of {order?.order?.name}</h4>
        <p>{order?.order?.price}</p>
      </div>
      <Typography variant='h6' className='center' style={{ margin: '20px' }}>User Details</Typography>
      {/* name */}
      <div className="field">
        <h4>Name</h4>
        <p>{order?.user?.name}</p>
      </div>
      {/* email */}
      <div className="field">
        <h4>Email</h4>
        <p>{order?.user?.email}</p>
      </div>
      {/* address */}
      <div className="field">
        <h4>Address</h4>
        <p>{order?.user?.address}</p>
      </div>
      {/* number */}
      <div className="field">
        <h4>Number</h4>
        <p>{order?.user?.number}</p>
      </div>
    </div>
  )
}

export default OrderDetailesTable