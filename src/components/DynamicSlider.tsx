import React, { useEffect, useState } from 'react';

const DynamicSlider: React.FC = () => {
  const slogans = [
    "Shop Consciously",
    "Put a Smile on Someone's Face",
    "Complete Your Purchase, Make a Difference"
  ];

  const [currentSlogan, setCurrentSlogan] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-indigo-600 text-white py-3 text-center font-semibold text-lg">
      <p className="animate-fade-in-out">{slogans[currentSlogan]}</p>
    </div>
  );
};

export default DynamicSlider;