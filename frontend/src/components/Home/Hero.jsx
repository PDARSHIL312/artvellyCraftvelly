// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const mediaItems = [
//   { id: 1, type: "image", url: "./footer-bg.png" },
//   { id: 2, type: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
//   {
//     id: 3,
//     type: "image",
//     url: "https://th.bing.com/th/id/OIP.eSUo8M5IwFXtdjlXYMCQ5gHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//   },
//   { id: 4, type: "video", url: "https://www.w3schools.com/html/movie.mp4" },
// ];

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <section className="relative w-full h-[1033px] bg-bg2 flex items-center justify-center overflow-hidden">
//       {/* Media Display */}
//       <div className="absolute w-full max-w-[1728px] h-full flex items-center justify-center">
//         {mediaItems.map((item, index) => (
//           <div
//             key={item.id}
//             className={
//               index === currentIndex
//                 ? "block w-full h-full flex justify-center items-center"
//                 : "hidden"
//             }
//           >
//             {item.type === "image" ? (
//               <img src={item.url} alt="Hero Slide" className="w-full h-full" />
//             ) : (
//               <video
//                 src={item.url}
//                 controls
//                 className="w-full h-full " //object-cover thier now i remove it
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Left Arrow */}
//       <button
//         onClick={handlePrev}
//         className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2] p-2 hover:scale-110 transition"
//       >
//         <ChevronLeft size={48} className="text-black" />
//       </button>

//       {/* Right Arrow */}
//       <button
//         onClick={handleNext}
//         bg
//         className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2]  p-2  hover:scale-110 transition"
//       >
//         <ChevronRight size={48} className="text-black" />
//       </button>
//     </section>
//   );
// };

// export default Hero;

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const mediaItems = [
  { id: 1, type: "image", url: "sample-two.jpeg" },
  {
    id: 2,
    type: "image",
    url: "https://th.bing.com/th/id/OIP.BC1b72VE-k0jhuNYD2qHEAHaEc?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const scrollAmount = screenWidth / 3; // 1/3 of the image width

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval);
  }, [scrollPosition]);

  const handleNext = () => {
    setScrollPosition((prev) =>
      prev + scrollAmount >= screenWidth ? 0 : prev + scrollAmount
    );
  };

  const handlePrev = () => {
    setScrollPosition((prev) =>
      prev - scrollAmount < 0 ? screenWidth - scrollAmount : prev - scrollAmount
    );
  };

  return (
    <section className="relative w-full h-screen bg-bg2 overflow-hidden flex items-center justify-center">
      {/* Scrollable Container */}
      <div
        className="flex transition-transform duration-700 w-full h-full"
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        {mediaItems.map((item) => (
          <div
            key={item.id}
            className="w-full h-full flex-shrink-0 flex items-center justify-center"
          >
            {item.type === "image" ? (
              <img
                src={item.url}
                alt="Hero Slide"
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={item.url}
                controls
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 hover:scale-110 transition"
      >
        <ChevronLeft size={48} className="text-black" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:scale-110 transition"
      >
        <ChevronRight size={48} className="text-black" />
      </button>
    </section>
  );
};

export default Hero;
