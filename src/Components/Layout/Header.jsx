
import {Menu, Search, Plus, ChevronDown, Bell} from 'lucide-react';
// import {LogoutButton} from '../AuthButtons/LogoutButton' ;
function Header({onToggle, user}){
    return(
        <header className="flex items-center justify-between bg-surface px-4 py-3 border-b border-border-subtle">
            {/* left section */}
            <div className="flex items-center gap-2">
                
                <button className="p-3 rounded-md text-text-main hover:bg-card-muted focus-visible:outline-2 focus-visible:outline-focus-ring" onClick={onToggle}>
                    <Menu className="w-5 h-5" />
                </button>
                <div className="hidden md:block">
                    <h1 className="font-serif text-2xl leading-none text-text-main">Overview</h1>
                    <p className="font-sans text-xs text-text-soft">Daily business dashboard</p>
                </div>
               
            </div>

        <div className="flex gap-4 items-center">
            {/* Center */}
            <div className="flex-1 max-w-xs relative">
                {/* <div className=""> */}
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-text-soft"/>
                    <input type="text"
                     placeholder="Search Anything"
                      className="h-9 w-72 border border-border-subtle bg-surface rounded-md px-4 pl-10 pr-4 py-2.5 text-sm text-text-main shadow-sm placeholder:text-text-soft hover:border-border-strong hover:bg-input-hover-bg focus-visible:outline-2 focus-visible:outline-focus-ring" />
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

                <div className="p-1.5 border border-border-subtle rounded-md shadow-sm bg-surface">
                    <div className="flex items-center space-x-3 rounded-xl ">
                        {/* {user.map((user) =>(

                        ))} */}
                        <img src={user.picture} alt="avatar"
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
