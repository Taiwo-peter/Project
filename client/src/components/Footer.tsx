import { Link } from "wouter";
import { Cloud } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <ul className="space-y-2">
              <li><Link href="/how-it-works">How it works</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/investment">Investment</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/support">Support</Link></li>
              <li><Link href="/destinations">Destinations</Link></li>
              <li><Link href="/sponsorships">Sponsorships</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Videos</h2>
            <ul className="space-y-2">
              <li><Link href="/submit-videos">Submit Videos</Link></li>
              <li><Link href="/ambassadors">Ambassadors</Link></li>
              <li><Link href="/agency">Agency</Link></li>
              <li><Link href="/influencer">Influencer</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Social Media</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Cloud className="h-6 w-6 text-primary" />
              <span className="ml-2 text-xl font-bold">Tyledeclouds</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Tyledeclouds. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
