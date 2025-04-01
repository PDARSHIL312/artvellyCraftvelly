// import React from "react";

// const Aboutus = () => {
//   return (
//     <div className="w-full flex flex-col">
//       {/* Section 1 - Quote Section */}
//       <section className="relative w-full bg-bg2 py-12 px-6 text-center">
//         <h2 className="text-[18px] md:text-sm font-serif text-start z-10">
//           Bringing Imagination to Life Through Art 🎨
//         </h2>
//         <p className="mt-4 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[26px] font-serif max-w-full min-h-[100px] mx-auto z-10">
//           Welcome to{" "}
//           <span className="font-swash font-bold">Art&Craft Velly</span>, where
//           creativity meets passion! Every brushstroke, every sketch, and every
//           piece of art we create is inspired by emotions, stories, and the
//           beauty of imagination.
//         </p>
//         <img
//           src="/aboutus/aboutussection01.png"
//           alt="Quote Section Image"
//           className="absolute left-0 bottom-0 h-[170px] sm:h-[180px] sm:w-[200px] mix-blend-multiply opacity-100"
//         />
//       </section>

//       {/* Section 2 - Meet the Artist */}
//       <section className="relative w-full bg-bg3 py-12 px-6 min-h-[300px] md:h-[450px] lg:h-[600px]">
//         <h2 className="text-[18px] md:text-sm font-serif text-center sm:text-start">
//           Meet the Artist 👩‍🎨
//         </h2>
//         <p className="mt-4 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[26px] font-serif max-w-full min-h-[170px] mx-auto z-10">
//           Hi, I'm <span className="font-swash font-bold">Hardi</span>, a
//           passionate artist who loves turning ideas into breathtaking artworks.
//           With years of experience in canvas painting, sketching, and custom
//           acrylic work, I believe that art is more than just colors on a
//           canvas—it’s an expression of feelings, dreams, and individuality.
//         </p>
//         <img
//           src="/aboutus/aboutusmain.png"
//           alt="Artist Background"
//           className="absolute bottom-0 left-4 sm:left-0 w-[90%] sm:w-full object-cover mix-blend-multiply opacity-100"
//         />
//       </section>

//       {/* Section 3 - Image/Video Showcase */}
//       <section className="w-full h-auto">
//         <img
//           src="/art-showcase.jpg"
//           alt="Art Showcase"
//           className="w-full h-auto"
//         />
//       </section>

//       {/* Section 4 - What We Offer */}
//       <section className="relative w-full bg-bg3 py-12 px-8 text-start min-h-[280px]">
//         <h2 className="text-[18px] md:text-sm font-serif text-start z-10">
//           What We Offer 🖌️
//         </h2>
//         <p className="mt-4 absolute pr-7 left-10 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[26px] font-serif max-w-full min-h-[100px] mx-auto z-10">
//           <strong>Custom Art Commissions</strong> – Turn your ideas into reality
//           with personalized paintings and sketches.
//           <br />
//           <strong>Acrylic & Canvas Art</strong> – Explore a variety of stunning
//           hand-painted artworks.
//           <br />
//           <strong>Exclusive Designs</strong> – Unique, one-of-a-kind creations
//           that you won’t find anywhere else.
//         </p>
//         <img
//           src="/aboutus/aboutusjar.png"
//           alt="Quote Section Image"
//           className="absolute right-0 bottom-0 h-[170px] sm:h-[180px] sm:w-[200px] md:h-[220px] md:w-[220px] mix-blend-multiply opacity-100"
//         />
//       </section>

//       {/* Section 5 - Why Choose Us */}
//       <section className="relative w-full bg-bg2 py-12 px-6 text-start min-h-[280px]">
//         <h2 className="absolute top-4 text-[18px] md:text-sm font-serif text-start z-10">
//           Why Choose Us? 💖
//         </h2>
//         <ul className="mt-5 absolute pr-7 left-10 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[26px] font-serif max-w-full min-h-[100px] mx-auto z-10">
//           <li>
//             ✔ <strong>Handcrafted with Passion</strong> – Every piece is made
//             with love and dedication.
//           </li>
//           <li>
//             ✔ <strong>Tailored to Your Vision</strong> – Your ideas, our
//             artistry—together, we create magic.
//           </li>
//           <li>
//             ✔ <strong>High-Quality Materials</strong> – We use the finest
//             paints, canvases, and tools for long-lasting.
//           </li>
//         </ul>
//         <img
//           src="/aboutus/aboutuspaint.png"
//           alt="Left Background"
//           className="absolute left-0 bottom-0 h-full w-[120px] md:w-[320px] opacity-85 mix-blend-darken"
//         />
//         <img
//           src="/aboutus/aboutuspaint.png"
//           alt="Left Background"
//           className="absolute scale-x-[-1] right-0 bottom-0 h-full w-[120px] md:w-[320px] opacity-85 mix-blend-darken"
//         />
//       </section>
//     </div>
//   );
// };

