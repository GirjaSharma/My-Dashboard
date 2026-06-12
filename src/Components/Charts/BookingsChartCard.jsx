import {useState} from 'react';
// import { RechartsDevtools } from '@recharts/devtools';
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import {getBookingsLineChartData, currentYear
    } from '../../utils/dashboardCalc';
import {bookings} from '../../data/bookings';


export const BookingsChartCard =() => {

  const defaultMonth = String(new Date().getMonth() +1).padStart(2,0);
  const [selectedValue, setSelectedValue] = useState(defaultMonth);

  const handleChange =(e)=>
  {
    setSelectedValue(e.target.value)
  }

  const selectedMonth = Number(selectedValue) -1;

  const chartData = getBookingsLineChartData(selectedMonth, currentYear, bookings)

  const xAxisTicks = Array.from(new Set([1,6,11,16,21,26, chartData.length]))

  return (
      <section className=" bg-surface border border-border-subtle rounded-md w-full h-70 p-4">
        <div className="mb-2 flex items-center justify-between gap-4">
      
            <h3 className=" text-sm font-semibold text-text-main">BOOKINGS THIS MONTH</h3>
            {/* <div className="text-sm pr-2"> */}
              <select id="select-month" value={selectedValue} onChange={handleChange} className="text-sm bg-surface border border-border-subtle rounded-md px-1 text-text-main outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring">
                <option value="01">Jan {currentYear}</option>
                <option value="02">Feb {currentYear}</option>
                <option value="03">Mar {currentYear}</option>
                <option value="04">Apr {currentYear}</option>
                <option value="05">May {currentYear}</option>
                <option value="06">Jun {currentYear}</option>
                <option value="07">Jul {currentYear}</option>
                <option value="08">Aug {currentYear}</option>
                <option value="09">Sep {currentYear}</option>
                <option value="10">Oct {currentYear}</option>
                <option value="11">Nov {currentYear}</option>
                <option value="12">Dec {currentYear}</option>
              </select>

            {/* </div> */}

            
        </div>
         <div className="w-full min-w-0">
        <ResponsiveContainer width="100%" height={240}>
            <LineChart
            //  style={{ width: '100%', aspectRatio: 1.618, maxWidth: 500, padding: "1rem" }}
    data={chartData}
    margin={{
        top:12, 
        right: 24,
        bottom: 8,
        left:-20
    }}
    >
        <CartesianGrid stroke="var(--border-subtle)" strokeDasharray="5 5"/>
      <Line type="monotone" dataKey="bookings" stroke="var(--primary)" strokeWidth={2} dot={false} activeDot={{
        r: 5,
        stroke: "var(--primary",
        strokeWidth: 2,
        fill: "var(--surface"
      }} />

      <XAxis dataKey="day" type="number" domain={[1, chartData.length]} ticks={xAxisTicks} 
      tickFormatter={(day) => chartData[day-1]?.label} 
      tick={{ fontSize: 12, fill: "var(--text-muted)"}} tickLine={false} axisLine={{stroke:"var(--border-subtle)"}} 
      interval={0} 
      />
      <YAxis allowDecimals={false}
      tick={{ fontSize: 12, fill: "var(--text-muted)"}} tickLine={false} axisLine={{stroke:"var(--border-subtle)"}}/>
      <Tooltip contentStyle={{
        background: "var(--surface)", border: "1px solid var(--border-subtle)", borderRadius: "12px", color: "var(--text-main)"
      }}
      labelStyle={{
        color: "var(--text-main)",
        fontWeight: 600
      }}
      />
      {/* <RechartsDevtools /> */}
    </LineChart>
        </ResponsiveContainer>
    </div>

      </section>






   
    
  );
}