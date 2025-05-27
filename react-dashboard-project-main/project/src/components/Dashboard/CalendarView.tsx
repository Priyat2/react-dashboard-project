import React from 'react';
import { calendarData, featuredAppointments } from '../../data/calendarData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './CalendarView.css';

const CalendarView: React.FC = () => {
  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <div className="calendar-period">
          <span className="calendar-this-week">This Week</span>
          <ChevronLeft size={16} className="calendar-chevron" />
        </div>
        
        <div className="calendar-month-year">
          <span>{calendarData.month} {calendarData.year}</span>
        </div>
        
        <div className="calendar-navigation">
          <button className="calendar-nav-button">
            <ChevronLeft size={16} />
          </button>
          <button className="calendar-nav-button">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      
      <div className="calendar-grid">
        <div className="calendar-days-header">
          {calendarData.daysOfWeek.map((day, index) => (
            <div key={index} className="calendar-day-name">{day}</div>
          ))}
        </div>
        
        <div className="calendar-days">
          {calendarData.days.map((day, index) => (
            <div key={index} className="calendar-day">
              <div className="calendar-day-number">{day.day}</div>
              <div className="calendar-appointments">
                {day.appointmentTimes.map((time, timeIndex) => (
                  <div key={timeIndex} className="calendar-appointment-time">{time}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="featured-appointments">
        {featuredAppointments.map((appointment) => (
          <div key={appointment.id} className="featured-appointment-card">
            <div className="featured-appointment-icon">
              {appointment.icon === 'tooth' && <div className="featured-icon tooth-icon"></div>}
              {appointment.icon === 'activity' && <div className="featured-icon activity-icon"></div>}
            </div>
            <div className="featured-appointment-details">
              <h3 className="featured-appointment-title">{appointment.title}</h3>
              <div className="featured-appointment-time-doctor">
                <span className="featured-appointment-time">{appointment.time}</span>
                <span className="featured-appointment-doctor">{appointment.doctor}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;