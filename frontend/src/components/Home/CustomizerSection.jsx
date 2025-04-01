import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CustomizerSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const handleWhatsAppRedirect = () => {
    setIsClicked(true);
    const phoneNumber = "8140217322";
    const message =
      "Hello! I am interested in customizing an artwork.\nCould you please provide more details? 🎨✨";

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(url, "_blank");
    }, 1000);
  };

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

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-bg3 flex flex-col md:flex-row items-center justify-between p-6 lg:p-12 gap-2 overflow-hidden"
    >
      {/* Left Side */}
      <div className="relative h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full md:w-1/2 lg:w-1/3 flex flex-col items-center md:place-items-start p-2">
        <h1 className="font-script p-4 text-sm sm:text-[38px] md:text-md lg:text-lg leading-[110%] text-center md:text-start">
          Want <span className="block font-swash">To</span>{" "}
          <span className="block font-swash">Customize?</span>
        </h1>

        {/* Bomb Button Animation */}
        <motion.button
          className="absolute top-40 md:top-64 md:left-14 lg:top-66 lg:left-28 text-black px-4 py-2 text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] rounded-2xl font-serif w-fit z-10 hover:font-bold"
          style={{ backgroundColor: "rgba(119, 107, 93, 0.8)" }}
          initial={{ scale: 1 }}
          animate={
            isClicked
              ? {
                  scale: [1, 1.5, 2],
                  borderRadius: ["15px", "50%", "50%"],
                  opacity: [1, 0],
                }
              : {}
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          onClick={handleWhatsAppRedirect}
        >
          {isClicked ? "💥" : "Click Here"}
        </motion.button>

        {/* Explosion Effect */}
        {isClicked &&
          [...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[10px] h-[10px] rounded-full"
              style={{
                backgroundColor: ["#FF5733", "#FFC300", "#DAF7A6", "#FF33E3"][
                  i % 4
                ],
                left: "50%",
                top: "50%",
              }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{
                scale: [1, 2, 0],
                opacity: [1, 0],
                x: [Math.random() * 100 - 50, Math.random() * 200 - 100],
                y: [Math.random() * 100 - 50, Math.random() * 200 - 100],
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          ))}

        {/* Moving Emoji After Explosion */}
        {isClicked && (
          <motion.span
            className="absolute left-1/2 top-40 text-[30px] z-20"
            initial={{ opacity: 1, scale: 1 }}
            animate={{
              x: ["0%", "150%"],
              opacity: [1, 0],
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            🎭
          </motion.span>
        )}

        {/* Sparkles Behind Moving Emoji */}
        {isClicked &&
          [...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[6px] h-[6px] bg-yellow-300 rounded-full"
              initial={{ opacity: 1, scale: 1 }}
              animate={{
                opacity: [1, 0],
                scale: [1, 1.5, 0],
                x: [Math.random() * 40 - 20, Math.random() * 80 - 40],
                y: [Math.random() * 40 - 20, Math.random() * 80 - 40],
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            />
          ))}

        {/* Animated Leaf Falling */}
        <motion.img
          src="1flower3half.webp"
          alt="Background"
          onContextMenu={(e) => e.preventDefault()}
          className="mix-blend-multiply absolute left-2 bottom-0 h-[200px] sm:h-[300px] md:h-[400px] opacity-85"
          initial={{ y: -20, opacity: 0.8 }}
          animate={{ y: [0, 10, 0], opacity: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 lg:w-2/3 h-auto md:min-h-[490px] flex flex-col items-center text-center mt-6 lg:mt-0 lg:py-4">
        <motion.p
          className="font-swash font-bold text-[22px] sm:text-[28px] md:text-[36px] leading-[120%] md:pt-4 md:px-3"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {"We bring your vision to life with custom artwork tailored to your ideas and desires"
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
        </motion.p>

        {/* Video ref */}
        <div className="relative mt-6 pb-6 px-4">
          {isVisible ? (
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/darshilpatel/video/upload/v1743529841/video01_kk51yj.mp4"
              controls
              autoPlay
              muted
              className="w-[320px] sm:w-[480px] md:w-[875px] h-[600px] rounded-lg border-2 border-bg4"
            />
          ) : (
            <div className="w-[320px] sm:w-[480px] md:w-[875px] h-[200px] md:h-[492px] flex items-center justify-center bg-gray-300 rounded-lg">
              <p className="text-gray-700">Loading Video...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CustomizerSection;
