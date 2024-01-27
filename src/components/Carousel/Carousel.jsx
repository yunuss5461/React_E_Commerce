import React, { useState, useEffect } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    // Resim URL'leri
    "https://media.istockphoto.com/id/1431790260/tr/foto%C4%9Fraf/a-female-hand-holding-vintage-vcr-video-camera-film-industry-concept-banner.jpg?s=1024x1024&w=is&k=20&c=z3zygM0VQYoW84bZDQhirYfbnFQ4XHjwRFWkb5PwIcY=",
    "https://media.istockphoto.com/id/1436354254/tr/vekt%C3%B6r/vector-illustration-of-realistic-silver-color-different-appliance-with-percent-sign-on.jpg?s=1024x1024&w=is&k=20&c=7X0I2qCEg_NowZ2FBL8mkLsPckvsDCEWQDVBUCItXp4=",
    "https://media.istockphoto.com/id/1388537978/tr/foto%C4%9Fraf/elegance-black-office-workspace-interior-with-modern-computer-on-white-table-black-wall.jpg?s=1024x1024&w=is&k=20&c=WhPlYXmfp1ZHrh43iPT2mhwhi7T9bVbYnit7hsej1nk=",
    "https://media.istockphoto.com/id/1460766261/tr/foto%C4%9Fraf/music-headphones-as-audio-equimpent-3d-illustration.jpg?s=1024x1024&w=is&k=20&c=JE1nXzgzaDfZzH4S1s664ixJPIjjdwXl4HvPEksVNd0=",
    "https://media.istockphoto.com/id/869472744/tr/foto%C4%9Fraf/ev-e%C4%9Flence-sistemi-ile-modern-oturma-odas%C4%B1.jpg?s=1024x1024&w=is&k=20&c=VGO3amXTRsl9GARkWJEPIr-7-es9xvEm3ji_OZ4cRkI="
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const scrollNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const scrollPrev = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="relative w-full overflow-hidden">
  {/* Sol Ok */}
  <button onClick={scrollPrev} className="absolute left-0 top-1/2 z-10 bg-gray-100 rounded-full p-2 m-2 transform -translate-y-1/2">
    <GrPrevious className="text-black" />
  </button>

  {/* Carousel İçeriği */}
  <div className="relative w-full h-96 md:h-[575px]">
    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Slide ${index + 1}`}
        className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: `${index === currentIndex ? '600ms' : '0ms' }` }}
      />
    ))}
  </div>

  {/* Sağ Ok */}
  <button onClick={scrollNext} className="absolute right-0 top-1/2 z-10 bg-gray-100 rounded-full p-2 m-2 transform -translate-y-1/2">
    <GrNext className="text-black" />
  </button>
</div>

  );
};

export default CarouselComponent;
