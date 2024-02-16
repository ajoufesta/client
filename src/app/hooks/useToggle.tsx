"use client";

import { useState } from "react";

export const useToggle = (): [boolean, () => void] => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return [isToggle, handleToggle];
};
