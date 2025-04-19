import {
  ArrowRight,
  DollarSignIcon,
  Handshake,
  HomeIcon,
  Briefcase,
  Shield,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const features = [
  {
    icon: DollarSignIcon,
    title: "Smart Pricing Alerts",
    description:
      "Get instant notifications about price changes and new listings that match your criteria",
  },
  {
    icon: Handshake,
    title: "Verified Properties",
    description:
      "All listings are verified to ensure authenticity and trust in your search",
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description:
      "Protected payment systems and secure document handling for peace of mind",
  },
  {
    icon: Briefcase,
    title: "Professional Service",
    description: "Expert support team available to help you through every step",
  },
];

const Features = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-20">
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
                src="/assets/next-door3.png"
                alt="Feature showcase"
                width={600}
                height={800}
                className="rounded-t-full h-[600px] px-4 lg:px-10 object-cover"
              />

              {/* Floating Cards */}
              <div
                className="absolute w-[220px] right-4 lg:right-0 top-20"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <div className="w-full bg-gradient-to-r from-primary to-[#0143f8] rounded-2xl p-3 border-4 border-white shadow-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                  <div className="px-4 py-4 text-center">
                    <div className="bg-white/20 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      <HomeIcon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl text-white font-bold mb-1">
                      Built for Renters
                    </h2>
                    <p className="text-sm text-white/90">
                      Smart features, better results
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Floating Card */}
              <div
                className="absolute w-[200px] bottom-0 left-4 lg:left-0 lg:bottom-32"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="w-full bg-white rounded-2xl p-3 border-4 border-primary/20 shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="px-3 py-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-primary/10 rounded-full p-2">
                        <DollarSignIcon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-gray-800">
                        Best Prices
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>Updated daily</span>
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div
                className="absolute w-[180px] right-2 lg:-right-10 bottom-40"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <div className="w-full bg-gradient-to-br from-white to-gray-50 rounded-2xl p-3 border border-gray-100 shadow-lg transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary">5000+</h3>
                    <p className="text-xs text-gray-600 mt-1">
                      Happy Customers
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
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                At Rentora, we provide a{" "}
                <span className="text-primary">complete rental solution</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                From intelligent search filters that help you narrow down
                exactly what you want, to verified properties that you can
                trust, we've built a platform designed around your needs. Our
                clean and responsive interface makes browsing easy on any
                device, while real-time updates and landlord messaging keep you
                in control.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
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

export default Features;
