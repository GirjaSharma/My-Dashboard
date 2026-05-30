import {bookings} from '../data/bookings.js';
import {inventoryItems} from '../data/inventory.js';
import {payments} from '../data/payments.js';
import {CalendarDays, circleDollarSign, CreditCard, Package} from 'lucide-react'

const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    const currentMonth = todayDate.getMonth()
    const currentYear = todayDate.getFullYear();
    const lastDayDate = new Date(currentYear, currentMonth +1, 0)

const upcomingEventsCurrentMonth = bookings.filter(booking =>{
    const eventDate = new Date(booking.eventDate);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate >= todayDate && eventDate <= lastDayDate && booking.bookingStatus === 'confirmed';
});

const nextEvent = upcomingEventsCurrentMonth.sort((a,b) => new Date(a.eventDate) - new Date(b.eventDate))[0];

// const getEventTrends = ;

const revenueCurrentMonth = payments.filter(payment =>{
    const paidDate = new Date(payment.paidDate);
    return payment.status === "paid" && paidDate.getMonth() === currentMonth 
    && paidDate.getFullYear() === currentYear;
    }).reduce((total, payment ) => total+ payment.amount, 0)

const outstandingPayments = 
    payments.filter(payment => payment.status === "pending")
    .reduce((total, payment) => total+ payment.amount,0)

const inventoryAlerts = inventoryItems.filter(item => {
    const lowStock = item.availableQuantity <= item.reorderPoint;
    const needsAttention = ["damaged", "maintenance", "poor"]
    const unAvailable = item.status === "not available";
   return lowStock || needsAttention || unAvailable;
})


export const statusGridData = [
    {
        id: "status-upcomingEvents",
        title: "UPCOMING EVENTS",
        value: upcomingEventsCurrentMonth().length,
        subtitle: "Remaining this month",
        icon: CalendarDays,
        // trend: getEventTrends(),


    }
]