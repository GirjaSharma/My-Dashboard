import { useState } from 'react';
import { useLocation, Outlet, matchPath } from 'react-router-dom';
import Sidebar from '../../Components/Layout/Sidebar';
import Header from '../../Components/Layout/Header';
import { navItems } from '../../config/navigation';

export default function Dashboard(user) {
  const location = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  const activeTab = navItems.find((tab) =>
    matchPath({ path: tab.path, end: true }, location.pathname)
  );

  const pageTitle = activeTab ? activeTab.label : 'Overview';

  return (
    <div className="min-h-screen bg-bg text-text-main">
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          sidebarCollapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          activePath={activeTab?.path}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header
            userProfile={user}
            sidebarCollapsed={sidebarCollapsed}
            onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
            pageTitle={pageTitle}
          />
          <main className="flex-1 overflow-y-auto bg-bg">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
