import { NextResponse } from 'next/server';

const posts = [
  {
    title: 'Exciting Adventures',
    slug: 'exciting-adventures',
    content: 'Just came back from an amazing hiking trip in the mountains. The views were breathtaking!',
  },
  {
    title: 'Delicious Food Journey',
    slug: 'delicious-food-journey',
    content: "Visited a local food festival today and tried some mouthwatering dishes. Can't wait to go back!",
  },
  {
    title: 'Movie Night',
    slug: 'movie-night',
    content: 'Watched an incredible movie last night. The plot twists kept me on the edge of my seat!',
  },
  {
    title: 'New Hobby Discovered',
    slug: 'new-hobby-discovered',
    content: "Started learning to play the guitar and it's been so much fun! Anyone else into music?",
  },
  {
    title: 'Beautiful Sunset',
    slug: 'beautiful-sunset',
    content: 'Witnessed the most breathtaking sunset today. The sky was painted in vibrant hues of orange and pink!',
  },
  {
    title: 'Weekend Getaway',
    slug: 'weekend-getaway',
    content: 'Spent the weekend exploring a charming little town. Such a relaxing and rejuvenating break!',
  },
  {
    title: 'Book Recommendation',
    slug: 'book-recommendation',
    content: "Just finished reading an incredible book that I couldn't put down. Highly recommend it to all book lovers out there!",
  },
  {
    title: 'Fitness Milestone',
    slug: 'fitness-milestone',
    content: 'Achieved a new personal record in my fitness journey today. Hard work and dedication do pay off!',
  },
];

export function GET() {
  return NextResponse.json(posts);
}
