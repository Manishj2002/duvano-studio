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
    category: 'Writers',
    members: [
      {
        id: '3',
        name: 'likhita dangeti',
        role: 'Lead Writer',
        avatar: '/images/avatars/img4.jpg',
        description: 'Main story + plot development',
      },
      {
        id: '6',
        name: 'gaurav',
        role: 'Script, Dialogues, Thumbnails',
        avatar: '/images/avatars/img7.jpg',
        description: 'File management, BTS, testing, assistance',
      },
    ],
  },
  {
    category: 'Artists',
    members: [
      {
        id: '2',
        name: 'sung jinwoo',
        role: 'Main Character/Scene Artist',
        avatar: '/images/avatars/img3.jpg',
        description: 'Designs core scene artwork.',
      },
      {
        id: '14',
        name: 'anshu',
        role: 'Scene Artist',
        avatar: '/images/avatars/img12.jpg',
        description: 'Designs scene artwork.',
      },
      {
        id: '11',
        name: 'pranosuke',
        role: 'Background Artist',
        avatar: '/images/avatars/img14.jpg',
        description: 'Creates immersive backgrounds.',
      },
    ],
  },
  {
    category: 'Animators',
    members: [
      {
        id: '1',
        name: 'subham',
        role: 'Lead Animator',
        avatar: '/images/avatars/img2.jpg',
        description: 'Core animator for most scenes',
      },
      {
        id: '8',
        name: 'kunal sharma',
        role: 'Animator',
        avatar: '/images/avatars/img9.jpg',
        description: 'Prepares keyframes.',
      },
      {
        id: '9',
        name: 'roy',
        role: 'Animator (Secondary)',
        avatar: '/images/avatars/img13.jpg',
        description: 'Supporting animation scenes.',
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
        description: 'Voice artist for side character',
      },
      {
        id: '10',
        name: 'royal singh',
        role: 'Voice Artist',
        avatar: '/images/avatars/img11.jpg',
        description: 'Voice artist for side character.',
      },
    ],
  },
  {
    category: 'Music & Support',
    members: [
      {
        id: '13',
        name: 'tsukinohana',
        role: 'Music Composer',
        avatar: '/images/avatars/img10.jpg',
        description: 'Composes the soundtrack.',
      },
      {
        id: '5',
        name: 'dhruv patil',
        role: 'General Support',
        avatar: '/images/avatars/img6.jpg',
        description: 'File management, BTS, testing, assistance',
      },
    ],
  },
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
];
