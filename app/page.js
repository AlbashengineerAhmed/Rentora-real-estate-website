import Banner from "./_Components/Banner";
import About from "./_Components/About";
import Categories from "./_Components/Categories";
import Features from "./_Components/Features";
import Services from "./_Components/Services";
import AOSInit from "./_Components/AOSInit";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <AOSInit />
      {/* Hero Banner Section */}
      <section className="relative">
        <div className="bg-gradient-to-b from-[#373740] to-[#12121f]">
          <Banner />
        </div>
        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white/5 pointer-events-none" />
      </section>

      {/* Main Content Sections */}
      <div className="space-y-24 py-16">
        {/* About Section with Fade Effect */}
        <section className="relative" data-aos="fade-up">
          <div className="container mx-auto px-4">
            <About />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent -z-10" />
        </section>

        {/* Categories Section with Slide Effect */}
        <section className="relative overflow-hidden" data-aos="fade-up">
          <div className="container mx-auto px-4">
            <Categories />
          </div>
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 -z-10" />
        </section>

        {/* Features Section with Scale Effect */}
        <section className="relative py-20" data-aos="fade-up">
          <div className="container mx-auto px-4">
            <Features />
          </div>
          {/* Decorative Shapes */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        </section>

        {/* Services Section with Parallax Effect */}
        <section className="relative" data-aos="fade-up">
          <div className="container mx-auto px-4">
            <Services />
          </div>
          {/* Decorative Element */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white -z-10" />
        </section>
      </div>
    </main>
  );
}
