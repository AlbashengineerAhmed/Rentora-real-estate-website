"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { MapPinHouse, UserRoundSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20);
        setScrollProgress(
          (window.scrollY /
            (document.documentElement.scrollHeight - window.innerHeight)) *
            100
        );
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const isActive = (path) => pathname === path;

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Facilities", href: "/facilities" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="relative group">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold relative">
              <span
                className={`transition-colors duration-300 ${
                  scrolled ? "text-primary" : "text-white"
                }`}
              >
                {scrolled ? (
                  <Image
                    src="/assets/logo.png"
                    alt="Rentora Logo"
                    width={180}
                    height={40}
                    className="w-auto h-10"
                  />
                ) : (
                  "RENTORA"
                )}
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`relative group text-base lg:text-lg ${
                  scrolled ? "text-gray-700" : "text-white"
                } ${isActive(item.href) ? "font-semibold" : "font-medium"}`}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
                  {item.name}
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transform origin-left transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              variant="ghost"
              size="sm"
              className={`hidden sm:inline-flex group text-base ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              <span className="relative">
                Sign In
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </span>
            </Button>
            <Button
              size="sm"
              className="bg-primary text-white hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2.5"
            >
              <span className="flex items-center gap-2">
                Get Started
                <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div
                className={`w-6 h-0.5 transition-all duration-300 ${
                  scrolled ? "bg-gray-700" : "bg-white"
                } ${
                  mobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1"
                }`}
              />
              <div
                className={`absolute w-6 h-0.5 transition-all duration-300 ${
                  scrolled ? "bg-gray-700" : "bg-white"
                } ${mobileMenuOpen ? "-rotate-45" : "translate-y-1"}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Side Navigation */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 bottom-0 right-0 w-[280px] bg-white shadow-2xl md:hidden transform transition-transform duration-300 ease-in-out z-50 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-lvh bg-white/95 backdrop-blur-sm shadow-lg rounded-l-2xl">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="/" className="text-xl font-bold text-primary">
              RENTORA
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <XMarkIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 py-6">
            {navigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center px-6 py-3 text-lg font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-primary bg-primary/5"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t space-y-3">
            <Button
              variant="ghost"
              className="w-full justify-center text-gray-700 hover:text-primary"
            >
              Sign In
            </Button>
            <Button className="w-full justify-center bg-primary text-white hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
};

export default Header;
