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
    category: 'story Writers',
    members: [
      {
        id: '3',
        name: 'uzui',
        role: 'Writer',
        avatar: '/images/avatars/img4.jpg',
        description: 'writer',
      },
       {
        id: '30',
        name: 'ahaana',
        role: 'writer',
        avatar: '/images/avatars/img10.jpg',
        description: 'Main story + plot development',
      },

    ],
  },
  {
    category: 'script Writers',
    members: [
      {
        id: '31',
        name: 'gaurav',
        role: 'Screen Writer',
        avatar: '/images/avatars/img7.jpg',
        description: 'Writes the screenplay and dialogues.',
      },
      {
        id: '52',
        name: 'dhruv',
        role: 'Screen Writer',
        avatar: '/images/avatars/img30.jpg',
        description: 'Writes the screenplay and dialogues.',
      },
      {
        id: '53',
        name: 'story-girl',
        role: 'Screen Writer',
        avatar: '/images/avatars/img33.jpg',
        description: 'Writes the screenplay and dialogues.',
      },
      {
        id: '54',
        name: 'shubham',
        role: 'Screen Writer',
        avatar: '/images/avatars/img31.jpg',
        description: 'Writes the screenplay and dialogues.',
      },
      {
        id: '59',
        name: 'pranshu',
        role: 'Screen Writer',
        avatar: '/images/avatars/img32.jpg',
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
        name: 'Himani',
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
        {
        id: '34',
        name: 'navneet',
        role: 'Character Designer',
        avatar: '/images/avatars/img9.jpg',
        description: 'Designs original characters.',
      },
        {
        id: '51',
        name: 'pooja',
        role: 'Character Designer',
        avatar: '/images/avatars/img29.jpg',
        description: 'Designs original characters.',
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
        description: 'key animator, in between animator, and fx animator.',
      },
      {
        id: '43',
        name: 'sheel',
        role: '2D Animator',
        avatar: '/images/avatars/img22.jpg',
        description: 'key animator and in between animator.',
      },
      {
        id: '44',
        name: 'priya',
        role: '2D Animator',
        avatar: '/images/avatars/img23.jpg',
        description: 'cleans up and finalizes animations.',
      },
      {
        id: '32',
        name: 'krish',
        role: 'Animator',
        avatar: '/images/avatars/img24.jpg',
        description: 'cleans up and finalizes animations.',
      },
       {
        id: '50',
        name: 'taku',
        role: 'Layout Artist',
        avatar: '/images/avatars/img28.jpg',
        description: 'Sets up shots and scenes visually.',
      },
       {
        id: '56',
        name: 'Sparky',
        role: 'Animator',
        avatar: '/images/avatars/img39.jpg',
        description: 'cleans up and finalizes animations..',
      },
       {
        id: '57',
        name: 'dubu_29',
        role: 'Animator',
        avatar: '/images/avatars/img38.jpg',
        description: 'cleans up and finalizes animations.',
      },
       {
        id: '58',
        name: 'shubhaa',
        role: 'Animator',
        avatar: '/images/avatars/img35.jpg',
        description: 'cleans up and finalizes animations.',
      },
       {
        id: '59',
        name: 'kany.mates',
        role: 'Animator',
        avatar: '/images/avatars/img36.jpg',
        description: 'cleans up and finalizes animations.',
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
      {
        id: '55',
        name: 'lost star',
        role: 'Background Artist',
        avatar: '/images/avatars/img34.jpg',
        description: 'Paints anime-style environments.',
      },
    ],
  },
  {
    category: 'Editor',
    members: [
      {
        id: '50',
        name: 'sai',
        role: 'editor',
        avatar: '/images/avatars/img37.jpg',
        description: 'reels + shorts editor.',
      },
    ],
  },
  {
    category: 'music',
    members: [
      {
        id: '60',
        name: 'niteshrathee',
        role: 'music producer',
        avatar: '/images/avatars/img40.jpg',
        description: 'Creates original music tracks.',
      },
      {
        id: '61',
        name: 'pranshu',
        role: 'music composer',
        avatar: '/images/avatars/img41.jpg',
        description: 'Composes music for scenes.',
      },
    ],
  },
];