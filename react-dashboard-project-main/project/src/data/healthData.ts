export interface HealthStatus {
  id: string;
  name: string;
  status: 'healthy' | 'warning' | 'critical';
  date: string;
  position: {
    top: string;
    left: string;
  };
  iconColor?: string;
  backgroundColor?: string;
}

export const healthStatuses: HealthStatus[] = [
  {
    id: 'heart',
    name: 'Healthy Heart',
    status: 'healthy',
    date: '',
    position: {
      top: '24%',
      left: '42%'
    },
    backgroundColor: '#f44336',
    iconColor: '#ffffff'
  },
  {
    id: 'leg',
    name: 'Healthy Leg',
    status: 'healthy',
    date: '',
    position: {
      top: '75%',
      left: '25%'
    },
    backgroundColor: '#00BCD4',
    iconColor: '#ffffff'
  },
  {
    id: 'lungs',
    name: 'Lungs',
    status: 'warning',
    date: '24 Oct 2021',
    position: {
      top: '24%',
      left: '65%'
    }
  },
  {
    id: 'teeth',
    name: 'Teeth',
    status: 'healthy',
    date: '24 Oct 2021',
    position: {
      top: '40%',
      left: '65%'
    }
  },
  {
    id: 'bone',
    name: 'Bone',
    status: 'warning',
    date: '24 Oct 2021',
    position: {
      top: '56%',
      left: '65%'
    }
  }
];