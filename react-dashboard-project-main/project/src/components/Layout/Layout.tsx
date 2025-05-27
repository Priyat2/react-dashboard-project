import React, { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="layout">
      <Header />
      <div className="main-container">
        <div className={`sidebar-container ${sidebarOpen ? 'open' : ''}`}>
          <Sidebar />
        </div>
        <div className="content-container">
          {children}
        </div>
      </div>
      <button 
        className={`sidebar-toggle ${sidebarOpen ? 'open' : ''}`}
        onClick={toggleSidebar}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default Layout;