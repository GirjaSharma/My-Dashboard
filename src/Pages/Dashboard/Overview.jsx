import {useState} from 'react';
import {StatusGrid} from './StatusGrid';
import {BookingsChartCard} from '../../Components/Charts/BookingsChartCard';
import {getDeliveriesAndPickupByDate} from '../../utils/dashboardCalc';
import {Calendar} from '../../Components/Calendar/Calendar';

export const Overview =()=>{
const [selectedDay, setSelectedDay] = useState(new Date());
const deliveriesAndPickup = getDeliveriesAndPickupByDate(selectedDay);

    return(
        <div className="space-y-2">

            <StatusGrid/>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 items-stretch ml-4 mr-4">
                <div className="lg:col-span-5 min-w-0 h-70 ">
                    <BookingsChartCard/>
                </div>
                <div className="lg:col-span-4 min-w-0 bg-surface border border-border-subtle rounded-md w-full h-70 p-4 shadow-sm flex flex-col overflow-hidden">
                    
                        <h3 className="text-sm text-text-main mb-2 shrink-0">
                            Deliveries & Pickups for {selectedDay.toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </h3>
                        <div className="min-h-0 flex-1 overflow-auto rounded-md border border-border-subtle"> 
                            <table className="w-full min-w-[360px] text-sm text-left border-separate border-spacing-0">
                                <thead className="sticky top-0 z-10 bg-surface">
                                    <tr className="text-[12px] text-text-primary border-b border-border-subtle">
                                        <th className="px-2 py-3 font-semibold">Time</th>
                                        <th className="px-2 py-3 font-semibold">Customer</th>
                                        <th className="px-2 py-3 font-semibold">Type</th>
                                        <th className="px-2 py-3 font-semibold">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border-subtle">
                                    {deliveriesAndPickup.map(booking => (
                                        <tr key={booking.id} className="text-[10px]">
                                            <td className="px-2 py-3 whitespace-nowrap">{booking.itemsOutAt}</td>
                                            <td className="px-2 py-3">{booking.customerName}</td>
                                            <td className="px-2 py-3 whitespace-nowrap">{booking.fulfillmentType === "customer_pickup" ? "Pickup" : "Delivery"}</td>
                                            <td className="px-2 py-3">
                                                <span className= {booking.bookingStatus === "confirmed" ? "rounded-md bg-card-muted px-2 py-1 text-[10px] text-text-muted" :  "rounded-md bg-danger-soft px-2 py-1 text-[10px] text-text-muted"}>
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
                <div className="lg:col-span-3 min-w-0 border border-border-subtle p-4 rounded-md bg-surface shadow-sm w-full h-70">
                    <Calendar selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
                </div>
            </div>
        </div>
    )
}
