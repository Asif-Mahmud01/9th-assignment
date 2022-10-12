import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './Statistics.css'


const Statistics = () => {
    const data = useLoaderData()
    // console.log(chart)
    return (
        <div className='statiscics'>
            {<LineChart width={520} height={400} data={data.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>}
            {/* <LineChart width={490} height={400} data={data}>
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
            </LineChart> */}
        </div>
    );
};

export default Statistics;
