import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  MessageCircle,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  MessageCircleCodeIcon,
  PhoneCallIcon,
} from "lucide-react";
import updates from "../../lib/updatesData";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#373740] to-[#12121f] overflow-hidden text-white px-6 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div data-aos="fade-right" data-aos-duration="800" className="group">
          <div className="text-2xl font-bold text-blue-500 mb-4 relative inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 group-hover:after:w-full">
            RENTORA
          </div>
          <p className="text-sm text-gray-300 leading-6 transition-colors duration-300 hover:text-gray-100">
            At Rentora, we're on a mission to simplify the rental experience. We
            connect people with quality homes through smart search tools,
            verified listings, and a seamless browsing experience. Whether
            you're hunting for your first apartment, a family-sized home, or a
            short-term rental, we make it easy to find the right fit without the
            hassle.
          </p>
        </div>

        {/* Links */}
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {["Home", "About Us", "Services", "Facilities"].map(
              (link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="relative inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gray-300 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact */}
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {["Facebook", "Instagram", "Support", "Twitter"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="relative inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gray-300 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Updates from static array */}
        <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="600">
          <div className="space-y-4">
            {updates.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 items-center group cursor-pointer transition-transform duration-300 hover:translate-x-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div>
                  <h4 className="text-sm font-semibold transition-colors duration-300 group-hover:text-blue-400">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="mt-10 border-t border-gray-700 pt-5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="800"
      >
        <p>© 2025 All Right Reserves Rentora.com</p>
        <div className="flex gap-5 mt-4 md:mt-0">
          <FacebookIcon className="w-5 h-5 transform hover:scale-125 hover:text-blue-500 cursor-pointer transition-all duration-300" />
          <TwitterIcon className="w-5 h-5 transform hover:scale-125 hover:text-blue-400 cursor-pointer transition-all duration-300" />
          <InstagramIcon className="w-5 h-5 transform hover:scale-125 hover:text-pink-500 cursor-pointer transition-all duration-300" />
          <MessageCircleCodeIcon className="w-5 h-5 transform hover:scale-125 hover:text-green-400 cursor-pointer transition-all duration-300" />
          <PhoneCallIcon className="w-5 h-5 transform hover:scale-125 hover:text-yellow-400 cursor-pointer transition-all duration-300" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
