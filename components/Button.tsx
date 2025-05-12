import React from 'react';

type Props = {
  text: string;
  bgColor?: string; // Tailwind color classes like "bg-blue-500"
  textColor?: string; // Tailwind color classes like "text-white"
  onClick?: () => void;
  className?: string; // Optional additional classes
};

const Button: React.FC<Props> = ({
  text,
  bgColor = 'bg-blue-500',
  textColor = 'text-white',
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-2xl ${bgColor} ${textColor} ${className} hover:opacity-90 transition`}
    >
      {text}
    </button>
  );
};

export default Button;
