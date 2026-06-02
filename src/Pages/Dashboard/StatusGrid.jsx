import {statusGridData} from '../../services/dashboardCalc';
// import { ArrowUp, ArrowDown, Minus} from 'lucide-react'

export const StatusGrid=()=>{
    return (
        statusGridData.map((grid) => (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="bg-card rounded-2xl p-6 border border-subtle">
                    <div className="flex items-start justify-between">
                         <div className="flex-1">
                        {<grid.icon/>}
                      
                   
                
                    <p className="text-sm font-medium text-primary mb-2">{grid.title}</p>

                    <p className="text-3xl font-bold text-primary mb-2">{grid.value}</p>

                    <div className="flex items-center space-x-2">
                            {grid?.tend?.direction}
                            <span>{grid?.tend?.value}</span>
                            <span className="text-sm">{grid?.trend?.label}</span>
                    </div>
                      </div>
                    </div>
                </div>
            </div>
        ))
        
    )
}