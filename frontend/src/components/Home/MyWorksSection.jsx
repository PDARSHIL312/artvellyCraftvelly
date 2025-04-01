// import React from "react";
// import { motion } from "framer-motion";

// const art = [
//   {
//     leftImage: "sample-1.png",
//     rightText:
//       "its colors, theme, emotions, or any story behind it? That way, I can craft a description that truly captures its essence! 😊🎨",
//     title: "Artwork 1",
//   },
//   {
//     leftImage: "sample-1.png",
//     rightText:
//       "its colors, theme, emotions, or any story behind it? That way, I can craft a description that truly captures its essence! 😊🎨",
//     title: "Artwork 1",
//   },
//   {
//     leftImage: "sample-1.png",
//     rightText:
//       "its colors, theme, emotions, or any story behind it? That way, I can craft a description that truly captures its essence! 😊🎨",
//     title: "Artwork 1",
//   },
// ];

// const MyWorksSection = () => {
//   return (
//     <div className="bg-bg2 relative flex flex-col py-10 px-30 0 md:px-[26px] text-center font-serif ">
//       {/* Title Section */}
//       <div className="relative px-[30px] -mb-[50px] md:-mb-[40px] lg:-mb-[30px] ">
//         {/* top  right image */}
//         <img
//           src="uhi.jpeg"
//           alt="top paint-brush"
//           className="absolute top-0 right-0 z-10  mix-blend-darken w-[100px] md:w-[150px] lg:w-[200px] "
//         />
//         <h2 className="text-sm md:text-md font-swash">Who Am I?</h2>
//         <div className="relative  min-h-[120px]">
//           <p className="pl-6 md:pl-10 text-[18px] md:text-[22px] xl:text-[28px] xl:flex xl:flex-row xl:items-start  ">
//             Hi,I'm
//             <span className="font-swash text-[24px] md:text-[28px] xl:text-[32px] felx felx-row font-bold z-20 pl-[10px]">
//               Hardi
//             </span>
//             ,a passionate artist who loves turning ideas into breathtaking
//             artworks. With years of experience in canvas painting, sketching,
//             and custom acrylic work.
//           </p>
//         </div>
//         <img
//           src="flowerstart.png"
//           alt="Decorative Flower"
//           className="w-[70px] top-[40px] md:w-[80px] md:top-[60px] lg:w-[90px] lg:top-[60px] left-0 absolute mix-blend-multiply "
//         />
//       </div>

//       {/* Section Divider */}
//       <div className="flex justify-center items-center min-h-[200px] w-full">
//         <img
//           src="divdivider.png"
//           alt="sectiondivider"
//           className="w-[300px] md:w-[450px] lg:w-[600px] min-h-[90px]"
//         />
//       </div>

//       <div className="-mt-[40px] md:-mt-[30px] h-auto p-6">
//         {/* Works Section */}
//         <h3 className="text-sm font-swash font-semibold mt-0">See my works</h3>
//         {/* Art Showcase Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 mt-6  p-4">
//           {art.map((art, index) => (
//             <div
//               key={index}
//               className="relative flex flex-col md:flex-row items-center gap-4 p-2 overflow-hidden"
//             >
//               {/* Background Image */}
//               <img
//                 src="flowerwith2bg.png"
//                 alt="Center Artwork"
//                 className="w-[120px] h-[170px] md:w-[130px] md:h-[170px] lg:w-[130px] lg:h-[170px] absolute right-0 bottom-0 object-cover mix-blend-multiply"
//               />

//               {/* Left Image with Hover Title */}
//               <div className="relative group">
//                 <motion.img
//                   src={art.leftImage}
//                   alt="Left Artwork"
//                   className="w-40 h-40 object-cover shadow-lg rounded-lg"
//                   whileHover={{ scale: 1.1 }}
//                 />
//                 {/* Hover Title */}
//                 <motion.div
//                   initial={{ y: 50, opacity: 0 }}
//                   whileHover={{ y: 0, opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                   className="absolute bottom-0 w-full bg-bg4 bg-opacity-60 text-white text-center py-2 text-sm font-medium group-hover:opacity-100"
//                 >
//                   {art.title}
//                 </motion.div>
//               </div>

