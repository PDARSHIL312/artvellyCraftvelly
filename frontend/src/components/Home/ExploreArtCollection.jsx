// import React from "react";
// const artworks = [
//   {
//     id: 1,
//     img: "sample-1.png",
//     title: "New art 1",
//     desciption:
//       "Lorem l this is description nothing connected with it fuck Off!",
//     link: "/product/1",
//   },
//   {
//     id: 2,
//     img: "sample-2.png",
//     title: "Artwork 2",
//     desciption:
//       "Lorem l this is description nothing connected with it fuck Off!",
//     link: "/product/2",
//   },
//   {
//     id: 3,
//     img: "sample-3.png",
//     title: "Artwork 3",
//     desciption:
//       "Lorem l this is description nothing connected with it fuck Off!",
//     link: "/product/3",
//   },
//   {
//     id: 4,
//     img: "sample-4.png",
//     title: "Artwork 4",
//     desciption:
//       "Lorem l this is description nothing connected with it fuck Off!",
//     link: "/product/4",
//   },
// ];

// const ExploreArtCollection = () => {
//   return (
//     <section className="w-full py-4 md:h-auto bg-bg3 px-4 flex flex-col lg:flex-row items-center justify-between gap-5 ">
//       {/* Left Section */}
//       <div className="relative  flex flex-col  w-full lg:w-1/3 text-black items-center md:items-start">
//         {/* Explore Art Text */}
//         <h1 className="font-script italic text-md md:text-lg lg:text-xl lg:p-10 ">
//           Explore
//           <p className="font-swash pl-5 ">Art</p>
//           <p className="font-swash pl-8 ">Collection</p>
//         </h1>
//         <img
//           src="/ExploreArtCollectionFlowerImage.png"
//           alt="Background Flower"
//           onContextMenu={(e) => e.preventDefault()}
//           className="absolute top-2 h-[150px] left-[185px]
//           sm:top-0 sm:left-[350px] sm:h-[160px]
//             md:top-4 md:left-36 md:h-[200px]
//            lg:top-16 lg:left-[230px] lg:h-[300px] width-full mix-blend-multiply"
//         />
//       </div>
//       {/* right Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-2/3 p-5 h-[515px] ">
//         {artworks.map((art) => (
//           <div key={art.id} className="relative group overflow-hidden">
//             <img
//               src={art.img}
//               alt={art.title}
//               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//             />
//             {/* Hover Details */}
//             <div className="p-2 absolute bottom-[-30px] left-0 w-full h-full md:h-2/3 bg-bg4/90 text-white/80 flex justify-center translate-y-full group-hover:translate-y-0 transition-all duration-300">
//               <a href={art.link} className="text-[20px] font-script">
//                 {art.title}
//                 <p className="flex justify-start text-[14px] font-serif text-black">
//                   {art.desciption}
//                 </p>
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ExploreArtCollection;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const artworks = [
  { id: 1, img: "sample-1.png", title: "New Art 1", link: "/product/1" },
  { id: 2, img: "sample-2.png", title: "Artwork 2", link: "/product/2" },
  { id: 3, img: "sample-3.png", title: "Artwork 3", link: "/product/3" },
  { id: 4, img: "sample-4.png", title: "Artwork 4", link: "/product/4" },
];

const ExploreArtCollection = () => {
  const [animate, setAnimate] = useState(false);

  // Trigger animations when section is in viewport
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("explore-art-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setAnimate(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="explore-art-section"
      className="w-full py-8 bg-bg3 px-6 flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden"
    >
      {/* Left Section with Animated Text & Flower */}
      <motion.div
        className="relative flex flex-col w-full lg:w-1/3 text-black items-center md:items-start"
        initial={{ opacity: 0, x: -100 }}
        animate={animate ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="font-script italic text-md md:text-lg lg:text-xl lg:p-10">
          Explore <p className="font-swash pl-5">Art</p>
          <p className="font-swash pl-8">Collection</p>
        </h1>

        {/* Animated Background Flower Image */}
        <motion.img
          src="/ExploreArtCollectionFlowerImage.png"
          alt="Background Flower"
          className="absolute top-2 h-[150px] left-[185px]
            sm:top-0 sm:left-[350px] sm:h-[160px]
            md:top-4 md:left-36 md:h-[200px] 
            lg:top-16 lg:left-[230px] lg:h-[300px] mix-blend-multiply"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={animate ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Floating Sparkle Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[6px] h-[6px] rounded-full bg-white"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [Math.random() * 50 - 25, Math.random() * 50 - 25],
                y: [Math.random() * 50 - 25, Math.random() * 50 - 25],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Right Section: Animated Artworks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-2/3 p-5">
        {artworks.map((art, index) => (
          <motion.div
            key={art.id}
            className="relative group overflow-hidden rounded-xl shadow-lg bg-white"
            initial={{ opacity: 0, y: 50 }}
            animate={animate ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
          >
            {/* Artistic Color Burst Effect */}
            <motion.div
              className="absolute w-[80px] h-[80px] bg-gradient-to-r from-pink-500 to-purple-500 opacity-50 rounded-full blur-xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={
                animate ? { scale: [0, 1.5, 1], opacity: [0, 1, 0] } : {}
              }
              transition={{ duration: 1.5, delay: index * 0.2 }}
            ></motion.div>

            {/* Image */}
            <img
              src={art.img}
              alt={art.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Hover Details */}
            <div className="p-3 absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-t from-black/70 to-transparent text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <a href={art.link} className="text-[20px] font-script">
                {art.title}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExploreArtCollection;
