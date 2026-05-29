import {bookings} from '../data/bookings.js';
// import {inventoryItems} from '../data/inventory.js';
import {payments} from '../data/payments.js';

const todayDate = new Date();
 todayDate.setHours(0, 0, 0, 0);
 const currentMonth = todayDate.getMonth()
 const currentYear = todayDate.getFullYear();

export const upcomingEvents = bookings.filter(booking =>{
    const eventDate = new Date(booking.eventDate);
     eventDate.setHours(0, 0, 0, 0);
   
    return eventDate >= todayDate;
})

export const nextEvent = upcomingEvents.sort((a,b) => new Date(a.eventDate) - new Date(b.eventDate))[0]

export const revenueCurrentMonth = payments.filter(payment =>{
    const paidDate = new Date(payment.paidDate);
    return payment.status === "paid" && paidDate.getMonth() === currentMonth && paidDate.getFullYear() === currentYear;
}).reduce((total, payment ) => total+ payment.amount, 0)

export const outstandingPayments = payments.filter(payment => payment.status === "pending").reduce((total, payment) => total+ payment.amount,0)

// export const inventoryAlerts = () => {

// }