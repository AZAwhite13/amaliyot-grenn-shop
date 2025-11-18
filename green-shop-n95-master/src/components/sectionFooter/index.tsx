import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiPaypal, SiVisa, SiMastercard, SiAmericanexpress } from "react-icons/si";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

const SectionFooter: React.FC = () => {
  const services = [
    {
      title: "Garden Care",
      description:
        "We are an online plant shop offering a wide range of cheap and trendy plants.",
      image: "https://green-shop-otabek.vercel.app/assets/1-Ctm6W3Jq.png",
    },
    {
      title: "Plant Renovation",
      description:
        "We are an online plant shop offering a wide range of cheap and trendy plants.",
      image: "https://green-shop-otabek.vercel.app/assets/2-BF1Oo3xK.png",
    },
    {
      title: "Watering Graden",
      description:
        "We are an online plant shop offering a wide range of cheap and trendy plants.",
      image: "https://green-shop-otabek.vercel.app/assets/3-Bi-spicH.png",
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
     
    <div className="flex items-center justify-baseline ">
          <section className="py-14 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {services.map((service, index) => (
            <div key={index} className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-5">
              Would you like to join newsletters?
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <input
                type="email"
                placeholder="enter your email address..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-800 focus:outline-none focus:border-green-600"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-md transition">
                Join
              </button>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-lg">
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our
              (green)house to yours!
            </p>
          </div>
        </div>
      </section>
    </div>

     
      <div className="bg-green-50 py-6 border-t border-b border-green-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-700">
          <div className="flex items-center gap-2">
              <img
              src="https://green-shop-otabek.vercel.app/assets/logo-nyVMFuKc.svg"
              alt=""
            />
           
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 text-base">
            <div className="flex items-center gap-2">
              <FiMapPin color="#15803d" />
              <span>70 West Buckingham Ave. Farmingdale, NY 11735</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail color="#15803d" />
              <span>contact@greenshop.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone color="#15803d"/>
              <span>+88 01911 717 490</span>
            </div>
          </div>
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
       
        <div>
          <h4 className="text-lg font-semibold mb-5">My Account</h4>
          <ul className="space-y-3 text-gray-600">
            <li>My Account</li>
            <li>Address</li>
            <li>Wishlist</li>
          </ul>
        </div>

       
        <div>
          <h4 className="text-lg font-semibold mb-5">Categories</h4>
          <ul className="space-y-3 text-gray-600">
            <li>House Plants</li>
            <li>Potter Plants</li>
            <li>Seeds</li>
            <li>Small Plants</li>
            <li>Accessories</li>
          </ul>
        </div>

       
        <div>
          <h4 className="text-lg font-semibold mb-5">Social Media</h4>
          <div className="flex space-x-3 mb-6">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 border border-green-200 bg-white rounded-md flex items-center justify-center hover:bg-green-50 transition"
                >
                  <Icon color="#15803d" />
                </div>
              )
            )}
          </div>
          <h5 className="text-base font-medium mb-3">We accept</h5>
          <div className="flex space-x-4 text-2xl text-gray-600">
            <SiPaypal color="#15803d" />
            <SiVisa color="#15803d" />
            <SiMastercard  color="#15803d"/>
            <SiAmericanexpress color="#15803d"/>
          </div>
        </div>
      </div>

    
    </footer>
  );
};

export default SectionFooter;
