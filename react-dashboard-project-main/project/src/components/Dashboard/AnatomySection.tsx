import React from 'react';
import { healthStatuses } from '../../data/healthData';
import './AnatomySection.css';

const AnatomySection: React.FC = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-image-container">
        <img 
          src="https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Human anatomy" 
          className="anatomy-image"
        />
        
        {/* Health indicators positioned over the anatomy image */}
        {healthStatuses.map((status) => (
          <div 
            key={status.id}
            className={`health-indicator ${status.id} ${status.status}`}
            style={{ 
              top: status.position.top, 
              left: status.position.left,
              backgroundColor: status.backgroundColor || (status.status === 'healthy' ? '#4caf50' : '#f44336')
            }}
          >
            <span className="health-indicator-text">{status.name}</span>
          </div>
        ))}
      </div>
      
      <div className="health-status-cards">
        {healthStatuses.filter(status => status.date).map((status) => (
          <div key={status.id} className={`health-status-card ${status.status}`}>
            <div className="health-status-icon">
              {status.id === 'lungs' && <div className="icon lung-icon"></div>}
              {status.id === 'teeth' && <div className="icon tooth-icon"></div>}
              {status.id === 'bone' && <div className="icon bone-icon"></div>}
            </div>
            <div className="health-status-info">
              <h3 className="health-status-title">{status.name}</h3>
              <p className="health-status-date">Date: {status.date}</p>
              <div className={`health-status-bar ${status.status}`}>
                <div className="health-status-progress" style={{ width: status.status === 'healthy' ? '90%' : '60%' }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;