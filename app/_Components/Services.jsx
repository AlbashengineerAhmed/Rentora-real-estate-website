import {
  ClipboardCheckIcon,
  CloudDownloadIcon,
  CreditCardIcon,
  HeadsetIcon,
  Send,
  Users2Icon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const servicesData = [
  {
    image: "/assets/services-img.jpg",
    visitors: "2K+ People Visited",
    buttonText: "Visit",
    features: [
      {
        icon: <Send size={25} className="text-primary" />,
        title: "Send Money",
        description: "Fast and Easy Transfers",
        bgColor: "bg-primary",
        textColor: "text-white",
      },
      {
        icon: <CreditCardIcon size={25} className="text-white" />,
        title: "Pay The Bill",
        description: "Secure Bill Payments",
        bgColor: "bg-white",
        textColor: "text-gray-700",
      },
    ],
  },
  {
    image: "/assets/services.webp",
    visitors: "2K+ People Visited",
    buttonText: "Visit",
    features: [
      {
        icon: <CloudDownloadIcon size={25} className="text-primary" />,
        title: "Request",
        description: "Request with Confidence",
        bgColor: "bg-primary",
        textColor: "text-white",
      },
      {
        icon: <Users2Icon size={25} className="text-white" />,
        title: "Contact",
        description: "Connect Anytime, Anywhere",
        bgColor: "bg-white",
        textColor: "text-gray-700",
      },
    ],
  },
  {
    image: "/assets/services-img.jpeg",
    visitors: "2K+ People Visited",
    buttonText: "Visit",
    features: [
      {
        icon: <ClipboardCheckIcon size={25} className="text-primary" />,
        title: "Agreement",
        description: "Smart Agreement Tools",
        bgColor: "bg-primary",
        textColor: "text-white",
      },
      {
        icon: <HeadsetIcon size={25} className="text-white" />,
        title: "Support",
        description: "24/7 Expert Support",
        bgColor: "bg-white",
        textColor: "text-gray-700",
      },
    ],
  },
];

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span className="text-primary font-semibold">Our Services</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Start Your Rental <span className="text-primary">Journey</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you're moving across town or across the country, we make the
            process seamless, secure, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt="service"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/30" />
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm flex justify-between items-center rounded-xl p-3 shadow-lg transform translate-y-0 group-hover:translate-y-2 transition-transform duration-300">
                      <div className="flex -space-x-2">
                        <Image
                          src="/assets/team1.jpg"
                          alt="icon1"
                          width={32}
                          height={32}
                          className="rounded-full border-2 border-white w-8 h-8 transform group-hover:rotate-12 transition-transform duration-300"
                        />
                        <Image
                          src="/assets/team2.jpg"
                          alt="icon2"
                          width={32}
                          height={32}
                          className="rounded-full border-2 border-white w-8 h-8 transform group-hover:-rotate-12 transition-transform duration-300"
                        />
                        <Image
                          src="/assets/team3.jpg"
                          alt="icon3"
                          width={32}
                          height={32}
                          className="rounded-full border-2 border-white w-8 h-8 transform group-hover:rotate-12 transition-transform duration-300"
                        />
                      </div>
                      <span className="text-sm text-gray-600 font-medium mx-2">
                        {service.visitors}
                      </span>
                      <button className="bg-primary hover:bg-primary/90 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105">
                        {service.buttonText}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`${feature.bgColor} group/card rounded-2xl p-4 transform hover:scale-105 transition-all duration-300`}
                      >
                        <div
                          className={`p-3 w-12 h-12 rounded-xl mb-3 flex items-center justify-center ${
                            feature.bgColor === "bg-primary"
                              ? "bg-white group-hover/card:rotate-12"
                              : "bg-primary group-hover/card:-rotate-12"
                          }`}
                        >
                          {feature.icon}
                        </div>
                        <h4
                          className={`${feature.textColor} text-lg font-bold mb-1 group-hover/card:translate-x-1 transition-transform duration-300`}
                        >
                          {feature.title}
                        </h4>
                        <p
                          className={`${
                            feature.bgColor === "bg-primary"
                              ? "text-white/80"
                              : "text-gray-600"
                          } text-sm group-hover/card:translate-x-1 transition-transform duration-300`}
                        >
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
