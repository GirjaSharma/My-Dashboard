import {bookings} from '../data/bookings.js';
// import {inventoryItems} from '../data/inventory.js';
import {payments} from '../data/payments.js';
import {parseDateOnly, bookingsWithPayment} from '../utils/dashboardCalc.js'





export const allBookingsWithPayment = bookingsWithPayment(bookings,payments).sort((a, b) => 
    parseDateOnly(b.createdAt) - parseDateOnly(a.createdAt));