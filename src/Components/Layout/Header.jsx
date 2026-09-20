import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, Plus, ChevronDown, Bell } from 'lucide-react';
import { LogoutButton } from '../AuthButtons/LogoutButton';

function Header({ onToggle, userProfile, pageTitle }) {
  const { user } = userProfile;
  const [isProfileTrayOpen, setIsProfileTrayOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-surface px-4 py-3 border-b border-border-subtle">
      <div className="flex items-center gap-2">
        <button className="p-3 rounded-md text-text-main hover:bg-card-muted focus-visible:outline-2 focus-visible:outline-focus-ring" onClick={onToggle}>
          <Menu className="w-5 h-5" />
        </button>
        <div className="hidden md:block">
          <h1 className="font-serif text-2xl leading-none text-text-main">{pageTitle}</h1>
          <p className="font-sans text-xs text-text-soft">Daily business dashboard</p>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex-1 max-w-xs relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-text-soft" />
          <input
            type="text"
            placeholder="Search Anything"
            className="h-9 w-72 border border-border-subtle bg-surface rounded-md px-4 pl-10 pr-4 py-2.5 text-sm text-text-main shadow-sm placeholder:text-text-soft hover:border-border-strong hover:bg-input-hover-bg focus-visible:outline-2 focus-visible:outline-focus-ring"
          />
        </div>

        <div className="flex items-center space-x-3">
          <button className="hidden lg:flex items-center font-semibold space-x-2 py-2 px-4 bg-primary text-primary-text hover:bg-primary-hover rounded-md shadow-sm focus-visible:outline-2 focus-visible:outline-focus-ring">
            <Plus className="w-4 h-4" />
            <span className="text-sm">New Booking</span>
          </button>
        </div>

        <Bell />

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsProfileTrayOpen(!isProfileTrayOpen)}
            className="flex items-center gap-3 rounded-md border border-border-subtle bg-surface px-2 py-1.5 shadow-sm"
          >
            <img src={user.picture} alt="avatar" className="h-6 w-6 rounded-full" />

            <div className="hidden min-w-0 flex-1 md:block">
              <p className="text-xs font-bold text-text-main">{user?.nickname}</p>
              <p className="text-xs text-text-soft">Admin</p>
            </div>

            <ChevronDown className="h-4 w-4 text-text-soft" />
          </button>

          {isProfileTrayOpen && (
            <div className="absolute right-0 top-full z-50 mt-0.5 w-full min-w-44 rounded-md border border-border-subtle bg-surface p-1 shadow-sm">
              <ul className="space-y-0.5">
                <li>
                  <Link
                    to="/profile"
                    className="block rounded-md px-3 py-1 text-sm text-text-soft hover:bg-card-muted hover:text-text-main"
                  >
                    My Profile
                  </Link>
                </li>

                <li>
                  <Link
                    to="/settings"
                    className="block rounded-md px-3 py-1 text-sm text-text-soft hover:bg-card-muted hover:text-text-main"
                  >
                    Settings
                  </Link>
                </li>

                <li className="rounded-md px-3 py-1 text-sm text-text-soft hover:bg-card-muted hover:text-text-main">
                  <LogoutButton />
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
