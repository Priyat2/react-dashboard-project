import React from 'react';
import { appointments } from '../../data/appointmentData';
import * as LucideIcons from 'lucide-react';
import './UpcomingSchedule.css';

const UpcomingSchedule: React.FC = () => {
  // Group appointments by day
  const appointmentsByDay = appointments.reduce((acc, appointment) => {
    if (!acc[appointment.day]) {
      acc[appointment.day] = [];
    }
    acc[appointment.day].push(appointment);
    return acc;
  }, {} as Record<string, typeof appointments>);

  // Helper function to dynamically get Lucide icons
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as Record<string, React.FC<LucideIcons.LucideProps>>)[iconName];
    return Icon ? <Icon size={20} /> : null;
  };

  return (
    <div className="upcoming-schedule">
      <h2 className="schedule-title">The Upcoming Schedule</h2>
      
      {Object.entries(appointmentsByDay).map(([day, dayAppointments]) => (
        <div key={day} className="schedule-day">
          <h3 className="schedule-day-title">On {day}</h3>
          
          <div className="appointment-cards">
            {dayAppointments.map((appointment) => (
              <div key={appointment.id} className="appointment-card">
                <div 
                  className="appointment-icon"
                  style={{ color: appointment.iconColor }}
                >
                  {getIcon(appointment.icon)}
                </div>
                
                <div className="appointment-details">
                  <h4 className="appointment-title">{appointment.title}</h4>
                  <p className="appointment-time">{appointment.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;