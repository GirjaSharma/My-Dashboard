import {statusGridData} from '../../utils/dashboardCalc';
import { ArrowUp, ArrowDown} from 'lucide-react';

export const StatusGrid=()=>{
    console.log(statusGridData)
    return (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 p-4">
                {statusGridData.map((grid) => (
                     <div  key={grid.id} className="border border-primary rounded-md bg-card p-4">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <div className ="flex items-center justify-center bg-card-muted text-primary rounded-full border border-primary h-10 w-10">
                                {<grid.icon/>}
                                </div>
                               
                            </div>
                            <div className="flex-2 flex-col">
                                    <p className="text-xs">
                                        {grid.title}
                                    </p>
                                    <p className="text-xl">
                                        {grid.format === "currency" ? `$${grid.value}` : grid.value}
                                    </p>
                                    <p className="text-[10px]">{grid?.subtitle}</p>

                                    
                                    
                            </div>
                              {grid?.trend && 
                             <div className="mt-6 text-[10px]">
                                <p>{grid?.trend?.direction === "up" ? <ArrowUp className="h-4 w-4"/> : <ArrowDown className="h-4 w-4"/>}
                                <span>{grid?.trend?.value}%</span></p>
                            </div>
                            }
                          
                           

                        </div>
                     </div>
                ))}
               

              

            </div>

      
        
    )
}