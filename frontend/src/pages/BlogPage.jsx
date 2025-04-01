import { useState } from "react";
import { motion } from "framer-motion";

const generateBalloons = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100 + "%",
    delay: Math.random() * 3,
  }));
};

const BlogPage = () => {
  const [balloons] = useState(generateBalloons(10));

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-50"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Falling Balloons */}
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          className="absolute w-10 h-14 bg-red-500 rounded-full"
          style={{ left: balloon.left }}
          initial={{ y: "-10%", opacity: 0 }}
          animate={{ y: "110%", opacity: 1 }}
          transition={{ duration: 5, delay: balloon.delay, repeat: Infinity }}
        />
      ))}

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="relative text-white text-5xl md:text-7xl font-bold text-center"
      >
        Coming Soon...
        <div className="text-lg mt-2">Working on it... 🚀</div>
      </motion.div>
    </div>
  );
};

export default BlogPage;
