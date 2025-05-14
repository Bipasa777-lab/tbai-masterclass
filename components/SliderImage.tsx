"use client";

import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://th.bing.com/th/id/OIP.-uEttmzUJ-Be_GUYmbRgFwHaEK?rs=1&pid=ImgDetMain",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://th.bing.com/th/id/OIP.OO6HXrS7flesooOiMEUNuQHaEo?w=1200&h=750&rs=1&pid=ImgDetMain",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://th.bing.com/th/id/R.2dab1782078524e9a8ece9ed0b5323d9?rik=ek8x8PcCtnajYQ&pid=ImgRaw&r=0",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://th.bing.com/th/id/OIP.8cNDiKWBKb4t-PkqKKnYkwHaE8?w=720&h=480&rs=1&pid=ImgDetMain",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://wallpapers.com/images/hd/cool-profile-picture-ld8f4n1qemczkrig.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <div
      className={cn(
        "relative h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 overflow-hidden rounded-xl border bg-muted flex-shrink-0"
      )}
    >
      <img
        className="h-full w-full object-cover"
        alt="User avatar"
        src={img}
        loading="lazy"
      />
    </div>
  );
};

// Simple marquee using Tailwind and animation
const Marquee = ({
  children,
  reverse = false,
  className = "",
}: {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
}) => {
  return (
    <div className={cn("overflow-hidden w-full py-2", className)}>
      <div
        className={cn(
          "flex gap-4 animate-marquee whitespace-nowrap",
          reverse && "animate-marquee-reverse"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

export function SliderImage() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden px-4 sm:px-8 py-8">
      <Marquee className="mb-2 w-full">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} img={review.img} />
        ))}
      </Marquee>
      <Marquee className="w-full" reverse>
        {secondRow.map((review) => (
          <ReviewCard key={review.username} img={review.img} />
        ))}
      </Marquee>

      {/* Gradient overlays for edge fading */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 sm:w-1/4 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 sm:w-1/4 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
