export interface AppointmentTime {
  day: number;
  time: string;
}

export interface CalendarDay {
  day: number;
  appointmentTimes: string[];
  isCurrentMonth: boolean;
}

export const calendarData = {
  month: "October",
  year: 2021,
  days: [
    { day: 25, appointmentTimes: ["10:00", "11:00", "12:00"], isCurrentMonth: true },
    { day: 26, appointmentTimes: ["08:00", "09:00", "10:00"], isCurrentMonth: true },
    { day: 27, appointmentTimes: ["12:00", "13:00"], isCurrentMonth: true },
    { day: 28, appointmentTimes: ["10:00", "11:00"], isCurrentMonth: true },
    { day: 29, appointmentTimes: ["12:00", "14:00", "16:00"], isCurrentMonth: true },
    { day: 30, appointmentTimes: ["09:00", "14:00", "15:00"], isCurrentMonth: true },
    { day: 31, appointmentTimes: ["09:00", "10:00", "11:00"], isCurrentMonth: true },
  ],
  daysOfWeek: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
};

export const featuredAppointments = [
  {
    id: "dentist",
    title: "Dentist",
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    icon: "tooth"
  },
  {
    id: "physio",
    title: "Physiotherapy Appointment",
    time: "11:00-12:00",
    doctor: "Dr. Kevin Denes",
    icon: "activity"
  }
];