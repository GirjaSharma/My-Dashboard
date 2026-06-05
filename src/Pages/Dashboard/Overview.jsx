import {StatusGrid} from './StatusGrid';
import {BookingLineChart} from '../../Components/Charts/BookingsLineChart'

export const Overview =()=>{
    return(
        <div className="space-y-6">

            <StatusGrid/>
            <div>
                <BookingLineChart/>
            </div>
        </div>
    )
}