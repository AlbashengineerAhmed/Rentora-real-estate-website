import {
  ArrowBigRight,
  FacebookIcon,
  Handshake,
  InstagramIcon,
  MailIcon,
  Search,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const categories = [
  {
    id: 1,
    name: "Modern Bathroom",
    image: "/assets/category2.jpg",
  },
  {
    id: 2,
    name: "Luxury Kitchen",
    image: "/assets/category3.jpg",
  },
  {
    id: 3,
    name: "Spacious Living",
    image: "/assets/category5.jpg",
  },
  {
    id: 4,
    name: "Master Bedroom",
    image: "/assets/category6.jpg",
  },
  {
    id: 5,
    name: "Private Garden",
    image: "/assets/category33.jpg",
  },
  {
    id: 6,
    name: "Smart Home",
    image: "/assets/category55.jpg",
  },
];

const Categories = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Explore Our <span className="text-primary">Categories</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Find your perfect space from our carefully curated collection of
            premium properties
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Categories Grid */}
          <div
            className="order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {categories.map((category, index) => (
                  <div
                    key={category.id}
                    data-aos="zoom-in"
                    data-aos-delay={100 * (index + 1)}
                    className="group relative overflow-hidden rounded-2xl cursor-pointer"
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 flex flex-col items-center justify-end">
                        <h2 className="text-white font-semibold text-lg mb-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          {category.name}
                        </h2>
                        <span className="text-white/90 text-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-100">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <div className="mt-8" data-aos="fade-up" data-aos-delay="400">
              <form action="#" method="POST" className="relative">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter location, property name"
                    required
                    className="w-full border border-gray-200 bg-white text-gray-900 text-base md:text-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none placeholder:text-gray-500 rounded-lg pl-12 pr-36 py-4 shadow-sm"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Search className="text-gray-700" />
                  </div>
                </div>
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-md transition-colors duration-300 flex items-center gap-2"
                >
                  <span>Search</span>
                  <ArrowBigRight className="text-white" />
                </button>
              </form>
            </div>
          </div>

          {/* Image and Social Links */}
          <div
            className="relative order-1 lg:order-2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="relative max-w-[500px] mx-auto">
              <div className="relative">
                <Image
                  src="/assets/next-door2.png"
                  alt="Property showcase"
                  width={600}
                  height={800}
                  className="rounded-t-full px-4 lg:px-10 object-cover"
                />
                <div className="absolute inset-0 to-transparent rounded-t-full" />
              </div>

              {/* Social Links */}
              <div
                className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-3 p-4"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                {[
                  { icon: MailIcon, text: "Email", color: "hover:bg-blue-50" },
                  {
                    icon: FacebookIcon,
                    text: "Facebook",
                    color: "hover:bg-blue-50",
                  },
                  {
                    icon: TwitterIcon,
                    text: "Twitter",
                    color: "hover:bg-blue-50",
                  },
                  {
                    icon: InstagramIcon,
                    text: "Instagram",
                    color: "hover:bg-pink-50",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg ${item.color} transition-all duration-300 cursor-pointer group w-[52px] hover:w-auto`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon
                        size={28}
                        className="text-primary min-w-[28px] transition-all duration-300"
                      />
                      <span className="text-sm font-medium text-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                        {item.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Card */}
              <div
                className="absolute right-4 lg:right-0 bottom-32"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Handshake className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">1200+</h3>
                      <p className="text-sm text-gray-600">Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
