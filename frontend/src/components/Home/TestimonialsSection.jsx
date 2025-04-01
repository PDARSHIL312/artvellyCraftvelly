// import React, { useState, useEffect } from "react";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// const testimonials = [
//   {
//     id: 1,
//     text: "Absolutely love the artwork! I shared my idea, and they brought it to life with such precision and creativity. The quality is top-notch, and I’ll definitely be ordering again!",
//     name: "Sarah M.",
//     image: "/customer1.jpg",
//   },
//   {
//     id: 2,
//     text: "The custom painting I ordered exceeded my expectations. The colors, the details, everything was perfect! Highly recommend this service.",
//     name: "David L.",
//     image: "/customer2.jpg",
//   },
//   {
//     id: 3,
//     text: "Fantastic experience! The artist truly understands how to bring ideas to life. My artwork is now the centerpiece of my home!",
//     name: "Emily R.",
//     image: "/customer3.jpg",
//   },
// ];

// const TestimonialsSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full bg-bg2 flex flex-col items-center p-6 lg:p-12 gap-6 text-center">
//       {/* Title */}
//       <h2 className="font-swash text-[24px] sm:text-[32px] md:text-[40px]">
//         See what customer says
//       </h2>

//       {/* Testimonial Content */}
//       <div className="relative z-10 flex flex-col items-center max-w-4xl">
//         <p className="text-[18px] sm:text-[22px] md:text-[28px] px-4 font-serif leading-relaxed">
//           {testimonials[currentIndex].text}
//         </p>
//         <div className="flex items-center mt-4">
//           <img
//             src={testimonials[currentIndex].image}
//             alt={testimonials[currentIndex].name}
//             className="w-16 h-16 rounded-full border-2 border-bg4"
//           />
//           <p className="ml-4 text-[24px] sm:text-[28px] md:text-[32px] font-script">
//             {testimonials[currentIndex].name}
//           </p>
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <div
//         className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
//         onClick={handlePrev}
//       >
//         <ArrowLeft size={30} />
//       </div>
//       <div
//         className="absolute right-2 sm:right-6  top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
//         onClick={handleNext}
//       >
//         <ArrowRight size={30} />
//       </div>

//       {/* Background Images */}
//       <img
//         src="/testimonialleft.png"
//         alt="Decor"
//         onContextMenu={(e) => e.preventDefault()}
//         className="absolute bottom-0 left-0 w-[130px] sm:w-[170px] md:w-[200px] lg:h-[350px] lg:w-fit opacity-80 mix-blend-multiply"
//       />
//       <img
//         src="/testimonialright.png"
//         alt="Decor"
//         onContextMenu={(e) => e.preventDefault()}
//         className="absolute bottom-0 right-0 w-[100px] sm:w-[130px] md:w-[150px] lg:h-[250px] lg:w-fit opacity-80 mix-blend-darken"
//       />
//     </section>
//   );
// };

// export default TestimonialsSection;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Absolutely love the artwork! I shared my idea, and they brought it to life with such precision and creativity. The quality is top-notch, and I’ll definitely be ordering again!",
    name: "Sarah M.",
    image: "/customer1.jpg",
  },
  {
    id: 2,
    text: "The custom painting I ordered exceeded my expectations. The colors, the details, everything was perfect! Highly recommend this service.",
    name: "David L.",
    image: "/customer2.jpg",
  },
  {
    id: 3,
    text: "Fantastic experience! The artist truly understands how to bring ideas to life. My artwork is now the centerpiece of my home!",
    name: "Emily R.",
    image: "/customer3.jpg",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showExplosion, setShowExplosion] = useState(false);

  const handleNext = () => {
    setShowExplosion(true); // Trigger explosion
    setTimeout(() => {
      setShowExplosion(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 400); // Change after explosion animation
  };

  const handlePrev = () => {
    setShowExplosion(true); // Trigger explosion
    setTimeout(() => {
      setShowExplosion(false);
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonials.length) % testimonials.length
      );
    }, 400);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-bg2 flex flex-col items-center p-6 lg:p-12 gap-6 text-center overflow-hidden">
      {/* Title */}
      <h2 className="font-swash text-[24px] sm:text-[32px] md:text-[40px]">
        See what customer says
      </h2>

      {/* Testimonial Content with Controlled Explosion */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl">
        {/* Explosion Effect */}
        {showExplosion && (
          <motion.div
            className="absolute w-[60px] h-[60px] bg-red-500 rounded-full opacity-80"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: [0, 3, 0], opacity: [1, 0] }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        )}

        <motion.p
          key={testimonials[currentIndex].id}
          className="text-[18px] sm:text-[22px] md:text-[28px] px-4 font-serif leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {testimonials[currentIndex].text}
        </motion.p>

        <div className="flex items-center mt-4">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-16 h-16 rounded-full border-2 border-bg4"
          />
          <p className="ml-4 text-[24px] sm:text-[28px] md:text-[32px] font-script">
            {testimonials[currentIndex].name}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div
        className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
        onClick={handlePrev}
      >
        <ArrowLeft size={30} />
      </div>
      <div
        className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
        onClick={handleNext}
      >
        <ArrowRight size={30} />
      </div>

      {/* Background Images */}
      <img
        src="flowerwith2bg.png"
        alt="Decor"
        onContextMenu={(e) => e.preventDefault()}
        className="absolute bottom-0 left-0 w-[130px] sm:w-[170px] md:w-[200px] lg:h-[350px] lg:w-fit opacity-80 mix-blend-multiply"
      />
      <img
        src="/testimonialright.png"
        alt="Decor"
        onContextMenu={(e) => e.preventDefault()}
        className="absolute bottom-0 right-0 w-[100px] sm:w-[130px] md:w-[150px] lg:h-[250px] lg:w-fit opacity-80 mix-blend-darken"
      />
    </section>
  );
};

export default TestimonialsSection;
