/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import "../styles/button.css";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add a small delay for smoother transition
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="relative">
      <div className="bg-white/10 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex justify-between items-center lg:h-16">
            {/* Logo */}
            <Link href={"/"} className="flex items-center space-x-2">
              <img src="/logo/logo.png" alt="" className="w-8 h-8" />
              <span className="text-xl lg:text-2xl font-bold text-white">
                $ADAM
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-gray-900 font-medium transition-colors cursor-pointer"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-gray-900 font-medium transition-colors cursor-pointer"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection("adamnomic")}
                className="text-white hover:text-gray-900 font-medium transition-colors cursor-pointer"
              >
                ADAMNOMIC
              </button>
              <button
                onClick={() => scrollToSection("roadmap")}
                className="text-white hover:text-gray-900 font-medium transition-colors cursor-pointer"
              >
                ROADMAP
              </button>
            </nav>

            {/* Connect Button */}
            <button className="uiverse">
              <div className="wrapper">
                <span>CONNECT</span>
                <div className="circle circle-12"></div>
                <div className="circle circle-11"></div>
                <div className="circle circle-10"></div>
                <div className="circle circle-9"></div>
                <div className="circle circle-8"></div>
                <div className="circle circle-7"></div>
                <div className="circle circle-6"></div>
                <div className="circle circle-5"></div>
                <div className="circle circle-4"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-1"></div>
              </div>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-white hover:text-gray-500 font-medium transition-colors text-left"
                >
                  HOME
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white hover:text-gray-500 font-medium transition-colors text-left"
                >
                  ABOUT
                </button>
                <button
                  onClick={() => scrollToSection("adamnomic")}
                  className="text-white hover:text-gray-500 font-medium transition-colors text-left"
                >
                  ADAMNOMIC
                </button>
                <button
                  onClick={() => scrollToSection("roadmap")}
                  className="text-white hover:text-gray-500 font-medium transition-colors text-left"
                >
                  ROADMAP
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
