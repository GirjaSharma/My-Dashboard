import {useState} from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {CalendarDays} from './CalendarDays';

export const Calendar = () =>{
const [selectedDay, setSelectedDay] = useState(new Date())

    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    const months = ["Jan", 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between text-sm w-full">
                <ChevronLeft className="w-4 h-4"/>
                <h2>{months[selectedDay.getMonth()]} {selectedDay.getFullYear()}</h2>
                <ChevronRight className="w-4 h-4"/>
            </div>
            <div className="space-y-2">
            <div className="grid grid-cols-7 gap-4">
                {days.map((weekday) => (
                    <p key={weekday} className="text-[12px] uppercase">{weekday}</p>
                   
                  
                ))}
                  
            </div>
                <CalendarDays selectedDay={selectedDay}/>
            </div>
          
        </div>
       
    )
}
