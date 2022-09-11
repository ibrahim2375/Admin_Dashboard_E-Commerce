import React, { useState } from 'react'
//components
import Loading from '../components/Layouts/Loading'
import CalculateSalesPage from '../components/CalculateSales/CalculateSales';
// //mui components 
import Container from '@mui/material/Container'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//api request
import { public_request } from '../util/requestMethods'
function CalculateSales({ orders }) {
    const [selectedOrders, setSelectedOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    // handel checked
    const handleCheckedOrder = (event, order) => {
        if (event.target.checked) {
            setSelectedOrders([...selectedOrders, order])
        } else {
            setSelectedOrders(selectedOrders.filter(s => s._id !== order?._id))
        }
    }
    //add to sales table to calculate total money and add data to chart 
    const addToSales = async () => {
        setLoading(true)
        //update as saved 
        await public_request.post('/orders/update', { selectedOrders })
            .then(async (res) => {
                if (res.status === 200) {
                    //add to table
                    await public_request.post('/orders/add-sales', { selectedOrders })
                        .then(res => {
                            setLoading(false)
                            setTimeout(() => window.location.reload(), 1000)
                        }).catch(err => { console.log(err) })
                }
            }).catch(err => { console.log(err) })

    }
    return (
        <Container>
            <Typography variant='h4' className='center' style={{ margin: '20px' }}>Add To Sales Charts</Typography>
            <Alert severity="warning" style={{ margin: '20px' }}>
                you have to delete all orders after this proess — Warning don`t do this if all orders not delived!</Alert>
            {/* orders table */}
            <CalculateSalesPage orders={orders} handleCheckedOrder={handleCheckedOrder} />
            <div className='center'>
                <Button variant="outlined" color="warning" disabled={selectedOrders.length > 0 ? false : true} onClick={addToSales} style={{ margin: '20px' }}>
                    Upload order to sales !
                </Button>
            </div>
            {loading && <Loading />}
        </Container>
    )
}
export default CalculateSales

