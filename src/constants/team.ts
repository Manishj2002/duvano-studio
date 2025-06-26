export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  description: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '0',
    name: 'manish',
    role: 'Lead Project',
    avatar: '/images/avatars/img1.jpg',
    description: 'Handles all planning.',
  },
  {
    id: '30',
    name: 'ahaana',
    role: 'Manager',
    avatar: '/images/avatars/img10.jpg',
    description: 'Coordinates team and tasks.',
  },
  {
    id: '3',
    name: 'uzui',
    role: 'Writer',
    avatar: '/images/avatars/img4.jpg',
    description: 'Main story + plot development',
  },
  {
    id: '31',
    name: 'gaurav',
    role: 'Screen Writer',
    avatar: '/images/avatars/img7.jpg',
    description: 'Writes the screenplay and dialogues.',
  },
  {
    id: '32',
    name: 'mysticArtzzz07',
    role: 'Storyboard Artist',
    avatar: '/images/avatars/img16.jpg',
    description: 'Creates storyboards and animates.',
  },
  {
    id: '35',
    name: 'navneet',
    role: 'Character Designer',
    avatar: '/images/avatars/img18.jpg',
    description: 'Designs original characters.',
  },
  {
    id: '40',
    name: 'pratyush',
    role: 'Art Director',
    avatar: '/images/avatars/img3.jpg',
    description: 'Supervises the art style.',
  },
  {
    id: '1',
    name: 'subham',
    role: 'Animation Director',
    avatar: '/images/avatars/img2.jpg',
    description: 'Leads animation team and reviews quality.',
  },
];

