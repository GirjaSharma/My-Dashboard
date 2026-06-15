
import {Menu, Search, Plus, ChevronDown, Bell} from 'lucide-react';
// import {LogoutButton} from '../AuthButtons/LogoutButton' ;
function Header({onToggle}){
    return(
        <header className="flex items-center justify-between bg-surface pb-2 border-b border-border-subtle">
            {/* left section */}
            <div className="flex items-center gap-2">
                
                <button className="p-4 rounded-lg text-text-main" onClick={onToggle}>
                    <Menu className="w-5 h-5" />
                </button>
                <div className="hidden md:block">
                    <h1 className="font-serif text-2xl">Overview</h1>
                    <p className="font-sans text-xs text-text-soft">Daily business dashboard</p>
                </div>
               
            </div>

        <div className="flex gap-4 items-center">
            {/* Center */}
            <div className="flex-1 max-w-xs relative">
                {/* <div className=""> */}
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2"/>
                    <input type="text"
                     placeholder="Search Anything"
                      className="h-9 w-60 border border-border-subtle bg-card rounded-md px-4 pl-10 pr-4 py-2.5 text-sm text-text-main shadow-sm placeholder:text-text-soft hover:border-input-hover hover:bg-input-hover-bg focus-visible:outline-2 focus-visible:outline-focus-ring" />
                {/* </div> */}
            </div>

            {/* Right */}
            <div className="flex items-center space-x-3">
                <button className="hidden lg:flex items-center font-semibold space-x-2 py-2 px-4 bg-primary text-primary-text hover:bg-primary-hover rounded-md shadow-sm focus-visible:outline-2 focus-visible:outline-focus-ring">
                    <Plus className="w-4 h-4" />
                    <span className="text-sm">New Booking</span>
                </button>
            </div>

            <Bell />

            {/* User Profile */}

                <div className="p-1 border border-border-subtle rounded-md shadow-sm">
                    <div className="flex items-center space-x-3 rounded-xl ">
                        <img src="https://s.gravatar.com/avatar/bc4f21a5a6f163588ccd23540f62cb49?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fgi.png" alt="avatar"
                        className="w-6 h-6 rounded-full"/>

                        <div className="flex-1 min-w-0 hidden md:block">
                            <p className="text-xs font-bold text-text-main">
                                Girja Sharma
                            </p>
                            <p className="text-xs text-text-soft">Admin</p>
                        </div>
                      
                        <ChevronDown className="w-4 h-4" />
                    </div>
                </div>
                   </div>

            {/* <LogoutButton/> */}
         
        </header>
    )
}

export default Header;