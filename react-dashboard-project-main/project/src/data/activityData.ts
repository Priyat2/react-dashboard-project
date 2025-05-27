export interface DayActivity {
  day: string;
  appointments: number[];
}

export const weeklyActivity: DayActivity[] = [
  {
    day: "Mon",
    appointments: [2, 0, 1]
  },
  {
    day: "Tues",
    appointments: [1, 2, 0, 1]
  },
  {
    day: "Wed",
    appointments: [0, 1, 2]
  },
  {
    day: "Thurs",
    appointments: [2, 1, 0, 1, 2]
  },
  {
    day: "Fri",
    appointments: [1, 0, 2, 1]
  },
  {
    day: "Sat",
    appointments: [0, 2, 1, 0]
  },
  {
    day: "Sun",
    appointments: [1, 0, 2]
  }
];