// export default Aboutus;

import React from "react";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const slideInVariants = (direction) => ({
  hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
});

const Aboutus = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Section 1 - Quote Section */}
      <motion.section
        className="relative w-full bg-bg2 py-12 px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <h2 className="text-[18px] md:text-sm font-serif text-start z-10">
          Bringing Imagination to Life Through Art 🎨
        </h2>
        <p className="mt-4 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[26px] font-serif max-w-full min-h-[100px] mx-auto z-10">
          Welcome to{" "}
          <span className="font-swash font-bold">Art&Craft Velly</span>, where
          creativity meets passion! Every brushstroke, every sketch, and every
          piece of art we create is inspired by emotions, stories, and the
          beauty of imagination.
        </p>
        <motion.img
          src="1plant2dot.webp"
          alt="Quote Section Image"
          className="absolute left-0 bottom-0 h-[150px] sm:h-[180px] sm:w-[200px] object-fill mix-blend-multiply opacity-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInVariants("left")}
        />
      </motion.section>

      {/* Section 2 - Meet the Artist */}
      <motion.section
        className="relative w-full bg-bg3 py-12 px-6 min-h-[300px] md:h-[450px] lg:h-[600px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <h2 className="text-[18px] md:text-sm font-serif text-center sm:text-start">
          Meet the Artist 👩‍🎨
        </h2>
        <p className="mt-4 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[26px] font-serif max-w-full min-h-[170px] mx-auto z-10">
          Hi, I'm <span className="font-swash font-bold">Hardi</span>, a
          passionate artist who loves turning ideas into breathtaking artworks.
          With years of experience in canvas painting, sketching, and custom
          acrylic work, I believe that art is more than just colors on a
          canvas—it’s an expression of feelings, dreams, and individuality.
        </p>
        <motion.img
          src="aboutusmain.webp"
          alt="Artist Background"
          className="absolute bottom-0 left-4 sm:left-0 w-[90%] sm:w-full object-cover mix-blend-multiply opacity-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInVariants("right")}
        />
      </motion.section>

      {/* Section 3 - Image/Video Showcase */}
      <motion.section
        className="w-full h-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <motion.img
          src="/art-showcase.jpg"
          alt="Art Showcase"
          className="w-full h-auto hover:scale-105 transition-transform duration-500"
        />
      </motion.section>

      {/* Section 4 - What We Offer */}
      <motion.section
        className="relative w-full bg-bg3 py-12 px-8 text-start min-h-[280px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <h2 className="text-[18px] md:text-sm font-serif text-start z-10">
          What We Offer 🖌️
        </h2>
        <p className="mt-4 absolute pr-7 left-10 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[26px] font-serif max-w-full min-h-[100px] mx-auto z-10">
          <strong>Custom Art Commissions</strong> – Turn your ideas into reality
          with personalized paintings and sketches.
          <br />
          <strong>Acrylic & Canvas Art</strong> – Explore a variety of stunning
          hand-painted artworks.
          <br />
          <strong>Exclusive Designs</strong> – Unique, one-of-a-kind creations
          that you won’t find anywhere else.
        </p>
        <motion.img
          src="jar2dot.webp"
          alt="Quote Section Image"
          className="absolute right-0 bottom-0 h-[170px] sm:h-[180px] sm:w-[200px] md:h-[220px] md:w-[220px] mix-blend-multiply opacity-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInVariants("right")}
        />
      </motion.section>

      {/* Section 5 - Why Choose Us */}
      <section className="relative w-full bg-bg2 py-12 px-6 text-start min-h-[280px]">
        <h2 className="absolute top-4 text-[18px] md:text-sm font-serif text-start z-10">
          Why Choose Us? 💖
        </h2>
        <ul className="mt-5 absolute pr-7 left-10 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[26px] font-serif max-w-full min-h-[100px] mx-auto z-10">
          <li>
            ✔ <strong>Handcrafted with Passion</strong> – Every piece is made
            with love and dedication.
          </li>
          <li>
            ✔ <strong>Tailored to Your Vision</strong> – Your ideas, our
            artistry—together, we create magic.
          </li>
          <li>
            ✔ <strong>High-Quality Materials</strong> – We use the finest
            paints, canvases, and tools for long-lasting.
          </li>
        </ul>
        <img
          src="aboutuspaint.webp"
          alt="Left Background"
          className="absolute left-0 bottom-0 h-full w-[120px] md:w-[320px] opacity-85 mix-blend-darken"
        />
        <img
          src="aboutuspaint.webp"
          alt="Left Background"
          className="absolute scale-x-[-1] right-0 bottom-0 h-full w-[120px] md:w-[320px] opacity-85 mix-blend-darken"
        />
      </section>
    </div>
  );
};

export default Aboutus;
