import React from "react";
import { ArrowRightCircle } from "lucide-react";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    id: 1,
    name: "Paintings",
    img: "https://res.cloudinary.com/darshilpatel/image/upload/v1743529166/nilkanthvarni_anmon7.jpg",
    link: "/artworks",
  },
  {
    id: 2,
    name: "Acrylic Items",
    img: "https://res.cloudinary.com/darshilpatel/image/upload/v1743529166/trayacrylic_uadif9.jpg",
    link: "/artworks",
  },
  {
    id: 3,
    name: "Custom Products",
    img: "https://res.cloudinary.com/darshilpatel/image/upload/v1743529162/god2_qq5h2g.jpg",
    link: "/artworks/",
  },
];

const ProductSection = () => {
  return (
    <section className="relative w-full flex flex-col gap-6 bg-bg2 py-8 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Paint Droplets */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[10px] h-[10px] rounded-full"
            style={{
              backgroundColor: ["#FF5733", "#FFC300", "#DAF7A6", "#FF33E3"][
                i % 4
              ],
              left: `${Math.random() * 100}%`,
            }}
            initial={{ y: -50, opacity: 0 }}
            animate={{
              y: ["0%", "100%"],
              opacity: [1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1.5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Moving Paintbrush */}
      <motion.img
        src="paintbrush.webp"
        alt="Paintbrush"
        className="absolute w-[80px] md:w-[100px] top-10 mix-blend-darken"
        initial={{ x: "-100%" }}
        animate={{ x: "110%" }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />

      {/* Title & See More */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center">
        <h2 className="font-swash italic font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-center sm:text-left">
          Painting, Acrylic Items & Much More...
        </h2>

        {/* Animated See More Button */}
        <motion.a
          href="/artworks"
          className="relative py-2 px-4 flex items-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] hover:text-white hover:bg-bg4 rounded-2xl"
        >
          See More <ArrowRightCircle className="ml-2" size={30} />
          {/* Sparkle Effect */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[8px] h-[8px] rounded-full"
              style={{
                backgroundColor: ["#FF5733", "#FFC300", "#DAF7A6", "#FF33E3"][
                  i % 4
                ],
              }}
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                rotate: [0, 360],
                x: [Math.random() * 20 - 10, Math.random() * 30 - 15],
                y: [Math.random() * 20 - 10, Math.random() * 30 - 15],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.a>
      </div>

      {/* Product Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full place-items-center">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
