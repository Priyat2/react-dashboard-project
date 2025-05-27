import React from 'react';
import { weeklyActivity } from '../../data/activityData';
import './ActivityFeed.css';

const ActivityFeed: React.FC = () => {
  // Calculate total appointments for the week
  const totalAppointments = weeklyActivity.reduce(
    (sum, day) => sum + day.appointments.length,
    0
  );
  
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h2 className="activity-title">Activity</h2>
        <span className="activity-summary">
          {totalAppointments} appointments on this week
        </span>
      </div>
      
      <div className="activity-chart">
        {weeklyActivity.map((day, dayIndex) => (
          <div key={dayIndex} className="activity-day-column">
            <div className="activity-bars">
              {day.appointments.map((height, barIndex) => (
                <div 
                  key={barIndex} 
                  className={`activity-bar height-${height}`}
                  style={{
                    height: `${height * 25 + 10}px`,
                    backgroundColor: barIndex % 3 === 0 ? '#4361EE' : barIndex % 3 === 1 ? '#00BCD4' : '#3CAEA3'
                  }}
                ></div>
              ))}
            </div>
            <div className="activity-day-label">{day.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;