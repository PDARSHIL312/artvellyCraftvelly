import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div
    to="/nothing"
      className="flex flex-col text-center items-center
    w-[250px] sm:w-[300px] md:w-[350px]
    lg:w-[400px]  p-2 mb-1 hover:border hover:border-bg4 rounded-lg"
    >
      <a
        href={category.link}
        className="relative group overflow-hidden"
      >
        <img
          src={category.img}
          alt={category.name}
          className=" object-cover h-[300px] md:h-[350px] lg:h-[400px] transition-transform duration-300 group-hover:scale-110"
        />
      </a>
      <h3 className="text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] px-4 font-[Inria Serif] font-bold italic leading-[58px] text-center text-[#3D0747]">
        {category.name}
      </h3>
    </div>
  );
};

export default CategoryCard;
