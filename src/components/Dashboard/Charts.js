import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    { name: 'Page A', uv: 100, pv: 1400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 3400, amt: 2400 },
    { name: 'Page C', uv: 400, pv: 2300, amt: 2400 },
    { name: 'Page D', uv: 500, pv: 2600, amt: 2400 }
];

function Charts() {
    return (
        <ResponsiveContainer  width="90%" height={300}>
            <LineChart  data={data} >
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>

    )
}

export default Charts
