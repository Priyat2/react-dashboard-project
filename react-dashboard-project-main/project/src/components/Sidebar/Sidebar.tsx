import React from 'react';
import { navigationSections } from '../../data/navigationLinks';
import * as LucideIcons from 'lucide-react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  // Helper function to dynamically get Lucide icons
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as Record<string, React.FC<LucideIcons.LucideProps>>)[iconName];
    return Icon ? <Icon size={20} /> : null;
  };

  return (
    <aside className="sidebar">
      {navigationSections.map((section, index) => (
        <div key={index} className="sidebar-section">
          <h2 className="sidebar-heading">{section.title}</h2>
          <ul className="sidebar-menu">
            {section.links.map((link) => (
              <li key={link.id} className={`sidebar-menu-item ${link.isActive ? 'active' : ''}`}>
                <a href="#" className="sidebar-link">
                  <span className="sidebar-icon">{getIcon(link.icon)}</span>
                  <span className="sidebar-text">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;