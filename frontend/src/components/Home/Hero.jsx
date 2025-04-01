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
  const videoRefs = useRef([]);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const currentItem = mediaItems[currentIndex];

    if (currentItem.type === "image") {
      setIsPlaying(false);
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      setIsPlaying(true);
    }
  }, [currentIndex]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.currentTime = 0;
          video.play();
        } else {
          video.pause();
        }
      }
    });
  }, [currentIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          videoRefs.current.forEach((video) => {
            if (video) video.pause();
          });
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 }
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
  };

  const togglePlayPause = () => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.pause();
      } else {
        currentVideo.play();
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
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.url}
                  className="w-auto h-full max-w-full object-contain"
                  onEnded={handleNext}
                  playsInline
                />
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
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 p-2 hover:scale-110 transition"
      >
        <ChevronLeft size={48} className="text-black" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 p-2 hover:scale-110 transition"
      >
        <ChevronRight size={48} className="text-black" />
      </button>
    </section>
  );
};

export default Hero;
