import React from 'react';
import './SliderImage.css'; // Import the CSS file for animations

import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <div
      className={cn(
        "relative h-26 w-26 sm:h-28 sm:w-28 md:h-32 md:w-32 overflow-hidden rounded-md border",
        
      )}
    >
      <img
        className="h-full w-full object-cover "
        alt="User avatar"
        src={img}
      />
    </div>
  );
};

export const SliderImage = () => {
  return (
    <div className="slider-container">
      <div className="slider-row slider-row-top">
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
      </div>
      <div className="slider-row slider-row-bottom">
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        <img src="/assets/image 1.svg" alt="Image 1" />
        <img src="/assets/image 2.svg" alt="Image 2" />
        <img src="/assets/image 3.svg" alt="Image 3" />
        <img src="/assets/image. 4.svg" alt="Image 4" />
        <img src="/assets/image 5.svg" alt="Image 5" />
        
      </div>
      </div>
  );
}
