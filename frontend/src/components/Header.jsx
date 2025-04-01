// import { useState } from "react";
// import { IoIosSearch } from "react-icons/io";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: "Home", route: "/" },
//     { name: "Artworks", route: "/artworks" },
//     { name: "About Us", route: "/aboutus" },
//     { name: "Contact Us", route: "/contactus" },
//     { name: "Blog", route: "/blog" },
//     { name: "Videos", route: "/videos" },
//   ];

//   return (
//     <header className=" bg-bg2 text-black font-sans shadow-md flex justify-between items-center p-2 rounded-md">
//       {/* Logo */}
//       <Link to="/" className="flex items-center">
//         <img src="/logo.jpg" alt="Art&CraftVelly" className="w-16" />
//       </Link>

//       {/* Search & Navigation (Hidden on Mobile) */}
//       <div className="hidden md:flex items-center space-x-6">
//         {/* Search */}
//         <div className="flex items-center bg-bg2 px-3 py-1 rounded-md border border-bg4">
//           <IoIosSearch className="text-bg4" />
//           <input
//             type="text"
//             placeholder="Search..."
//             className="ml-2 border-none bg-bg2 outline-none text-bg4"
//           />
//         </div>
//         {/* All */}
//         <nav className="flex space-x-4">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.route}
//               className="px-4 py-2 text-bg4 hover:bg-bg4 hover:text-white rounded-3xl"
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>
//       </div>

//       {/* Log In Button (Hidden on Mobile) */}
//       <Link
//         to="/login"
//         className="hidden md:flex bg-bg4/80 px-3 py-2 mr-4 rounded-2xl text-white hover:font-bold hover:bg-bg4"
//       >
//         Log In
//       </Link>

//       {/* Mobile Menu Button */}
//       <button className="md:hidden text-bg4" onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "" : <Menu size={28} />}
//       </button>

//       {/* Mobile Menu */}
//       <div
//         className={`z-10 fixed top-0 right-0 h-full w-1/2 opacity-75 bg-bg2 shadow-lg transform transition-all duration-300 ease-in-out ${
//           isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
//         }`}
//       >
//         {/* Close Button */}
//         <button
//           className="absolute top-6 right-4 text-bg4"
//           onClick={() => setIsOpen(false)}
//         >
//           <X size={28} />
//         </button>

//         {/* Menu Links */}
//         <div className="z-10 mt-16 p-6 flex flex-col items-center space-y-4">
//           {navItems.map((item) => (
//             <>
//               <Link
//                 key={item.name}
//                 to={item.route}
//                 className="py-2 border rounded-2xl w-2/3 text-center hover:bg-bg4 hover:text-white"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.name}
//               </Link>
//               <hr className="border-t border-bg4 w-2/3" />
//             </>
//           ))}

//           {/* Login Button */}
//           <Link
//             to="/login"
//             className="py-2 text-white bg-bg4/80 hover:bg-bg4 rounded-2xl w-2/3 text-center"
//             onClick={() => setIsOpen(false)}
//           >
//             Log In
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, useAnimate, stagger } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();

  const navItems = [
    { name: "Home", route: "/" },
    { name: "Artworks", route: "/artworks" },
    { name: "About Us", route: "/aboutus" },
    { name: "Contact Us", route: "/contactus" },
    { name: "Blog", route: "/blog" },
    { name: "Videos", route: "/videos" },
  ];

  const staggerList = stagger(0.1, { startDelay: 0.25 });

  useEffect(() => {
    animate(
      "ul",
      {
        width: isOpen ? 180 : 0,
        height: isOpen ? 260 : 0,
        opacity: isOpen ? 1 : 0,
      },
      { type: "spring", bounce: 0, duration: 0.4 }
    );
    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, x: 0 }
        : { opacity: 0, scale: 0.5, x: -50 },
      { duration: 0.2, delay: isOpen ? staggerList : 0 }
    );
  }, [animate, isOpen, staggerList]);

  return (
    <header
      ref={scope}
      className="bg-bg2 text-black font-sans shadow-md flex justify-between items-center p-2 rounded-md"
    >
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src="/logo.png" alt="Art&CraftVelly" className="w-16" />
      </Link>

      {/* Search & Navigation (Hidden on Mobile) */}
      <div className="hidden md:flex items-center space-x-6">
        {/* Search */}
        <div className="flex items-center bg-bg2 px-3 py-1 rounded-md border border-bg4">
          <IoIosSearch className="text-bg4" />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 border-none bg-bg2 outline-none text-bg4"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.route}
              className="px-4 py-2 text-bg4 hover:bg-bg4 hover:text-white rounded-3xl"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Log In Button (Hidden on Mobile) */}
      <Link
        to="/login"
        className="hidden md:flex bg-bg4/80 px-3 py-2 mr-4 rounded-2xl text-white hover:font-bold hover:bg-bg4"
      >
        Log In
      </Link>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden text-bg4"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </motion.button>

      {/* Mobile Menu with Animation */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: isOpen ? "50%" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 right-0 h-full bg-bg2 shadow-lg overflow-hidden ${
          isOpen ? "z-10" : "z-0"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-4 text-bg4"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        {/* Menu Links with Staggered Animation */}
        <ul className="mt-16 py-6 px-[30px] flex flex-col items-center space-y-4">
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              whileTap={{ scale: 0.95 }}
              className="w-full"
            >
              <Link
                to={item.route}
                className="py-2 hover:border border-bg4 rounded-2xl w-2/3 text-center hover:bg-bg4 hover:text-white block"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
              <hr className="border-t border-bg4 w-2/3 mt-2" />
            </motion.li>
          ))}

          {/* Login Button */}
          <motion.li whileTap={{ scale: 0.95 }} className="w-full">
            <Link
              to="/login"
              className="py-2 text-white bg-bg4/80 hover:bg-bg4 rounded-2xl w-2/3 text-center block"
              onClick={() => setIsOpen(false)}
            >
              Log In
            </Link>
          </motion.li>
        </ul>
      </motion.div>
    </header>
  );
};

export default Header;
