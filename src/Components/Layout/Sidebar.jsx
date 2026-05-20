
import {PartyPopper, Sparkles} from "lucide-react";
import {Link} from 'react-router-dom'
import {navItems} from '../config/navigation'
const Sidebar=({sidebarCollapsed})=>{
    
    return(
            <aside className= {`${sidebarCollapsed ? "w-20" : "w-50"} transition-all duration-300 ease-in-out h-screen flex flex-col relative z-10 border-r border-border-subtle bg-surface`}
            >
               <header className="flex flex-col items-center px-6 p-4 ">
                    {/* <div className="flex items-center space-x-3"> */}
                        <div className="mb-1  text-primary flex items-center justify-center ">
                            <PartyPopper className="w-12 h-12" />
                        </div>

                        {/* <div> */}
                        {!sidebarCollapsed && 
                        <>
                        <h3 className="font-serif text-text-main">PARTY RENTALS</h3>
                    <p className="text-xs text-text-soft">SaaS</p>
                    </>}
 
                        {/* </div> */}
                    {/* </div> */}
                    
                   
                </header>
                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {navItems.map(item =>{
                        const Icon = item.icon;
                        const isActive = item.active;
                        return (
                        <Link key={item.id} to={item.path} className={
                            `flex items-center gap-3 px-3 py-4 text-sm font-medium rounded-md transition-all duration-200 focus-visible:outline-2 focus-visible:outline-focus-ring
                            ${isActive ? "border border-border-strong bg-link-active-bg text-link-active" : "text-text-muted hover:bg-link-hover-bg hover:text-link-hover"} `
                                 
                                 }>
                                    
                                    <Icon className="w-5 h-5 shrink-0"/>
                                    {!sidebarCollapsed && <span>{item.label}</span>}
                                    
                        </Link>
                        )
                       
})}
                </nav>

                 {/* Theme Switch */}
               
                <section className="p-3 border border-border-subtle rounded-xl m-4 mb-6">
                  <div className="flex items-center gap-3">
                        <Sparkles className="w-6 h-6 text-primary shrink-0" />
                         {!sidebarCollapsed &&  <div className= "min-w-0">
                            <p className="text-text-muted text-xs">Theme</p>
                            <p className="text-primary text-xs font-bold uppercase tracking-[0.08em]">CHAMPAGNE</p>
                            <p className="text-primary text-xs font-bold uppercase tracking-[0.08em] whitespace-nowrap">MINIMAL LIGHT</p>
                        </div>}
                       
                        
                    </div>
                </section>
            </aside>
    )
}


export default Sidebar;