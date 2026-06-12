
import {useState} from 'react';
import Sidebar from '../../Components/Layout/Sidebar';
import Header from '../../Components/Layout/Header'; 
import {Overview} from './Overview';


export default function Dashboard( user){
    console.log("user", user)
    const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
    // const [currentPage, setCurrentPage] =useState('overview')

    return (
        <div className="min-h-screen bg-bg text-text-main ml-2 mr-4">
            <div className="flex h-screen overflow-hidden">
            <Sidebar sidebarCollapsed={sidebarCollapsed} onToggle={()=> setSidebarCollapsed(!sidebarCollapsed)} 
                />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header user={user} sidebarCollapsed={sidebarCollapsed} onToggle={()=> setSidebarCollapsed(!sidebarCollapsed)} />
                <main className="flex-1 overflow-y-auto bg-bg">
                    <div>
                        <Overview/>
                    </div>
                </main>
            </div>
             
            </div>
           
        </div>
    )
}