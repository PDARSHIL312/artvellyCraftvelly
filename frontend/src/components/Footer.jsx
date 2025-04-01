import React from "react";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="w-full  min-h-[650px] md:h-auto bg-cover bg-no-repeat items-center"
      style={{ backgroundImage: 'url("/footer-bg.png")' }}
    >
      <div className="relative z-10 w-full px-4 md:px-16 md:py-10-14 lg:px-24 lg:py-24 py-8 ">
        <div className="items-center grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 text-white text-center md:text-left">
          {/* Address Section */}
          <div className="text-center">
            <div className="text-center">
              <p className="text-sm md:text-[36px] lg:text-[38px] italic font-script">
                Address :
              </p>
              <p className="text-[16px] md:text-[26px]">
                49, Ved Industrial Park-2
              </p>
              <p className="text-[16px] md:text-[26px]">Bhuvaladi Gam Road,</p>

              <p className="text-[16px] md:text-[26px]">
                Kathwada, Ahmedabad, Gujarat-382430
              </p>
            </div>
            <hr className="my-4 mx-12 px-3 w-2/3" />
            <p className="mt-4 text-[24px] md:text-sm">
              Call Us:
              <span className="text-[16px] md:text-[26px]">+91 9265067663</span>
            </p>
            <p className="text-[24px] md:text-sm">
              Email :{" "}
              <span className="text-[16px] md:text-[26px]">
                info@fuelflex.in
              </span>{" "}
            </p>
          </div>
          {/* Shop Links */}
          <div>
            <p className="text-sm md:text-[38px] lg:text-[40px] font-script">
              Shop
            </p>
            <Link
              to="/contact"
              className="block text-[16px] md:text-[26px] hover:underline"
            >
              Contact Us
            </Link>
            <Link
              to="/aboutus"
              className="block text-[16px] md:text-[26px] hover:underline"
            >
              Our Story
            </Link>
            <Link
              to="/blog"
              className="block text-[16px] md:text-[26px] hover:underline"
            >
              Blog
            </Link>
          </div>
          {/* policy Links and Social Media */}
          <div>
            <p className="text-sm md:text-[38px] lg:text-[40px] font-script">
              policy
            </p>
            <Link
              to={"/terms"}
              className="block text-16 md:text-[24px] hover:underline"
            >
              Terms & Condition
            </Link>
            <Link
              to={"/terms&Condition"}
              className="block text-16 md:text-[24px] hover:underline"
            >
              Shipping Policy
            </Link>
            {/* Social Media */}
            <div className="items-center justify-center flex flex-col p-3">
              <p className="text-sm md:text-md lg:text-md font-swash mt-4">
                Connect and Be Part of Our Journey
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href="https://www.instagram.com/artvelly_craftvelly/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram
                    size={38}
                    className=" p-1 hover:text-[#E4405F] hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook
                    size={38}
                    className="p-1 hover:text-[#1877F2] hover:scale-110 transition-transform"
                  />
                </a>
                <a href="https://youtube.com">
                  <Youtube
                    size={38}
                    className=" p-1 hover:scale-110 hover:text-[#FF0000] transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* CopyRights */}
        <div className="text-center text-white text-12 md:text-14">
          <p>copyrights@2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
