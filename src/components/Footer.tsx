"use client";

import Link from "next/link";
import { FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { FiBriefcase, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
              <FiBriefcase className="text-blue-400" />
              Delta Hire
            </div>
            <p className="text-sm mb-4">
              DeltaHire's online platform connects students, freshers, and
              professionals to real-world projects and opportunities in the
              digital economy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* For Freelancers */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Freelancers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-blue-400 transition">
                  Find Work
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition">
                  Browse Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition">
                  Safety Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* For Clients */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Clients</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-blue-400 transition">
                  Find Talent
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition">
                  Post a Project
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FiMapPin /> Sarjapur Road, Bangalore
              </li>
              <li className="flex items-center gap-2">
                <FiPhone /> +91 9148729059
              </li>
              <li className="flex items-center gap-2">
                <FiMail /> business@deltahire.co.in
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <p className="text-sm">© 2025 Agile Vortex. All rights reserved.</p>
            <div className="flex justify-center gap-4 text-sm">
              <Link href="#" className="hover:text-blue-400 transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-blue-400 transition">
                Terms of Service
              </Link>
            </div>
            <p className="text-sm text-right">
              Built with ❤️ for the digital economy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
