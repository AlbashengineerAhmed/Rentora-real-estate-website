import Image from "next/image";
import {
  Users2,
  Target,
  TrendingUp,
  Award,
  Gem,
  Building2,
  UserRoundSearch,
  ArrowRight,
  CheckCircle2,
  Globe2,
  Trophy,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const timeline = [
  {
    year: "2010",
    title: "Company Founded",
    description: "Started with a vision to revolutionize property management",
  },
  {
    year: "2015",
    title: "Market Expansion",
    description: "Extended services to multiple cities across the region",
  },
  {
    year: "2018",
    title: "Digital Transformation",
    description: "Launched innovative property management platform",
  },
  {
    year: "2023",
    title: "Industry Leader",
    description: "Recognized as the top property management company",
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "Industry Awards",
    value: "25+",
    description: "Recognition for excellence",
  },
  {
    icon: Building2,
    title: "Properties Managed",
    value: "500+",
    description: "Across multiple cities",
  },
  {
    icon: Users2,
    title: "Happy Clients",
    value: "1000+",
    description: "Satisfied customers",
  },
  {
    icon: Globe2,
    title: "Cities Covered",
    value: "15+",
    description: "Growing presence",
  },
];

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To provide exceptional property management services that exceed client expectations and create lasting value.",
  },
  {
    icon: Lightbulb,
    title: "Vision",
    description:
      "To be the most trusted and innovative property management company, setting industry standards for excellence.",
  },
  {
    icon: Gem,
    title: "Values",
    description:
      "Integrity, professionalism, innovation, and commitment to client success guide everything we do.",
  },
];

export default function AboutUsV2() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <div className="relative h-[80vh] bg-[url('/assets/aboutbackground.jpg')] bg-fixed bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-[2px]">
          <div className="container mx-auto h-full flex flex-col items-center justify-center text-white px-4">
            <span
              className="text-primary font-semibold mb-6 tracking-wider"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              ABOUT RENTORA
            </span>
            <h1
              className="text-5xl md:text-7xl font-bold text-center mb-8 tracking-tight"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Our Journey of Excellence
            </h1>
            <p
              className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-12 text-gray-200 leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              A legacy of excellence in property management, built on trust and
              innovation since 2010
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Our Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Company Overview Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className="relative"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden relative">
                <Image
                  src="/assets/ab1.png"
                  alt="About Rentora"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              {/* Floating Stats Card */}
              <div
                className="absolute -bottom-8 -right-8 bg-white rounded-[1.5rem] p-8 shadow-xl"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-bold text-primary">15+</span>
                  <span className="text-gray-600 mb-1">
                    Years of Excellence
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-primary rounded-full animate-progress" />
                </div>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000">
              <span className="text-primary font-semibold mb-4 block">
                WHO WE ARE
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Setting the Standard in{" "}
                <span className="text-primary">Property Management</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                At Rentora, we believe in transforming the property management
                landscape through innovation, dedication, and exceptional
                service. Our journey began in 2010 with a vision to
                revolutionize how properties are managed and maintained.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {[
                  "Expert Property Management",
                  "24/7 Customer Support",
                  "Innovative Solutions",
                  "Professional Team",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                    data-aos="fade-up"
                    data-aos-delay={100 * index}
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 flex items-center gap-2 hover:gap-4"
              >
                Learn More
                <ArrowRight className="h-5 w-5 transition-all duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="text-primary font-semibold mb-4 block"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              OUR FOUNDATION
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              What Drives Us
            </h2>
            <p
              className="text-gray-600 text-lg"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Our mission, vision, and values guide us in delivering exceptional
              service and building lasting relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-1000 cursor-pointer transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={100 * index}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="text-primary font-semibold mb-4 block"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              OUR JOURNEY
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              Milestones That Define Us
            </h2>
            <p
              className="text-gray-600 text-lg"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              A timeline of our growth and achievements over the years
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-duration="1000"
                >
                  <div className="flex-1 text-right">
                    <div
                      className={`bg-white rounded-[1.5rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      <div className="text-primary font-bold text-2xl mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full relative z-10">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-32 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="text-primary font-semibold mb-4 block"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              OUR ACHIEVEMENTS
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              Numbers That Speak
            </h2>
            <p
              className="text-gray-300 text-lg"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Our success is measured by the trust of our clients and the
              milestones we've achieved
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={100 * index}
              >
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <achievement.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold mb-2">
                  {achievement.value}
                </div>
                <div className="text-lg font-semibold mb-2">
                  {achievement.title}
                </div>
                <div className="text-gray-400">{achievement.description}</div>
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
                Ready to Experience the Difference?
              </h2>
              <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-600 leading-relaxed">
                Join the growing family of satisfied property owners and
                experience our exceptional service firsthand.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 group flex items-center gap-2 mx-auto hover:gap-4"
              >
                Get Started Today
                <ArrowRight className="h-5 w-5 transition-all duration-300" />
              </Button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />
          </div>
        </div>
      </section>
    </div>
  );
}
