import {useState, useEffect, useRef} from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {CalendarDays} from './CalendarDays';

export const Calendar = ({selectedDay, setSelectedDay}) =>{
const cardRef = useRef(null);


const [visibleMonth, setVisibleMonth]= useState(new Date());
const [isPickerCardOpen, setIsPickerCardOpen] = useState(false);


const visibleMonthIndex = visibleMonth.getMonth();
const visibleYear = visibleMonth.getFullYear();

    const years = Array.from({length:9}, (_,i) => visibleYear -4 +i);

 useEffect(() => {
        const handleClickOutside =(e)=>{
            if(cardRef.current && !cardRef.current.contains(e.target)){
                setIsPickerCardOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return() => document.removeEventListener('mousedown', handleClickOutside)

    }, [])

    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    const months = ["Jan", 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const pickerMonthData = months.map((month, index) => {
        return{
            name: month, id: `${index}-${month}`, index: index
        }
    })

const handleMonthClick = (monthIndex) =>{
   setVisibleMonth(new Date(
    visibleYear,
    monthIndex,1
   ))
   setIsPickerCardOpen(false)
}

const handleYearClick = (selectedYear)=>{
 setVisibleMonth(new Date(
    selectedYear,
    visibleMonthIndex
,1
   ))
setIsPickerCardOpen(false)
}

    const gotoPreviousMonth=()=>{
        setVisibleMonth(new Date(visibleYear, visibleMonthIndex -1, 1))
    }

    const gotoNextMonth =() =>{
        setVisibleMonth(new Date(visibleYear, visibleMonthIndex +1, 1))
    }

    return (
        <div className="space-y-1.5">
            <div className="relative flex items-center justify-between text-sm w-full">
                <button><ChevronLeft className="w-4 h-4" onClick={gotoPreviousMonth}/></button>
                <div className="space-x-2">
                    <button onClick={()=> setIsPickerCardOpen(!isPickerCardOpen)}>{months[visibleMonthIndex]} {visibleMonth.getFullYear()}</button> 
                </div>
                <button><ChevronRight className="w-4 h-4" onClick={gotoNextMonth}/></button>
                {/* to be continued..... */}
                {isPickerCardOpen && 
                    <div ref={cardRef} className="absolute top-5 left-1/2 w-44 -translate-x-1/2 border border-border-subtle shadow-sm rounded-md z-10 bg-surface p-3">
                        <p className="text-xs font-semibold text-text-main mb-2">Select month</p>
                        <div className="grid grid-cols-3 gap-1">
                        {pickerMonthData.map(month => (
                            <button onClick={()=>handleMonthClick(month.index)} className={
                        month.index === visibleMonthIndex
                            ? 'rounded-md bg-primary-soft px-2 py-0.5 text-xs font-semibold text-primary'
                            : 'rounded-md px-2 py-0.5 text-xs text-text-muted hover:bg-card-muted hover:text-text-main'
                        } type="button" key={month.id}>{month.name}</button>
                         ))}
                         </div>
                         <p className="text-xs font-semibold text-text-main mb-2 mt-2">Select year</p>
                          <div className="grid grid-cols-3 gap-1">
                         {years.map(year => (
                            <button onClick={()=>handleYearClick(year)} className={
  year === visibleYear
    ? 'rounded-md bg-primary-soft px-2 py-0.5 text-xs font-semibold text-primary'
    : 'rounded-md px-2 py-0.5 text-xs text-text-muted hover:bg-card-muted hover:text-text-main'
} type="button" key={year}>{year}</button>
                         ))}
                         </div>
                    </div>
               }
            </div>
            
            <div className="space-y-3">
            <div className="grid grid-cols-7 gap-3 text-center">
                {days.map((weekday) => (
                    <p key={weekday} className="text-[12px] uppercase">{weekday}</p>
                   
                  
                ))}
                  
            </div>
                <CalendarDays
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                    visibleMonth={visibleMonth}
                    setVisibleMonth={setVisibleMonth}
                />
            </div>
          
        </div>
       
    )
}
