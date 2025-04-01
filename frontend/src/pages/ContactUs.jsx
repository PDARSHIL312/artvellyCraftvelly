import React from "react";
import { Contact, Mail } from "lucide-react";

const data = { phone: "8140217322", email: "darshilp200300@gmail.com" };

const ContactUs = () => {
  return (
    <div className="relative w-full bg-[#EBE3D5] border">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-[348px] bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('contactusbg.webp')" }}
      ></div>

      {/* Contact Title */}
      <h2 className="absolute top-[121px] left-1/2 transform -translate-x-1/2 text-4xl md:text-5xl font-swash text-black">
        Contact US
      </h2>

      {/* Contact Content */}
      <div className="relative flex flex-col md:flex-row justify-evenly items-center px-10 py-20 mt-[300px]">
        {/* Left Section */}
        <div className="text-center md:text-left max-w-lg">
          <h3 className="text-4xl md:text-5xl font-script text-black leading-[120%]">
            Let’s Get in <br /> Touch With Us
          </h3>
        </div>

        {/* Right Section */}
        <div className="max-w-2xl text-center md:text-left mt-6 md:mt-0">
          <p className="text-[18px] md:text-[22px] font-inria text-black">
            Call or Email us to Connect with us. <br /> We will get back to you
            within 24 hours.
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-evenly items-center text-center gap-10 pb-10">
        {/* Phone Section */}
        <a
          href="https://wa.me/8140217322"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-lg transition duration-300 hover:bg-bg4"
        >
          <div className="flex justify-center">
            <Contact size={40} />
          </div>
          <h4 className="text-3xl font-lily mt-4">phone us</h4>
          <p className="text-2xl font-inria">phone:+91 {data.phone}</p>
        </a>

        {/* Email Section */}
        <a
          href="mailto:darshilp200300@gmail.com"
          className="p-4 rounded-lg transition duration-300 hover:bg-bg4"
        >
          <div className="flex justify-center">
            <Mail size={40} />
          </div>
          <h4 className="text-3xl font-lily mt-4">Mail us</h4>
          <p className="text-2xl font-inria">email: {data.email}</p>
        </a>
      </div>

      {/* Background Image at bottom-right (Add your image manually) */}
      <div
        className="absolute bottom-0 right-0 w-[200px] h-[270px] md:w-[270px] md:h-[370px] bg-cover bg-right-bottom mix-blend-multiply"
        style={{ backgroundImage: "url('jarwithbird.webp')" }}
      ></div>
    </div>
  );
};

export default ContactUs;
