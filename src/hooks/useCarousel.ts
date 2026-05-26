import { useState } from 'react';

export function useCarousel(length: number, initialIndex = 0) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const handlePrev = () =>
    setActiveIndex((prev) => (prev === 0 ? length - 1 : prev - 1));

  const handleNext = () =>
    setActiveIndex((prev) => (prev === length - 1 ? 0 : prev + 1));

  const goToIndex = (index: number) => {
    if (index >= 0 && index < length) setActiveIndex(index);
  };

  return { activeIndex, handlePrev, handleNext, goToIndex };
}
