export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  alt?: string;
  artist: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    type: 'image',
    src: '/images/gallery/artwork1.jpg',
    alt: 'Character concept art',
    artist: 'Priya Patel',
  },
  {
    id: '2',
    type: 'image',
    src: '/images/gallery/artwork2.jpg',
    alt: 'Background scene',
    artist: 'Aarav Sharma',
  },
  {
    id: '3',
    type: 'video',
    src: '/videos/teaser-clip.mp4',
    artist: 'Duvano Animation Team',
  },
  {
    id: '4',
    type: 'image',
    src: '/images/gallery/artwork3.jpg',
    alt: 'Key character design',
    artist: 'Anjali Rao',
  },
  {
    id: '5',
    type: 'image',
    src: '/images/gallery/artwork4.jpg',
    alt: 'Storyboard sketch',
    artist: 'Vikram Singh',
  },
  {
    id: '6',
    type: 'video',
    src: '/videos/animation-test.mp4',
    artist: 'Duvano Animation Team',
  },
];