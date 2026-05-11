import {PartyPopper} from "lucide-react"
const Sidebar=()=>{
    return(
            <div className="transition duration-300 ease-in-out flex flex-col relative z-10 border border-border-subtle ">
                <div className="p-6 ">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg">
<PartyPopper className="w-6 h-6" />
                        </div>

                        <div>
 <h3 className="font-bold text-text-main">Party Rentals</h3>
                    <p className="text-xs text-text-soft">SaaS</p>
                        </div>
                    </div>
                    
                   
                </div>
                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-2 overflow-y-auto"></nav>

                {/* User Profile */}

                {/* <div className="p-4 border border-border-strong">
                    <div className="flex items-center space-x-3 rounded-xl bg-bg">
                        <img src="https://s.gravatar.com/avatar/bc4f21a5a6f163588ccd23540f62cb49?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fgi.png" alt="avatar"
                        className="w-10 h-10 rounded-full ring-2"/>
                    </div>
                </div> */}
            </div>
    )
}


export default Sidebar;