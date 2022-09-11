import { useState, useEffect } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function Charts({ sales }) {
    const [salesData, setSalesData] = useState([
        { category: 'laptops', count: 0 },
        { category: 'watches', count: 0 },
        { category: 'mobiles', count: 0 },
        { category: 'headphone', count: 0 }
    ])
    useEffect(() => {
        const filterSalesDpendOnCateory = async () => {
            await sales?.map(product =>
                setSalesData(salesData => salesData.map(data => data.category === product.category ? { ...data, count: +1 } : data)))

        }
        filterSalesDpendOnCateory()
    }, [sales])
    return (
        <ResponsiveContainer width="90%" height={300}>
            <LineChart data={salesData} >
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    )
}
export default Charts
