import {
  BarChart3,
  // Building2,
  CalendarDays,
  ClipboardList,
  CreditCard,
  LayoutDashboard,
  Package,
  Settings,
  Truck,
  Users,
} from 'lucide-react';

export const navItems = [
  {
    label: 'Overview',
    id: 'overview',
    icon: LayoutDashboard,
    path: '/dashboard',
  },
  {
    label: 'Bookings',
    id: 'bookings',
    icon: ClipboardList,
    path: '/bookings',
  },
  {
    label: 'Calendar',
    id: 'calendar',
    icon: CalendarDays,
    path: '/calendar',
  },
  {
    label: 'Inventory',
    id: 'inventory',
    icon: Package,
    path: '/inventory',
  },
  {
    label: 'Customers',
    id: 'customers',
    icon: Users,
    path: '/customers',
  },
  // {
  //   label: 'Venues',
  //   id: 'venues',
  //   icon: Building2,
  //   path: '/venues',
  // },
  {
    label: 'Delivery',
    id: 'delivery',
    icon: Truck,
    path: '/delivery',
  },
  {
    label: 'Billing',
    id: 'billing',
    icon: CreditCard,
    path: '/billing',
  },
  {
    label: 'Reports',
    id: 'reports',
    icon: BarChart3,
    path: '/reports',
  },
  {
    label: 'Settings',
    id: 'settings',
    icon: Settings,
    path: '/settings',
  },
];

