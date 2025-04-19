import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Pool,
  Dumbbell,
  Kitchen,
  Wifi,
  Lock,
  Shield,
  Users2,
  Phone,
  Mail,
  ThumbsUp,
  Timer,
  CheckCircle2,
  Sparkles,
  PenTool,
  DumbbellIcon,
  Key,
  WifiIcon,
  LockIcon,
  ShieldAlert,
  Users2Icon,
  ThumbsUpIcon,
  TimerIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FacilitiesSearch from "../_Components/FacilitiesSearch";

const facilities = [
  {
    icon: PenTool,
    title: "Swimming Pool",
    description:
      "Olympic-sized swimming pool with dedicated lanes and relaxation area",
    features: [
      "Heated Pool",
      "Professional Lifeguards",
      "Separate Kids Pool",
      "Lounge Area",
    ],
    image: "/assets/swimgpool.jpg",
    availability: "6:00 AM - 10:00 PM",
    capacity: "50 people",
  },
  {
    icon: DumbbellIcon,
    title: "Modern Gym",
    description:
      "State-of-the-art fitness center with latest equipment and trainers",
    features: [
      "Modern Equipment",
      "Personal Trainers",
      "Group Classes",
      "Spa Services",
    ],
    image: "/assets/gym.jpg",
    availability: "24/7 Access",
    capacity: "30 people",
  },
  {
    icon: Key,
    title: "Gourmet Kitchen",
    description: "Fully equipped communal kitchen for residents and events",
    features: [
      "Modern Appliances",
      "Event Space",
      "Cooking Classes",
      "Catering Service",
    ],
    image: "/assets/Kitchen.jpg",
    availability: "7:00 AM - 11:00 PM",
    capacity: "20 people",
  },
];

const amenities = [
  {
    icon: WifiIcon,
    title: "High-Speed Internet",
    description: "Fiber-optic internet throughout the property",
  },
  {
    icon: LockIcon,
    title: "24/7 Security",
    description: "Advanced security systems and personnel",
  },
  {
    icon: ShieldAlert,
    title: "Controlled Access",
    description: "Secure entry system for all facilities",
  },
];

const stats = [
  {
    icon: Users2Icon,
    value: "1000+",
    label: "Active Members",
  },
  {
    icon: ThumbsUpIcon,
    value: "98%",
    label: "Satisfaction Rate",
  },
  {
    icon: TimerIcon,
    value: "24/7",
    label: "Access Available",
  },
];

export default function FacilitiesV2() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Parallax */}
      <div className="relative h-[80vh] bg-[url('/assets/facilities1.jpg')] bg-fixed bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 backdrop-blur-[2px]">
          <div className="container mx-auto h-full flex flex-col items-center justify-center text-white px-4">
            <span
              className="text-primary font-semibold mb-6 tracking-wider"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              OUR FACILITIES
            </span>
            <h1
              className="text-5xl md:text-7xl font-bold text-center mb-8 tracking-tight"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              World-Class Amenities
            </h1>
            <p
              className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-12 text-gray-200 leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Experience luxury living with our state-of-the-art facilities and
              premium amenities
            </p>

            {/* Search Box */}
            <div
              className="w-full max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <FacilitiesSearch />
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="text-primary font-semibold mb-4 block"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              PREMIUM FACILITIES
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              Explore Our Amenities
            </h2>
            <p
              className="text-gray-600 text-lg"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Discover our range of premium facilities designed for your comfort
              and convenience
            </p>
          </div>

          <div className="space-y-16">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="1000"
              >
                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="aspect-[4/3] rounded-[2rem] overflow-hidden relative group">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  {/* Floating Stats Card */}
                  <div
                    className="absolute -bottom-8 -right-8 bg-white rounded-[1.5rem] p-6 shadow-xl"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="flex items-center gap-3 text-sm">
                      <Timer className="h-5 w-5 text-primary" />
                      <span className="text-gray-600">
                        {facility.availability}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm mt-2">
                      <Users2 className="h-5 w-5 text-primary" />
                      <span className="text-gray-600">
                        Capacity: {facility.capacity}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <facility.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6">{facility.title}</h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {facility.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="group bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 flex items-center gap-2 hover:gap-4"
                  >
                    Book Now
                    <ArrowRight className="h-5 w-5 transition-all duration-300" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Amenities */}
      <section className="py-32 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="text-primary font-semibold mb-4 block"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              MORE FEATURES
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              Additional Amenities
            </h2>
            <p
              className="text-gray-600 text-lg"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Enjoy these complimentary services designed for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="group bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={100 * index}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <amenity.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={100 * index}
              >
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div
          className="container mx-auto px-4"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-[2rem] p-16 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Experience Our Facilities?
              </h2>
              <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-600 leading-relaxed">
                Contact us today to schedule a tour or learn more about our
                premium amenities.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group"
                >
                  <Phone className="h-5 w-5" />
                  Schedule a Tour
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group"
                >
                  <Mail className="h-5 w-5" />
                  Contact Us
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>

            {/* Decorative Elements */}
            <Sparkles className="absolute top-12 left-12 h-8 w-8 text-primary/20" />
            <Sparkles className="absolute bottom-12 right-12 h-8 w-8 text-primary/20" />
          </div>
        </div>
      </section>
    </div>
  );
}
