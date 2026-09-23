// import {statusGridData} from '../../utils/dashboardCalc';
import { ArrowUp, ArrowDown} from 'lucide-react';
import {CalendarDays, CircleDollarSign, CreditCard, Package} from 'lucide-react';

export const StatusGrid=({summary})=>{
    console.log("summary", summary)
    // console.log("statusGridData", statusGridData)

const statusGridData = [
    {
        id: "status-upcomingEvents",
        title: "UPCOMING EVENTS",
        value: summary.upcomingEvents.value,
        subtitle: "Remaining this month",
        icon: CalendarDays,
        format: "number",
        trend: summary.upcomingEvents.value


    },
      {
      id: "status-revenue",
      title: "REVENUE THIS MONTH",
      value: summary.revenueThisMonth.value,
      subtitle: summary.revenueThisMonth.subtitle,
      icon: CircleDollarSign,
      format: "currency",
      trend: summary.revenueThisMonth.trend,
    },
    {
      id: "status-outstandingPayments",
      title: "OUTSTANDING PAYMENTS",
      value: summary.outstandingPayments.value,
      subtitle: `${summary.outstandingPayments.invoiceCount} invoices`,
      icon: CreditCard,
      format: "currency",
    },
    {
      id: "status-inventoryAlerts",
      title: "INVENTORY ALERTS",
      value: summary.inventoryAlerts.value,
      subtitle: summary.inventoryAlerts.subtitle,
      icon: Package,
      format: "number",
    },

]

    return (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 p-5 pb-0">
                {statusGridData.map((grid) => (
                     <div  key={grid.id} className="border border-border-subtle rounded-md bg-surface p-4 shadow-sm">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <div className ="flex items-center justify-center bg-card-muted text-primary rounded-full border border-primary h-11 w-11">
                                {<grid.icon/>}
                                </div>
                               
                            </div>
                            <div className="flex-2 flex-col">
                                    <p className="text-[11px] font-medium uppercase tracking-[0.04em] text-text-muted">
                                        {grid.title}
                                    </p>
                                    <p className="text-xl font-medium text-text-main">
                                        {grid.format === "currency" ? `$${grid.value}` : grid.value}
                                    </p>
                                    <p className="text-[10px] text-text-soft">{grid?.subtitle}</p>
                            </div>
                              {grid?.trend && 
                             <div className="mt-7 text-[10px] text-text-muted">
                                <p className="flex">{grid?.trend?.direction === "up" ? <ArrowUp className="h-4 w-4"/> : <ArrowDown className="h-4 w-4"/>}
                                <span>{grid?.trend?.value}%</span></p>
                            </div>
                            }
                          
                           

                        </div>
                     </div>
                ))}
               

              

            </div>

      
        
    )
}
