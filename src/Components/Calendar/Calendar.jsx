import {useState, useEffect, useRef} from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {CalendarDays} from './CalendarDays';

export const Calendar = ({selectedDay, setSelectedDay}) =>{
const cardRef = useRef(null);

const [visibleDay, setVisibleDay]= useState(new Date());
const [isPickerCardOpen, setIsPickerCardOpen] = useState(false);

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
            name: month, id: `${index}-${month}`
        }
    })

    console.log(pickerMonthData, "pickerData")

//     function handleMonthButtonClick(){
// console.log("clicked month")
// setIsPickerCardOpen(true)
//     } 

    function handleYearButtonClick(){
console.log("clicked year")
    } 

    const gotoPreviousMonth=()=>{
        setVisibleDay(new Date(visibleDay.getFullYear(), visibleDay.getMonth() -1, 1))
    }

    const gotoNextMonth =() =>{
        setVisibleDay(new Date(visibleDay.getFullYear(), visibleDay.getMonth() +1, 1))
    }

    return (
        <div className="space-y-2">
            <div className="relative flex items-center justify-between text-sm w-full">
                <ChevronLeft className="w-4 h-4" onClick={gotoPreviousMonth}/>
                <div className="space-x-2">
                    <button onClick={()=> setIsPickerCardOpen(!isPickerCardOpen)}>{months[visibleDay.getMonth()]}</button> 

                    <button onClick={handleYearButtonClick}>{visibleDay.getFullYear()}</button>
                </div>
                <ChevronRight className="w-4 h-4" onClick={gotoNextMonth}/>
                {/* to be continued..... */}
                {/* {isPickerCardOpen && 
                    <div className="absolute top-5 left-[40%] space-y-0.5 w-12 border border-border-subtle shadow-sm rounded-md z-10 bg-surface">
                        {pickerMonthData.map(month => (
                            <p className="" key={month.id}>{month.name}</p>
                         ))}
                    </div>
               } */}
            </div>
            
            <div className="space-y-4">
            <div className="grid grid-cols-7 gap-4">
                {days.map((weekday) => (
                    <p key={weekday} className="text-[12px] uppercase">{weekday}</p>
                   
                  
                ))}
                  
            </div>
                <CalendarDays
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                    visibleDay={visibleDay}
                    setVisibleDay={setVisibleDay}
                />
            </div>
          
        </div>
       
    )
}
