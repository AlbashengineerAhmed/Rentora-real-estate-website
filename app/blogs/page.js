import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  User2,
  Tag,
  Search,
  Filter,
  BookmarkPlus,
  Share2,
  Eye,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredPosts = [
  {
    title: "The Future of Property Management",
    excerpt:
      "Discover how technology is reshaping the real estate industry and what it means for property owners and managers in 2025",
    author: {
      name: "John Smith",
      role: "Property Tech Analyst",
      avatar: "/assets/team1.jpg",
    },
    date: "April 15, 2025",
    image: "/assets/ab2.jpg",
    category: "Innovation",
    readTime: "5 min read",
    views: 1240,
    comments: 28,
  },
  {
    title: "Maximizing Your Property Value",
    excerpt:
      "Expert tips and strategies for increasing your property's market value through smart improvements and market positioning",
    author: {
      name: "Sarah Johnson",
      role: "Real Estate Consultant",
      avatar: "/assets/team2.jpg",
    },
    date: "April 12, 2025",
    image: "/assets/ab3.jpg",
    category: "Investment",
    readTime: "7 min read",
    views: 980,
    comments: 15,
  },
];

const posts = [
  {
    title: "Understanding Property Market Trends",
    excerpt:
      "Stay ahead of the curve with our comprehensive market analysis and predictions for the coming year",
    author: {
      name: "Michael Chen",
      role: "Market Analyst",
      avatar: "/assets/team3.jpg",
    },
    date: "April 10, 2025",
    image: "/assets/ab4.png",
    category: "Market Analysis",
    readTime: "6 min read",
    views: 856,
    comments: 12,
  },
  {
    title: "Essential Property Management Tips",
    excerpt:
      "Best practices and proven strategies for successful property management in today's competitive market",
    author: {
      name: "Emma Wilson",
      role: "Property Manager",
      avatar: "/assets/team1.jpg",
    },
    date: "April 8, 2025",
    image: "/assets/category1.jpg",
    category: "Property Management",
    readTime: "4 min read",
    views: 675,
    comments: 9,
  },
  {
    title: "Real Estate Investment Strategies",
    excerpt:
      "Expert insights on building and maintaining a successful property portfolio for long-term growth",
    author: {
      name: "David Brown",
      role: "Investment Advisor",
      avatar: "/assets/team2.jpg",
    },
    date: "April 5, 2025",
    image: "/assets/category2.jpg",
    category: "Investment",
    readTime: "8 min read",
    views: 1120,
    comments: 23,
  },
  {
    title: "Sustainable Property Development",
    excerpt:
      "Exploring green initiatives and eco-friendly approaches in modern real estate development",
    author: {
      name: "Lisa Anderson",
      role: "Sustainability Expert",
      avatar: "/assets/team3.jpg",
    },
    date: "April 3, 2025",
    image: "/assets/category3.jpg",
    category: "Development",
    readTime: "5 min read",
    views: 742,
    comments: 16,
  },
];

const categories = [
  { name: "Investment", count: 15, icon: "💰" },
  { name: "Property Management", count: 12, icon: "🏢" },
  { name: "Market Analysis", count: 8, icon: "📊" },
  { name: "Home Improvement", count: 10, icon: "🔨" },
  { name: "Real Estate Tips", count: 14, icon: "💡" },
];

const popularTags = [
  "Real Estate",
  "Investment",
  "Property Management",
  "Market Trends",
  "Home Improvement",
  "Sustainability",
  "Technology",
  "Interior Design",
];

export default function Blogs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Parallax */}
      <div className="relative h-[500px] bg-[url('/assets/main.jpg')] bg-fixed bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 backdrop-blur-[2px]">
          <div className="container mx-auto h-full flex flex-col items-center justify-center text-white px-4">
            <h1
              className="text-5xl md:text-7xl font-bold text-center mb-6 tracking-tight"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Industry Insights
            </h1>
            <p
              className="text-xl md:text-2xl text-center max-w-3xl mx-auto text-gray-200 mb-12"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Stay informed with the latest news and trends in real estate
            </p>

            {/* Search Bar */}
            <div
              className="w-full max-w-2xl mx-auto flex gap-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <Button
                variant="outline"
                className="border-2 border-white/20 text-primary hover:bg-white/10 hover:text-white rounded-xl px-6"
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="container mx-auto py-24 px-4">
        <h2
          className="text-4xl font-bold mb-4"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          Featured Articles
        </h2>
        <p
          className="text-gray-600 mb-12 max-w-2xl"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          Discover our most impactful and informative content
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <div
              key={index}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={100 * index}
            >
              <div className="relative overflow-hidden h-[400px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60" />
                <div className="absolute top-6 left-6 flex gap-3">
                  <span className="bg-primary/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">
                    {post.readTime}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium">{post.author.name}</div>
                      <div className="text-sm text-gray-500">
                        {post.author.role}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-gray-500">
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      {post.views}
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      {post.comments}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-500 hover:text-primary"
                    >
                      <BookmarkPlus className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-500 hover:text-primary"
                    >
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50/50 py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Posts Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-[1.5rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={100 * index}
                  >
                    <div className="relative overflow-hidden h-56">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-primary/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-white hover:text-primary bg-black/20 backdrop-blur-md rounded-full"
                        >
                          <BookmarkPlus className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-white hover:text-primary bg-black/20 backdrop-blur-md rounded-full"
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                          <div>
                            <div className="text-sm font-medium">
                              {post.author.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {post.date}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-gray-500 text-sm">
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {post.views}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            {post.comments}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 py-6"
                >
                  Load More Articles
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <div
                className="bg-white rounded-[1.5rem] shadow-md p-8"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <h3 className="text-xl font-bold mb-6">Categories</h3>
                <div className="space-y-4">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between group cursor-pointer p-3 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                      data-aos="fade-left"
                      data-aos-duration="600"
                      data-aos-delay={50 * index}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{category.icon}</span>
                        <span className="group-hover:text-primary transition-colors duration-300">
                          {category.name}
                        </span>
                      </div>
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div
                className="bg-white rounded-[1.5rem] shadow-md p-8"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <h3 className="text-xl font-bold mb-6">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 hover:bg-primary/10 hover:text-primary px-4 py-2 rounded-full text-sm cursor-pointer transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div
                className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-[1.5rem] p-8"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                <p className="text-gray-600 mb-6">
                  Get the latest insights and trends delivered to your inbox
                </p>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary transition-colors"
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-6 flex items-center justify-center gap-2 group">
                    Subscribe Now
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  By subscribing, you agree to our Privacy Policy and consent to
                  receive updates from our company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
