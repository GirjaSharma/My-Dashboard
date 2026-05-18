import {PartyPopper, Astroid} from "lucide-react"
const Sidebar=()=>{
    return(
            <aside className="transition duration-300 ease-in-out flex flex-col relative z-10 border-r border-border-subtle bg-surface">
                <div className="p-4 ">
                    <div className="flex items-center space-x-3">
                        <div className="rounded-xl text-primary flex items-center justify-center  ">
<PartyPopper className="w-12 h-12" />
                        </div>

                        <div>
 <h3 className="font-serif text-text-main">PARTY RENTALS</h3>
                    <p className="text-xs text-text-soft">SaaS</p>
                        </div>
                    </div>
                    
                   
                </div>
                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-2 overflow-y-auto"></nav>

                 {/* Theme Switch */}

                <div className="p-4 border border-border-subtle rounded-md m-2 flex">
                  
                        <Astroid className="w-6 h-6 text-primary" />
                          <div className= "max-w-8 ml-2">
                            <p className="text-text-muted text-xs">Theme</p>
                            <p className="text-primary text-sm">Champagne minimal Light</p>
                    </div>
                </div>
            </aside>
    )
}


export default Sidebar;