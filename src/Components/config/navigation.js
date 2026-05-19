import {LayoutDashboard,
    ClipboardList,
    CalendarDays,
    Package,
    Users,
    Building2,
    Truck,
    CreditCard,
    BarChart3,
    Settings
} from 'lucide-react';

export const navItems = [
    {
        label: "Overview",
        id: "overview",
        icon: LayoutDashboard,
        active: true,
        path: '/dashboard'
    },
    {
        label: "Orders",
        id: "orders",
        icon: ClipboardList,
        active: false,
        path: '/orders'
    },
    {
        label: "Calender",
        id: "calender",
        icon: CalendarDays,
        active: false,
        path: '/calender'
    },
    {
        label: "Inventory",
        id: "inventory",
        icon: Package,
        active: false,
        path: '/inventory'
    },
    {
        label: "Customers",
        id: "customers",
        icon: Users,
        active: false,
        path: '/customers'
    },
    {
        label: "Venues",
        id: "venues",
        icon: Building2,
        active: false,
        path: '/venues'
    },
    {
        label: "Delivery",
        id: "delivery",
        icon: Truck,
        active: false,
        path: '/delivery'
    },
    
    
    {
        label: "Billing",
        id: "billing",
        icon: CreditCard,
        active: false,
        path: '/billing'
    },
    {
        label: "Reports",
        id: "reports",
        icon: BarChart3,
        active: false,
        path: '/reports'
    },
     {
        label: "Settings",
        id: "settings",
        icon: Settings,
        active: false,
        path: '/settings'
    }
]