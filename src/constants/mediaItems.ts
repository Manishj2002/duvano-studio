export interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
}

export const mediaItems: MediaItem[] = [
  { type: 'image', src: '/gallery/pics/img1.jpg', alt: 'Character Design 1' },
  { type: 'image', src: '/gallery/pics/img2.jpg', alt: 'Character Design 2' },
  { type: 'image', src: '/gallery/pics/img3.jpg', alt: 'Background Art 1' },
  { type: 'image', src: '/gallery/pics/img4.jpg', alt: 'Background Art 2' },
  { type: 'image', src: '/gallery/pics/img5.jpg', alt: 'Concept Art 1' },
  { type: 'image', src: '/gallery/pics/img6.jpg', alt: 'Concept Art 2' },
  { type: 'image', src: '/gallery/pics/img7.jpg', alt: 'Prop Design 1' },
  { type: 'image', src: '/gallery/pics/img8.jpg', alt: 'Prop Design 2' },
  { type: 'image', src: '/gallery/pics/img9.jpg', alt: 'Storyboard Sketch 1' },
  { type: 'image', src: '/gallery/pics/img10.jpg', alt: 'Storyboard Sketch 2' },
  { type: 'image', src: '/gallery/pics/img11.jpg', alt: 'Character Pose 1' },
  { type: 'image', src: '/gallery/pics/img12.jpg', alt: 'Character Pose 2' },
  { type: 'image', src: '/gallery/pics/img13.jpg', alt: 'Scene Illustration 1' },
  { type: 'image', src: '/gallery/pics/img14.jpg', alt: 'Scene Illustration 2' },
  { type: 'image', src: '/gallery/pics/img15.jpg', alt: 'Color Study 1' },
  { type: 'image', src: '/gallery/pics/img16.jpg', alt: 'Color Study 2' },
  { type: 'image', src: '/gallery/pics/img17.jpg', alt: 'Manga Panel 1' },
  { type: 'video', src: '/gallery/videos/video1.mp4', alt: 'Animation Draft 1' },
  { type: 'video', src: '/gallery/videos/video2.mp4', alt: 'Animation Draft 2' },
  { type: 'video', src: '/gallery/videos/video3.mp4', alt: 'Storyboard Animatic 1' },
  { type: 'video', src: '/gallery/videos/video4.mp4', alt: 'VFX Test 1' },
];