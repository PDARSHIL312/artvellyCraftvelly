import React from "react";

const ProjectShowcase = () => {
  // Project data array
  const projectsData = [
    {
      id: 1,
      imageUrl: "/sample-3.png",
      description:
        "Paintings PaintingsPaintingsPaintings PaintingsPaintingsPaintings PaintingsPaintingsPaintings",
    },
    {
      id: 2,
      imageUrl: "/sample-3.png",
      description:
        "Paintings PaintingsPaintingsPaintings PaintingsPaintingsPaintings PaintingsPaintingsPaintings",
    },
    {
      id: 3,
      imageUrl: "/sample-3.png",
      description:
        "Paintings PaintingsPaintingsPaintings PaintingsPaintingsPaintings PaintingsPaintingsPaintings",
    },
    {
      id: 4,
      imageUrl: "/sample-3.png",
      description:
        "Paintings PaintingsPaintingsPaintings PaintingsPaintingsPaintings PaintingsPaintingsPaintings",
    },
    {
      id: 5,
      imageUrl: "/sample-3.png",
      description:
        "Paintings PaintingsPaintingsPaintings PaintingsPaintingsPaintings PaintingsPaintingsPaintings",
    },
    {
      id: 6,
      imageUrl: "/sample-3.png",
      description:
        "Paintings PaintingsPaintingsPaintings PaintingsPaintingsPaintings PaintingsPaintingsPaintings",
    },
  ];

  return (
    <div className="relative w-full bg-[#EBE3D5] p-4 md:p-8">
      {/* Header Section */}
      <div className="relative mb-8">
        <h1 className="text-[26px] md:text-sm lg:text-lg font-swash text-center mb-4 border border-indigo-700">
          Who Am I?
        </h1>

        <div className=" relative flex flex-row items-center md:gap-8 px-[26px] min-h-[120px] h-auto border border-indigo-700 ">
          <img
            src="/flowerstart.png"
            alt="head one"
            className="absolute h-[60px] w-[90px] top-0 left-0  mix-blend-multiply border border-indigo-700"
          />
          <div className="w-full ml-[65px] text-center md:text-left border border-indigo-700">
            <p className="text-[18px] md:text-[20px]">
              Hi, I'm Hardi, a passionate artist who loves turning ideas into
              breathtaking artworks. With years of experience in canvas
              painting, sketching, and custom acrylic work
            </p>
          </div>
        </div>

        {/* Decorative flower image */}
        <div className="w-full flex justify-center my-8">
          <div
            className="w-64 md:w-80 h-16 md:h-20 bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: "url('/api/placeholder/400/100')" }}
          ></div>
        </div>
      </div>

      {/* Works Section */}
      <div className="relative mb-12">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-normal text-center mb-8"
          style={{ fontFamily: "'Macondo Swash Caps', cursive" }}
        >
          See my works
        </h2>

        {/* Grid Gallery - Using map to render projects */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4"
            >
              <div
                className="w-40 h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.imageUrl})` }}
              ></div>
              <div className="text-center md:text-left max-w-sm">
                <p
                  className="text-[16px]"
                  style={{ fontFamily: "'Macondo Swash Caps', cursive" }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ProjectShowcase;
