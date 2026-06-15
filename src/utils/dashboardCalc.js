import {bookings} from '../data/bookings.js';
import {inventoryItems} from '../data/inventory.js';
import {payments} from '../data/payments.js';
import {CalendarDays, CircleDollarSign, CreditCard, Package} from 'lucide-react'

     const todayDate = new Date();
     todayDate.setHours(0, 0, 0, 0);
     const currentDay = todayDate.getDate();
    export const currentMonth = todayDate.getMonth()
    export const currentYear = todayDate.getFullYear();


    const lastDayDate = new Date(currentYear, currentMonth +1, 0)
        lastDayDate.setHours(0,0,0,0)

    const previousMonthStartDate = new Date(currentYear, currentMonth-1, currentDay);
        previousMonthStartDate.setHours(0,0,0,0)
    const previousMonthEndDate = new Date(currentYear, currentMonth, 0);
        previousMonthEndDate.setHours(0,0,0,0)

export const getPercentageTrend = (previousValue, currentValue)=>{
    if(previousValue === 0 && currentValue === 0){
        return{ 
            value: 0,
            direction: "neutral"
        }
    }
    if(previousValue === 0){
        return{
            value:100,
            direction: "up",

        }
    }
    const percentage = ((currentValue - previousValue) / previousValue)* 100;
    return{
        value: Math.abs(Math.round(percentage)),
        icon: percentage > 0 ? "up" : percentage < 0 ? "down" : "neutral"
    }
}        

export const upcomingEventsCurrentMonth = bookings.filter(booking =>{
    const eventDate = new Date(booking.eventDate);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate >= todayDate && eventDate <= lastDayDate && booking.bookingStatus === 'confirmed';
});

export const upcomingEventsSamePeriodPreviousMonth = bookings.filter((booking) => {
     const eventDate = new Date(booking.eventDate);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate >= previousMonthStartDate && eventDate <= previousMonthEndDate && booking.bookingStatus === 'confirmed';
})

export const nextEvent = upcomingEventsCurrentMonth.sort((a,b) => new Date(a.eventDate) - new Date(b.eventDate))[0];

export const upcomingEventsTrend = getPercentageTrend(upcomingEventsSamePeriodPreviousMonth.length, upcomingEventsCurrentMonth.length)

export const revenueCurrentMonth = payments.filter(payment =>{
    const paidDate = new Date(payment.paidDate);
    return payment.status === "paid" 
    && paidDate.getMonth() === currentMonth 
    && paidDate.getFullYear() === currentYear;
    }).reduce((total, payment ) => total+ payment.amount, 0);

export const revenueLastMonth = payments.filter((payment) => {
    const paidDate = new Date(payment.paidDate);
    return payment.status === "paid" && paidDate === currentMonth-1 && paidDate.getFullYear() === currentYear;
}).reduce((total, payment) => total+ payment.amount, 0)

export const revenueTrend = getPercentageTrend(revenueLastMonth, revenueCurrentMonth)

export const totalNumberOfOutstandingPayments = 
    payments.filter(payment => payment.status === "pending");

    export const totalOutstandingPayments =  payments.filter(payment => payment.status === "pending").reduce((total, payment) => total+ payment.amount,0)

export const inventoryAlerts = inventoryItems.filter(item => {
    const lowStock = item.availableQuantity <= item.reorderPoint;
    const needsAttention = ["damaged", "maintenance", "poor"]
    const unAvailable = item.status === "not available";
   return lowStock || needsAttention || unAvailable;
})


export const statusGridData = [
    {
        id: "status-upcomingEvents",
        title: "UPCOMING EVENTS",
        value: upcomingEventsCurrentMonth.length,
        subtitle: "Remaining this month",
        icon: CalendarDays,
        format: "number",
        trend: {
            value: upcomingEventsTrend.value,
            direction: upcomingEventsTrend.direction,
            label: "vs last month",
            tone: "positive"
        },


    },
      {
        id: "status-revenue",
        title: "REVENUE THIS MONTH",
        value: revenueCurrentMonth,
        subtitle: "vs last month",
        icon: CircleDollarSign,
        format: "currency",
        trend: {
            value: revenueTrend.value,
            direction: revenueTrend.direction,
            tone: "positive"
        },
    },
     {
        id: "status-outstandingPayments",
        title: "OUTSTANDING PAYMENTS",
        value: totalOutstandingPayments,
        subtitle: `${totalNumberOfOutstandingPayments.length} invoices`,
        icon: CreditCard,
        format: "currency",
    },
     {
        id: "status-inventoryAlerts",
        title: "INVENTORY ALERTS",
        value: inventoryAlerts.length,
        subtitle: "items low or out",
        icon: Package,
        format: "number",
    },

]


export const getBookingsLineChartData = (month, year, bookings)=>{
    const getDaysInMonth = new Date(year, month+1, 0).getDate();
    const getMonthName = new Date(year, month, 1).toLocaleString("en-US", {
        month: "short"
    })
    return Array.from({length: getDaysInMonth}, (_, index) =>{
        const day = index+1;

        const bookingsCount = bookings.filter(booking =>{
            const eventDate = new Date(booking.eventDate);

            return (
                eventDate.getFullYear() === year &&
                eventDate.getMonth() === month &&
                eventDate.getDate() === day && 
                booking.status !== "cancelled"
            )
        }).length;

        return{
            day,
            label: `${getMonthName} ${day}`,
            bookings: bookingsCount
        }
    })
}

const parseDateOnly = (dateString) =>{
        const [year, month, day] = dateString.split("-").map(Number);
        return new Date(year, month -1, day);
    }

    const isSameDay =(dateA, dateB) => {
        return (
            dateA.getFullYear() === dateB.getFullYear() &&
                            dateA.getMonth() === dateB.getMonth() &&
                            dateA.getDate() === dateB.getDate()
        );
    }

export const getTodaysDeliveriesAndPickup = bookings.filter((booking) => {

    const itemsOutDate = parseDateOnly(booking.itemsOutDate);
    const itemsBackDate = parseDateOnly(booking.itemsBackDate);
    
    const isItemOutToday = isSameDay(itemsOutDate, todayDate);

                            
    
    const isItemsBackToday = isSameDay(itemsBackDate, todayDate);

            return isItemOutToday || isItemsBackToday
});


// export const bookingsLineChartData = getBookingsLineChartData(currentMonth, currentYear, bookings)