import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(window.innerWidth >=200 ); // Only show on md and larger

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.innerWidth >= 200);
    };

    window.addEventListener("resize", updateVisibility);
    return () => window.removeEventListener("resize", updateVisibility);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      setPosition({ x, y });
      setBgPosition({ x: x * -0.05, y: y * -0.05 });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const handleHover = (e) => {
      setHovered(e.target.tagName === "A" || e.target.tagName === "BUTTON");
    };

    document.addEventListener("mouseover", handleHover);
    return () => document.removeEventListener("mouseover", handleHover);
  }, [isVisible]);

  if (!isVisible) return null; // Hide completely on small screens

  return (
    <>
      {/* Background Circle (Moves Opposite to Cursor) */}
      <motion.div
        className="fixed w-[60px] h-[60px] bg-bg4/50 blur-xl rounded-full pointer-events-none md:block hidden"
        style={{
          left: position.x + bgPosition.x,
          top: position.y + bgPosition.y,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0.5, scale: hovered ? 2 : 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Paint Palette Cursor 🎨 */}
      <motion.div
        className="z-50 fixed text-[32px] pointer-events-none sm:block hidden"
        style={{
          left: position.x - 16,
          top: position.y - 16,
          userSelect: "none",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: hovered ? 1.5 : 1 }}
        transition={{ duration: 0.3 }}
      >
        🎨
      </motion.div>
    </>
  );
};

export default CustomCursor;
