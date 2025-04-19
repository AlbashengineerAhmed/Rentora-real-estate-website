import { Button } from "@/components/ui/button";
import {
  Home,
  Key,
  Workflow,
  Briefcase,
  ShieldCheck,
  Clock,
  LineChart,
  Phone,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Home,
    title: "Property Management",
    description:
      "Professional management of residential and commercial properties",
  },
  {
    icon: Key,
    title: "Leasing Services",
    description: "Comprehensive tenant placement and lease management",
  },
  {
    icon: Workflow,
    title: "Maintenance",
    description: "Regular upkeep and emergency maintenance services",
  },
  {
    icon: Briefcase,
    title: "Investment Services",
    description: "Strategic property investment consultation and management",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Rigorous quality control standards",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock support services",
  },
  {
    icon: LineChart,
    title: "Performance Tracking",
    description: "Real-time property performance monitoring",
  },
  {
    icon: Phone,
    title: "Quick Response",
    description:
      "Rapid response times for maintenance and emergency situations",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-[url('/assets/services.webp')] bg-fixed bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80">
          <div className="container mx-auto h-full flex flex-col items-center justify-center text-white px-4">
            <h1
              className="text-5xl md:text-7xl font-bold text-center mb-8 tracking-tight"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Professional Property Services
            </h1>
            <p
              className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-12 text-gray-200 leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Comprehensive real estate solutions tailored to meet your property
              management needs
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="container mx-auto py-32 px-4">
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Core Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We offer a comprehensive range of property management services
            designed to maximize your investment's potential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-[1.5rem] p-8 shadow-lg hover:shadow-xl transition-all duration-1000 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={100 * index}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section with Image */}
      <div className="bg-gray-900 text-white py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <Image
                src="/assets/services-img.jpg"
                alt="Services Features"
                fill
                className="object-cover hover:scale-110 sm:h-[200px] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold mb-12"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                Why Choose Our Services?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group"
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-delay={100 * index}
                  >
                    <div className="bg-primary/20 p-4 rounded-2xl h-fit mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto py-32 px-4">
        <div
          className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-[2rem] p-16 text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-600 leading-relaxed">
            Contact us today to learn more about how our services can help you
            maximize your property's potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              View Service Details
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
