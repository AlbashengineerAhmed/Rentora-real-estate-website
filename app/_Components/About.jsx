import React from "react";
import Image from "next/image";
import { ArrowRight, HomeIcon, MapPin, DollarSign } from "lucide-react";

const propertyCards = [
  {
    title: "Find Your Home",
    image: "/assets/ab4.png",
    icon: HomeIcon,
    action: "Search Now",
  },
  {
    title: "Premium Locations",
    image: "/assets/ab2.jpg",
    icon: MapPin,
    action: "Explore Areas",
  },
  {
    title: "Best Deals",
    image: "/assets/ab3.jpg",
    icon: DollarSign,
    action: "View Prices",
  },
];

const About = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div
            className="relative order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="relative max-w-[500px] mx-auto">
              <Image
                src="/assets/next-door1.png"
                alt="Modern home interior"
                width={600}
                height={800}
                className="rounded-t-full px-4 lg:px-10 object-cover"
              />

              {/* Floating Card */}
              <div
                className="absolute right-4 w-[170px] lg:right-0 top-10"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <div className="w-full bg-gradient-to-r from-primary to-[#0143f8] rounded-t-full p-2 border-8 border-white shadow-xl">
                  <div className="px-6 pt-8 pb-4 text-center">
                    <h2 className="text-lg text-white font-semibold">
                      Find Home Faster
                    </h2>
                    <p className="text-sm text-white/90 mt-1">
                      Your dream rental is just a click away
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className="order-1 lg:order-2 space-y-8"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Sell for more than the home{" "}
                <span className="text-primary">Next Door</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                At Rentora, we're on a mission to simplify the rental
                experience. We connect people with quality homes through smart
                search tools, verified listings, and a seamless browsing
                experience. Whether you're hunting for your first apartment, a
                family-sized home, or a short-term rental, we make it easy to
                find the right fit without the hassle.
              </p>
            </div>

            {/* Property Cards */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {propertyCards.map((card, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg"
                  data-aos="zoom-in"
                  data-aos-delay={500 + index * 100}
                >
                  {/* Card Image */}
                  <div className="relative h-48">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 text-white relative">
                    {/* Icon Circle */}
                    <div className="absolute -top-8 left-6">
                      <div className="bg-white rounded-full p-2 border-4 border-primary shadow-xl">
                        <div className="bg-primary rounded-full p-2">
                          <card.icon size={24} className="text-white" />
                        </div>
                      </div>
                    </div>

                    <h2 className="text-lg font-bold mt-4 mb-4">
                      {card.title}
                    </h2>
                    <button className="flex cursor-pointer items-center gap-2 text-sm bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-300">
                      {card.action}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
