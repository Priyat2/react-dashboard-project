export interface NavigationLink {
  id: string;
  name: string;
  icon: string;
  isActive?: boolean;
}

export interface NavigationSection {
  title: string;
  links: NavigationLink[];
}

export const navigationSections: NavigationSection[] = [
  {
    title: "General",
    links: [
      {
        id: "dashboard",
        name: "Dashboard",
        icon: "layout-dashboard",
        isActive: true,
      },
      {
        id: "history",
        name: "History",
        icon: "clock",
      },
      {
        id: "calendar",
        name: "Calendar",
        icon: "calendar",
      },
      {
        id: "appointments",
        name: "Appointments",
        icon: "calendar-clock",
      },
      {
        id: "statistics",
        name: "Statistics",
        icon: "bar-chart",
      },
    ],
  },
  {
    title: "Tools",
    links: [
      {
        id: "chat",
        name: "Chat",
        icon: "message-circle",
      },
      {
        id: "support",
        name: "Support",
        icon: "life-buoy",
      },
      {
        id: "setting",
        name: "Setting",
        icon: "settings",
      },
    ],
  },
];