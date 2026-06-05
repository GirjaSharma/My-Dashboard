// import {useState} from 'react';
// import { RechartsDevtools } from '@recharts/devtools';
import { Line, LineChart, CartesianGrid, Legend, XAxis, YAxis, Tooltip } from 'recharts';
import {bookingsLineChartData} from '../../utils/dashboardCalc';

export const BookingLineChart =() => {
  
    console.log(bookingsLineChartData);
  return (
    <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 500, padding: "1rem" }}
    responsive
    data={bookingsLineChartData}
    margin={{
        top:20, 
        right: 20,
        bottom: 5,
        left:0
    }}
    >
        <CartesianGrid stroke="#aaa" strokeDasharray="5 5"/>
      <Line type="monotone" dataKey="uv" stroke="purple" strokeWidth={2} name="Bookings this month"  />
      <XAxis dataKey="name" />
      <YAxis  width="auto" label={{ value: 'UV', position: 'insideLeft', angle: -90 }} />
      <Legend align="right" />
      <Tooltip/>
      {/* <RechartsDevtools /> */}
    </LineChart>
  );
}