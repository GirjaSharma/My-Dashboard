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
                <div className="lg:col-span-4 min-w-0 bg-surface border border-border-subtle rounded-md w-full h-70 p-4 shadow-sm">
                    
                        <h3 className="text-sm text-text-main mb-2">
                            Deliveries & Pickups for {selectedDay.toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </h3>
                        <div className="overflow-x-auto rounded-md "> 
                            <table className=" w-full text-sm text-left border-collapse">
                                <thead>
                                    <tr className=" text-[12px] text-text-primary border border-border-subtle">
                                        <th className="px-2 py-3">Time</th>
                                        <th className="px-2 py-3">Customer</th>
                                        <th className="px-2 py-3">Type</th>
                                        <th className="px-2 py-3">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {deliveriesAndPickup.map(booking => (
                                        <tr key={booking.id} className="text-[10px] border border-border-subtle">
                                            <td className="px-2 py-3">{booking.itemsOutAt}</td>
                                            <td className="px-2 py-3">{booking.customerName}</td>
                                            <td className="px-2 py-3">{booking.fulfillmentType === "customer_pickup" ? "Pickup" : "Delivery"}</td>
                                            <td className="px-2 py-3">{booking.bookingStatus}</td>
                                        </tr>
                                    ))}
                                    {deliveriesAndPickup.length === 0 && (
                                        <tr className="text-[10px] border border-border-subtle">
                                            <td className="px-2 py-3 text-text-soft" colSpan="4">No deliveries or pickups for this date.</td>
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
