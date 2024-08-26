'use client';

import Confetti from 'react-confetti';
import useWindowSize from '@/app/hooks/useWindowSize';
import { useEffect, useState } from 'react';

const Fireworks = () => {
  const [isConfettiRunning, setIsConfettiRunning] = useState(true);
  const size = useWindowSize();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsConfettiRunning(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!size) {
    return null;
  }

  return (
    <div className="animate-vanish">
      {isConfettiRunning && (
        <Confetti width={size.width} height={size.height} />
      )}
    </div>
  );
};

export default Fireworks;
