export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Is the team paid?',
    answer: 'Currently, Duvano Studio is a passion-driven indie project. We aim to secure funding to offer paid roles in the future.',
  },
  {
    id: '2',
    question: 'Who can apply?',
    answer: 'Anyone passionate about anime with relevant skills (animation, art, writing, etc.) can apply, regardless of experience level.',
  },
  {
    id: '3',
    question: 'What skill level is required?',
    answer: 'We welcome all skill levels, from beginners to professionals, as long as you’re dedicated and eager to learn.',
  },
  {
    id: '4',
    question: 'How do we work?',
    answer: 'Our team collaborates primarily online via Discord and other tools, with occasional in-person meetups for core members.',
  },
  {
    id: '5',
    question: 'Will this be released commercially?',
    answer: 'Yes, our goal is to release the 40–50 minute anime movie commercially, targeting platforms and festivals.',
  },
];