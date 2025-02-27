import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <Cloud className="h-8 w-8 text-primary" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-primary to-pink-500 text-transparent bg-clip-text">
                Tyledeclouds
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link href="/services">
              <Button variant="ghost">Services</Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost">Contact</Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost">About Us</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <Button variant="ghost" className="w-full text-left">
                Home
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="ghost" className="w-full text-left">
                Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" className="w-full text-left">
                Contact
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" className="w-full text-left">
                About Us
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="w-full">Sign Up</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
