export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  description: string;
}

export interface TeamGroup {
  category: string;
  members: TeamMember[];
}

export const teamGroups: TeamGroup[] = [
  {
    category: 'Project Lead',
    members: [
      {
        id: '0',
        name: 'manish',
        role: 'Lead Project',
        avatar: '/images/avatars/img1.jpg',
        description: 'Handles all planning.',
      },
    ],
  },
  {
    category: 'Management',
    members: [
      {
        id: '30',
        name: 'ahaana',
        role: 'Manager',
        avatar: '/images/avatars/img10.jpg',
        description: 'Coordinates team and tasks.',
      },
    ],
  },
  {
    category: 'Writers',
    members: [
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
    ],
  },
  {
    category: 'Storyboard Artists',
    members: [
      {
        id: '32',
        name: 'mysticArtzzz07',
        role: 'Storyboard Artist',
        avatar: '/images/avatars/img16.jpg',
        description: 'Creates storyboards and animates.',
      },
      {
        id: '33',
        name: 'samarsinghth',
        role: 'Storyboard Artist',
        avatar: '/images/avatars/img12.jpg',
        description: 'Visualizes story flow.',
      },
      {
        id: '34',
        name: 'jayprakash',
        role: 'Storyboard Artist',
        avatar: '/images/avatars/img9.jpg',
        description: 'Sketches scene progression.',
      },
    ],
  },
  {
    category: 'Character Designers',
    members: [
      {
        id: '35',
        name: 'navneet',
        role: 'Character Designer',
        avatar: '/images/avatars/img18.jpg',
        description: 'Designs original characters.',
      },
      {
        id: '36',
        name: 'diksha rawat',
        role: 'Character Designer',
        avatar: '/images/avatars/img17.jpg',
        description: 'Develops character art.',
      },
      {
        id: '37',
        name: 'callisto',
        role: 'Character Designer',
        avatar: '/images/avatars/img20.jpg',
        description: 'Creates visual look of characters.',
      },
      {
        id: '38',
        name: 'sudodood',
        role: 'Character Designer',
        avatar: '/images/avatars/img19.jpg',
        description: 'Concept and outfit artist.',
      },
      {
        id: '39',
        name: 'divishn21',
        role: 'Character Designer',
        avatar: '/images/avatars/img21.jpg',
        description: 'Designs secondary characters.',
      },
    ],
  },
  {
    category: 'Art & Direction',
    members: [
      {
        id: '40',
        name: 'pratyush',
        role: 'Art Director',
        avatar: '/images/avatars/img3.jpg',
        description: 'Supervises the art style.',
      },
      {
        id: '41',
        name: 'tarika',
        role: 'Prop Designer',
        avatar: '/images/avatars/img15.jpg',
        description: 'Designs props and objects.',
      },
      {
        id: '42',
        name: 'prashant',
        role: 'Color Stylist',
        avatar: '/images/avatars/img14.jpg',
        description: 'Chooses the color scheme.',
      },
    ],
  },
  {
    category: 'Animators',
    members: [
      {
        id: '1',
        name: 'subham',
        role: 'Animation Director',
        avatar: '/images/avatars/img2.jpg',
        description: 'Leads animation team and reviews quality.',
      },
      {
        id: '43',
        name: 'sheel',
        role: '2D Animator',
        avatar: '/images/avatars/img22.jpg',
        description: 'Creates 2D character movements.',
      },
      {
        id: '44',
        name: 'aquanimator',
        role: '2D Animator',
        avatar: '/images/avatars/img23.jpg',
        description: 'Animates action and expressions.',
      },
      {
        id: '32',
        name: 'mysticArtzzz07',
        role: 'Animator',
        avatar: '/images/avatars/img24.jpg',
        description: 'Storyboard and animation support.',
      },
    ],
  },
  {
    category: '3D & Technical',
    members: [
      {
        id: '45',
        name: 'sudipto',
        role: '3D Generalist',
        avatar: '/images/avatars/img25.jpg',
        description: 'Handles modeling, animation, lighting, and textures.',
      },
      {
        id: '46',
        name: 'dr_g',
        role: '3D Modeler',
        avatar: '/images/avatars/img26.jpg',
        description: 'Creates 3D models.',
      },
      {
        id: '47',
        name: 'rudra renders',
        role: '3D Modeler',
        avatar: '/images/avatars/img27.jpg',
        description: 'Builds 3D assets and scenes.',
      },
    ],
  },
  {
    category: 'Voice Actors',
    members: [
      {
        id: '7',
        name: 'saksham',
        role: 'Voice Artist',
        avatar: '/images/avatars/img8.jpg',
        description: 'Voice for side characters.',
      },
      {
        id: '10',
        name: 'royal singh',
        role: 'Voice Artist',
        avatar: '/images/avatars/img11.jpg',
        description: 'Voice artist for key roles.',
      },
      {
        id: '48',
        name: 'adi',
        role: 'Voice Artist',
        avatar: '/images/avatars/img6.jpg',
        description: 'Voice actor for supporting roles.',
      },
    ],
  },
  {
    category: 'Background Artists',
    members: [
      {
        id: '49',
        name: 'riza',
        role: 'Background Artist',
        avatar: '/images/avatars/img5.jpg',
        description: 'Paints anime-style environments.',
      },
    ],
  },
  {
    category: 'Layout Artists',
    members: [
      {
        id: '50',
        name: 'taku',
        role: 'Layout Artist',
        avatar: '/images/avatars/img28.jpg',
        description: 'Sets up shots and scenes visually.',
      },
    ],
  },
];