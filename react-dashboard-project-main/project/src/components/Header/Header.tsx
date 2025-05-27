import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-text">
          <span className="logo-highlight">Health</span>care.
        </span>
      </div>
      
      <div className="search-container">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      
      <div className="header-actions">
        <button className="icon-button notification-button">
          <Bell size={18} />
        </button>
        
        <div className="user-profile">
          <div className="avatar">
            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="User avatar" />
          </div>
        </div>
        
        <button className="add-button">
          <Plus size={18} />
        </button>
      </div>
    </header>
  );
};

export default Header;