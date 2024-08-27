'use client';
import React from 'react';

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button
      className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center text-white bg-red-600 rounded-full shadow-md hover:bg-red-500 hover:scale-110 transition-all"
      onClick={onClick}
    >
      ✕
    </button>
  );
};

export default CloseButton;
