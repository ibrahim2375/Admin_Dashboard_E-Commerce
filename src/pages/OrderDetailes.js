import { useEffect, useState } from 'react';
import OrderDetailesTable from '../components/OrderDetailes/OrderDetailesTable'
import { useParams } from 'react-router-dom'
//api request
import { public_request } from '../util/requestMethods'
function OrderDetailes() {
    const param = useParams()
    const [order, setOrder] = useState({})
    //get order 
    useEffect(() => {
        const getOrders = async () => {
            await public_request.get(`/order/get/${param.id}`)
                .then(res => {
                    setOrder(res?.data)
                }).catch(err => console.log(err))
        }
        getOrders()

    }, [param.id])
    return (
        <div>
            <OrderDetailesTable order={order} />
        </div>
    )
}

export default OrderDetailes