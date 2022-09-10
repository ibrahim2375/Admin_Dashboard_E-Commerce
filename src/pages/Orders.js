import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography'
import OrdersTable from '../components/Orders/OrdersTable'
//api request
import { public_request } from '../util/requestMethods'
function Orders() {
    const [orders, setOrders] = useState([])

    //accept order
    const acceptOrder = async (id) => {
        await public_request.post(`/order/accept/${id}`,
         { accept: true })
            .then(res => {
                setOrders(orders.map((o) => o._id === id ? { ...o, accept: true } : o))
                console.log(res.data)
            }).catch(err => console.log(err))
    }
    //order Delivered
    const Delivered = async (id) => {
        await public_request.post(`/order/accept/${id}`,
            { arrived: true })
            .then(res => {
                setOrders(orders.map((o) => o._id === id ? { ...o, arrived: true } : o))
                console.log(res.data)
            }).catch(err => console.log(err))
    }
    //delete order
    const deleteOrder = async (id) => {
        await public_request.get(`/order/delete/${id}`)
            .then(res => {
                if (res.status === 200) {
                    setOrders(orders.filter((u) => u._id !== id))
                }
            }).catch(err => console.log(err))
    }
    //get orders of osh app e-commerce
    useEffect(() => {
        const getOrders = async () => {
            await public_request.get('/orders/get')
                .then(res => {
                    setOrders(res?.data)
                }).catch(err => console.log(err))
        }
        getOrders()

    }, [])
    return (
        <>
            <Typography variant='h6' style={{ margin: '20px' }}>Orders</Typography>
            <OrdersTable orders={orders} acceptOrder={acceptOrder} deleteOrder={deleteOrder} Delivered={Delivered} />
        </>
    )
}
export default Orders