//               {/* Right Text */}
//               <p className="text-[18px] text-[#4a2c2a] text-left max-w-sm leading-tight">
//                 {art.rightText}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyWorksSection;

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const art = [
  {
    leftImage: "sample-1.png",
    rightText:
      "Its colors, theme, emotions, or any story behind it? That way, I can craft a description that truly captures its essence! 😊🎨",
    title: "Artwork 1",
  },
  {
    leftImage: "sample-1.png",
    rightText:
      "Its colors, theme, emotions, or any story behind it? That way, I can craft a description that truly captures its essence! 😊🎨",
    title: "Artwork 2",
  },
  {
    leftImage: "sample-1.png",
    rightText:
      "Its colors, theme, emotions, or any story behind it? That way, I can craft a description that truly captures its essence! 😊🎨",
    title: "Artwork 3",
  },
];

const MyWorksSection = () => {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const fullText =
    "Hi, I'm Hardi, a passionate artist who loves turning ideas into breathtaking artworks. With years of experience in canvas painting, sketching, and custom acrylic work.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let i = 0;
      const interval = setInterval(() => {
        setText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div
      ref={sectionRef}
      className="bg-bg2 relative flex flex-col py-10 px-30 md:px-[26px] text-center font-serif overflow-hidden"
    >
      {/* Paint Droplets Animation */}
      {isVisible &&
        [...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-red-500 rounded-full"
            initial={{ y: -50, x: Math.random() * window.innerWidth }}
            animate={{ y: "100vh", opacity: 0 }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

      {/* Title Section */}
      <div className="relative px-[30px] -mb-[50px] md:-mb-[40px] lg:-mb-[30px] ">
        <img
          src="uhi.jpeg"
          alt="top paint-brush"
          className="absolute top-0 right-0 z-10 mix-blend-darken w-[100px] md:w-[150px] lg:w-[200px]"
        />
        <h2 className="text-sm md:text-md font-swash">Who Am I?</h2>
        <div className="relative min-h-[120px]">
          <p className="pl-6 md:pl-10 text-[18px] md:text-[22px] xl:text-[28px] xl:flex xl:flex-row xl:items-start">
            {text}
          </p>
        </div>
        <img
          src="flowerstart.png"
          alt="Decorative Flower"
          className="w-[70px] top-[40px] md:w-[80px] md:top-[60px] lg:w-[90px] lg:top-[60px] left-0 absolute mix-blend-multiply"
        />
      </div>

      {/* Section Divider */}
      <div className="flex justify-center items-center min-h-[200px] w-full">
        <img
          src="divdivider.png"
          alt="sectiondivider"
          className="w-[300px] md:w-[450px] lg:w-[600px] min-h-[90px]"
        />
      </div>

      <div className="-mt-[40px] md:-mt-[30px] h-auto p-6">
        <h3 className="text-sm font-swash font-semibold mt-0">See my works</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 mt-6 p-4">
          {art.map((art, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col md:flex-row items-center gap-4 p-2 overflow-hidden"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <img
                src="flowerwith2bg.png"
                alt="Center Artwork"
                className="w-[120px] h-[170px] md:w-[130px] md:h-[170px] lg:w-[130px] lg:h-[170px] absolute right-0 bottom-0 object-cover mix-blend-multiply"
              />
              <div className="relative group">
                <motion.img
                  src={art.leftImage}
                  alt="Left Artwork"
                  className="w-40 h-40 object-cover shadow-lg rounded-lg"
                  whileHover={{ scale: 1.1 }}
                />
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 w-full bg-bg4 bg-opacity-60 text-white text-center py-2 text-sm font-medium group-hover:opacity-100"
                >
                  {art.title}
                </motion.div>
              </div>
              <p className="text-[18px] text-[#4a2c2a] text-left max-w-sm leading-tight">
                {art.rightText}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWorksSection;
