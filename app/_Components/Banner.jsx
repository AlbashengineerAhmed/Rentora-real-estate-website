import {
  DollarSignIcon,
  HomeIcon,
  Building2,
  MapPin,
  Star,
  Award,
  Trophy,
  Handshake,
  CarIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('/assets/main.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-8 justify-center text-white order-2 lg:order-1">
            {/* Amazing Badge */}
            <div className="flex gap-2 items-center" data-aos="fade-up">
              <div className="bg-primary/20 backdrop-blur rounded-full p-1">
                <Star className="text-primary w-5 h-5 animate-spin-slow" />
              </div>
              <span className="text-primary font-semibold tracking-wide">
                Premium Real Estate
              </span>
            </div>

            {/* Main Title */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Discover Your <br />
              <span className="text-primary">Dream Home</span> Today
            </h1>

            <p
              className="text-lg text-gray-300 max-w-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Find your perfect sanctuary with our curated collection of luxury
              properties. Expert guidance for your journey home.
            </p>

            {/* Amazing Stats Section */}
            <div
              className="grid grid-cols-2 gap-4 max-w-xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Award className="text-primary mb-2 w-8 h-8" />
                <h3 className="text-2xl font-bold text-white">15+ Years</h3>
                <p className="text-gray-400">Market Excellence</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Trophy className="text-primary mb-2 w-8 h-8" />
                <h3 className="text-2xl font-bold text-white">#1 Rated</h3>
                <p className="text-gray-400">Real Estate Agency</p>
              </div>
            </div>

            {/* Search Form */}
            <div
              className="w-full max-w-2xl bg-white/5 backdrop-blur-lg rounded-2xl p-3 border border-white/10"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <form className="flex flex-wrap md:flex-nowrap gap-3">
                <div className="flex-1 min-w-[200px]">
                  <div className="relative">
                    <MapPin
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-primary"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full bg-white/10 text-white pl-10 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-primary border-none placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-[200px]">
                  <div className="relative">
                    <Building2
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-primary"
                      size={20}
                    />
                    <select className="w-full bg-gray-900 text-white pl-10 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-primary border-none appearance-none">
                      <option value="">Property Type</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="villa">Villa</option>
                    </select>
                  </div>
                </div>
                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 min-w-[120px] hover:scale-105">
                  Search
                </button>
              </form>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative order-1 lg:order-2" data-aos="fade-left">
            {/* Super Sale Banner */}
            <div
              className="w-[170px] absolute top-20 left-4 lg:left-0 z-10"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              <div className="w-full font-bold p-2 flex flex-col items-center pt-8 bg-gradient-to-l from-primary to-[#0143f8] rounded-t-full border-8 border-white/90 shadow-xl">
                <h2 className="text-xl text-white font-semibold">Super Sale</h2>
                <p className="text-[13px] text-white text-center">
                  Super Sale Limited Time Offer
                </p>
              </div>
            </div>

            {/* Feature Cards */}
            <div
              className="hidden lg:block absolute z-20 right-0 top-[50%] space-y-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              {[
                { icon: Handshake, text: "Paid Partner Ship" },
                { icon: HomeIcon, text: "Best Tour It" },
                { icon: DollarSignIcon, text: "Get Down Payment" },
                { icon: CarIcon, text: "Largest Rental" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center w-48 gap-2 p-3 bg-white rounded-md transform hover:scale-105 transition-transform duration-300"
                >
                  <item.icon
                    size={35}
                    className="bg-primary p-2 rounded-lg text-white"
                  />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative max-w-[800px] mx-auto">
              <Image
                src="/assets/main-home1.png"
                alt="home"
                width={800}
                height={600}
                className="object-cover rounded-t-full px-4 lg:px-10"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Banner;
