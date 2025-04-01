import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const mediaItems = [
  {
    id: 1,
    type: "image",
    url: "https://res.cloudinary.com/darshilpatel/image/upload/v1743529164/hero01_boujyi.png",
  },
  {
    id: 2,
    type: "video",
    url: "https://res.cloudinary.com/darshilpatel/video/upload/v1743529842/video03_safg76.mp4",
  },
  {
    id: 3,
    type: "image",
    url: "https://res.cloudinary.com/darshilpatel/image/upload/v1743529164/hero02_jc5sor.png",
  },
  {
    id: 4,
    type: "video",
    url: "https://res.cloudinary.com/darshilpatel/video/upload/v1743529842/video02_x3trl6.mp4",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const currentItem = mediaItems[currentIndex];

    if (currentItem.type === "image") {
      setIsPlaying(false);
      // Auto-slide for images (5s delay)
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      // Start video automatically when the slide is active
      setIsPlaying(true);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Restart video when revisited
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [currentIndex, isPlaying]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play();
            setIsPlaying(true);
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      },
      { threshold: 0.8 } // Trigger when 80% of the section is visible
    );

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }

    return () => {
      if (heroSectionRef.current) {
        observer.unobserve(heroSectionRef.current);
      }
    };
  }, []);

  const handleNext = () => {
    {
      isPlaying ? videoRef.current.pause() : null;
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  const handlePrev = () => {
    {
      isPlaying ? videoRef.current.pause() : null;
    }
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying((prev) => !prev);
    }
  };

  return (
    <section
      ref={heroSectionRef}
      className="relative w-full h-screen bg-bg2 flex items-center justify-center overflow-hidden mix-blend-multiply"
      style={{
        backgroundImage: "url('./herobg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Media Display */}
      <div className="absolute w-full max-w-[1728px] h-full flex items-center justify-center">
        {mediaItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute transition-opacity duration-700 w-full h-full flex justify-center items-center ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.type === "image" ? (
              <img
                src={item.url}
                alt="Hero Slide"
                className="w-auto h-full max-w-full object-contain"
              />
            ) : (
              <div className="relative w-full h-full flex justify-center items-center">
                <video
                  ref={index === currentIndex ? videoRef : null}
                  src={item.url}
                  className="w-auto h-full max-w-full object-contain"
                  onEnded={handleNext} // Move to next slide when video ends
                  autoPlay // Ensure video starts automatically when active
                />
                {/* Play/Pause Button */}
                <button
                  onClick={togglePlayPause}
                  className="absolute bottom-6 left-6 bg-black/50 p-3 rounded-full text-white"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 p-2 hover:scale-110 transition"
      >
        <ChevronLeft size={48} className="text-black" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 p-2 hover:scale-110 transition"
      >
        <ChevronRight size={48} className="text-black" />
        {isPlaying ? (
          <Pause size={24} className="hidden" />
        ) : (
          <Play size={24} className="hidden" />
        )}
      </button>
    </section>
  );
};

export default Hero;
