import {allBookingsWithPayment} from '../../utils/bookingsCalc';

export const Bookings=()=>{

    console.log(allBookingsWithPayment);
    return(
        <div className="space-y-3 mx-5 p-2">
            <div>
                <h3 className="font-bold">All Bookings</h3>
                <p className="text-sm text-text-soft">A complete list of your confirmed, pending, and completed bookings.</p>
            </div>
            <div className="flex space-x-8">
                <button className="rounded-md text-sm text-text-soft hover:bg-card-muted hover:text-text-main hover:font-semibold">All bookings</button>
                <button className="rounded-md text-sm text-text-soft hover:bg-card-muted hover:text-text-main hover:font-semibold">Upcoming</button>
                <button className="rounded-md text-sm text-text-soft hover:bg-card-muted hover:text-text-main hover:font-semibold">Completed</button>
                <button className="rounded-md text-sm text-text-soft hover:bg-card-muted hover:text-text-main hover:font-semibold">Cancelled</button>
            </div>
            <div className="min-h-0 flex-1 overflow-auto rounded-md border border-border-subtle mb-2">
                                   <table className="w-full text-sm text-left border-separate border-spacing-0">
                                           <thead className="sticky top-0 z-10 bg-surface">
                                               <tr className="text-[12px] text-text-muted border-b border-border-subtle">
                                                   <th className="px-2 py-1 font-medium uppercase">Booking ID</th>
                                                   <th className="px-2 py-1 font-medium uppercase">Customer</th>
                                                   <th className="px-2 py-1 font-medium uppercase">Event Date</th>
                                                   <th className="px-2 py-1 font-medium uppercase">Fulfillment</th>
                                                   <th className="px-2 py-1 font-medium uppercase">Total</th>
                                                    <th className="px-2 py-1 font-medium uppercase">Payment</th>
                                                   <th className="px-2 py-1 font-medium uppercase">Status</th>
                                                   <th className="px-2 py-1 font-medium uppercase"></th>
                                               </tr>
                                           </thead>
                                           <tbody className="divide-y divide-border-subtle">
                                               {allBookingsWithPayment.map((booking) => (
                                                <tr key={booking.id} className="text-[10px]">
                                                       <td className="px-2 py-2 whitespace-nowrap">{booking.id}</td>
                                                       <td className="px-2 py-2">{booking.customerName}</td>
                                                       <td className="px-2 py-2">{booking.eventDate}</td>
                                                       <td className="px-2 py-2 ">{booking.fulfillmentType === "customer_pickup" ? 'Customer pickup' : 'Delivery'}</td>
                                                       <td className="px-2 py-2 ">${booking.totalAmount}</td>
                                                       <td className="px-2 py-2 ">
                                                         <span className={`rounded-md px-2 py-1 text-[10px] font-semibold ${
    booking.paymentTone
  }`}>
                                                               {booking.paymentLabel}
                                                           </span>
                                                       </td>
                                                       <td className="px-2 py-2">
                                                           <span className= {booking.bookingStatus === "confirmed" ? "rounded-md bg-success-soft px-2 py-1 text-[10px] text-success font-semibold" : (booking.bookingStatus === 'pending' ? "rounded-md bg-warning-soft  px-2 py-1 text-[10px] text-warning font-semibold" : "rounded-md bg-danger-soft  px-2 py-1 text-[10px] text-danger font-semibold") }>
                                                               {booking.bookingStatus}
                                                           </span>
                                                       </td>
                                                   </tr>
                                               ))}
                                              
                                           </tbody>
                                       </table>
                                       
                               </div>
        </div>
    )
}