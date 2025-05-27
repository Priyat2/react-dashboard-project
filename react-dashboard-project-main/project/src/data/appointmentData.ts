export interface Appointment {
  id: string;
  title: string;
  time: string;
  icon: string;
  day: 'Thursday' | 'Saturday' | string;
  iconColor?: string;
}

export const appointments: Appointment[] = [
  {
    id: "appointment1",
    title: "Health checkup complete",
    time: "11:00 AM",
    icon: "clipboard-check",
    day: "Thursday"
  },
  {
    id: "appointment2",
    title: "Ophthalmologist",
    time: "14:00 PM",
    icon: "eye",
    day: "Thursday"
  },
  {
    id: "appointment3",
    title: "Cardiologist",
    time: "12:00 AM",
    icon: "heart",
    day: "Saturday",
    iconColor: "#f44336"
  },
  {
    id: "appointment4",
    title: "Neurologist",
    time: "16:00 PM",
    icon: "brain",
    day: "Saturday"
  }
];