import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import React from "react";

const ContactUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState(false);
  const [swapImages, setSwapImages] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle Button Click Animation
  const handleButtonClick = () => {
    setButtonClicked(true);
    setTimeout(() => navigate("/contactus"), 1000); // Redirect after animation
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-auto bg-bg2 flex flex-col items-center p-6 lg:p-10 gap-6 overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        className="font-swash font-bold italic text-[22px] sm:text-[28px] md:text-[32px] text-center px-6 py-2 w-auto max-w-full leading-[110%]"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        {"Discover a glimpse of our customers' unique creations, customized to match their vision."
          .split(" ")
          .map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
            >
              {word}{" "}
            </motion.span>
          ))}
      </motion.h2>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-6">
        {/* Image Showcase with Swapping Effect */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-2/3">
          <motion.img
            src={
              swapImages
                ? "https://res.cloudinary.com/darshilpatel/image/upload/v1743529170/watch_nuufr7.jpg"
                : "https://res.cloudinary.com/darshilpatel/image/upload/f_auto/v1743529158/bajot_qimuhn.jpg"
            }
            alt="Art 1"
            className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover rounded-lg"
            initial={{ opacity: 0.8, rotate: 0 }}
            animate={{ opacity: 1, rotate: swapImages ? -2 : 2 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 5,
            }}
          />
          <motion.img
            src={
              swapImages
                ? "https://res.cloudinary.com/darshilpatel/image/upload/f_auto/v1743529158/bajot_qimuhn.jpg"
                : "https://res.cloudinary.com/darshilpatel/image/upload/v1743529170/watch_nuufr7.jpg"
            }
            alt="Art 2"
            className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover rounded-lg"
            initial={{ opacity: 0.8, rotate: 0 }}
            animate={{ opacity: 1, rotate: swapImages ? 2 : -2 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 5,
            }}
          />
        </div>

        {/* Order & Contact Section */}
        <div className="relative w-full lg:w-1/3 md:text-right flex flex-col items-center p-2 min-h-[210px] sm:min-h-[270px] lg:min-h-[500px] h-auto">
          <h1 className="font-script text-sm sm:text-md md:text-lg leading-[110%]">
            Order <br /> Now
          </h1>

          {/* Contact Button Animation */}
          <motion.button
            className="bg-bg4/80 text-black px-4 py-2 md:py-3 text-[12px] sm:text-[16px] md:text-[20px] rounded-full font-serif mt-4 z-10 flex items-center justify-center"
            initial={{ scale: 1 }}
            animate={buttonClicked ? { x: "120%", opacity: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onClick={handleButtonClick}
          >
            {buttonClicked ? "📞" : "Contact Us"}
          </motion.button>

          {/* Green Sprinkles Effect When Button Moves */}
          {buttonClicked && (
            <div className="absolute w-full h-full">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-[6px] h-[6px] bg-green-400 rounded-full"
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{
                    opacity: [1, 0],
                    scale: [1, 1.5, 0],
                    x: [Math.random() * 50 - 25, Math.random() * 100 - 50],
                    y: [Math.random() * 50 - 25, Math.random() * 100 - 50],
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          )}

          {/* Background Image with Slight Floating Animation */}
          <motion.img
            src="/jarwithbird.webp"
            alt="Decorative Background"
            onContextMenu={(e) => e.preventDefault()}
            className="absolute bottom-0 right-5 h-[220px] sm:h-[270px] sm:right-20 lg:h-[500px] lg:right-0 mix-blend-darken"
            initial={{ y: 0 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
