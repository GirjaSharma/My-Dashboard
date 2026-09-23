import {useState, useEffect} from 'react';
import {StatusGrid} from './StatusGrid';
import {BookingsChartCard} from '../../Components/Charts/BookingsChartCard';
import {getDeliveriesAndPickupByDate, recentBookingsWithPayment} from '../../utils/dashboardCalc';
import {Calendar} from '../../Components/Calendar/Calendar';
import { ArrowRight } from 'lucide-react';
import {Link} from 'react-router-dom';
import {getDashboardSummary} from '../../services/dashboardApi';

export const Overview =()=>{

     const [summary, setSummary]= useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      const [selectedDay, setSelectedDay] = useState(new Date());
const deliveriesAndPickup = getDeliveriesAndPickupByDate(selectedDay);
    
      useEffect(() => {
        const fetchSummary = async() =>{
          try{
            setLoading(true);
            setError(null);
            const data= await getDashboardSummary();
            setSummary(data);
          }
          catch(error){
        setError(error.message)
       }finally{
        setLoading(false)
       }
        }
        fetchSummary()
      }, [])
    

if(loading) return <p>Loading dashboard...</p>;

if(error) return <p>{error}</p>

if(!summary) return null;

    return(
        <div className="space-y-3">

            <StatusGrid summary={summary}/>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 items-stretch mx-5">
                <div className="lg:col-span-5 min-w-0 h-64 ">
                    <BookingsChartCard/>
                </div>
                <div className="lg:col-span-4 min-w-0 bg-surface border border-border-subtle rounded-md w-full h-64 p-4 shadow-sm flex flex-col overflow-hidden">
                    
                        <h3 className="text-[13px] font-medium uppercase tracking-[0.06em] text-text-muted mb-2 shrink-0">
                            Deliveries & Pickups for {selectedDay.toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </h3>
                        <div className="min-h-0 flex-1 overflow-auto rounded-md border border-border-subtle"> 
                            <table className="w-full min-w-[300px] text-sm text-left border-separate border-spacing-0">
                                <thead className="sticky top-0 z-10 bg-surface">
                                    <tr className="text-[12px] text-text-muted border-b border-border-subtle">
                                        <th className="px-2 py-2 font-semibold">Time</th>
                                        <th className="px-2 py-2 font-semibold">Customer</th>
                                        <th className="px-2 py-2 font-semibold">Type</th>
                                        <th className="px-2 py-2 font-semibold">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border-subtle">
                                    {deliveriesAndPickup.map(booking => (
                                        <tr key={booking.id} className="text-[10px]">
                                            <td className="px-2 py-2 whitespace-nowrap">{booking.itemsOutAt}</td>
                                            <td className="px-2 py-2">{booking.customerName}</td>
                                            <td className="px-2 py-2 whitespace-nowrap">{booking.fulfillmentType === "customer_pickup" ? "Pickup" : "Delivery"}</td>
                                            <td className="px-2 py-2">
                                                <span className= {booking.bookingStatus === "confirmed" ? "rounded-md bg-success-soft px-2 py-1 text-[10px] text-success" :  "rounded-md bg-danger-soft px-2 py-1 text-[10px] text-danger"}>
                                                    {booking.bookingStatus}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                    {deliveriesAndPickup.length === 0 && (
                                        <tr className="text-[10px]">
                                            <td className="px-2 py-8 text-center text-text-soft" colSpan="4">No deliveries or pickups for this date.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    
                    
                </div>
                <div className="lg:col-span-3 min-w-0 border border-border-subtle p-4 rounded-md bg-surface shadow-sm w-full h-64">
                    <Calendar selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
                </div>

            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 items-stretch mx-5 mb-5">
                <div className="lg:col-span-5 min-w-0 bg-surface border border-border-subtle rounded-md w-full h-64 p-4 shadow-sm flex flex-col overflow-hidden">
                   <h3 className="text-[13px] font-medium uppercase tracking-[0.06em] text-text-muted mb-2 shrink-0">Recent Bookings</h3>
                    <div className="min-h-0 flex-1 overflow-auto rounded-md border border-border-subtle  mb-2">
                        <table className="w-full text-sm text-left border-separate border-spacing-0">
                                <thead className="sticky top-0 z-10 bg-surface">
                                    <tr className="text-[12px] text-text-muted border-b border-border-subtle">
                                        <th className="px-2 py-1 font-medium">Booking ID</th>
                                        <th className="px-2 py-1 font-medium">Customer</th>
                                        <th className="px-2 py-1 font-medium">Event Date</th>
                                        <th className="px-2 py-1 font-medium">Amount</th>
                                        <th className="px-2 py-1 font-medium">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border-subtle">
                                    {recentBookingsWithPayment.map(booking => (
                                        <tr key={booking.id} className="text-[10px]">
                                            <td className="px-2 py-2 whitespace-nowrap">{booking.id}</td>
                                            <td className="px-2 py-2">{booking.customerName}</td>
                                            <td className="px-2 py-2">{booking.eventDate}</td>
                                            <td className="px-2 py-2 ">${booking.totalAmount}</td>
                                            <td className="px-2 py-2">
                                                <span className= {booking.bookingStatus === "confirmed" ? "rounded-md bg-success-soft px-2 py-1 text-[10px] text-success" :  "rounded-md bg-card-muted  px-2 py-1 text-[10px] text-text-soft"}>
                                                    {booking.bookingStatus}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            
                    </div>
                                <Link className="flex w-full items-center justify-between text-primary text-sm font-medium hover:text-primary-hover" to="/bookings" > <span>View all bookings</span><ArrowRight className="w-4 h-4"/></Link>
                </div>
            </div>
        </div>
    )
}
