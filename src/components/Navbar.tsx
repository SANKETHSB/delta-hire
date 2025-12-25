"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiSearch, FiSun, FiMoon } from "react-icons/fi";
import { FaBriefcase, FaUser } from "react-icons/fa";
import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500"
          >
            <FaBriefcase className="text-blue-600" />
            Delta Hire
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#"
              className="px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-cyan-400 transition-all font-medium"
            >
              For Clients
            </Link>
            <Link
              href="/find-work"
              className="px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-cyan-400 transition-all font-medium"
            >
              For Freelancers
            </Link>
            <Link
              href="#"
              className="px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-cyan-400 transition-all font-medium"
            >
              How it Works
            </Link>
            <Link
              href="#"
              className="px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-cyan-400 transition-all font-medium"
            >
              Blog
            </Link>
          </div>

          {/* Search & Auth - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full border border-transparent focus-within:border-blue-500 transition-all">
              <FiSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search skills..."
                className="bg-transparent ml-2 outline-none text-sm w-40 text-gray-700 dark:text-gray-200 placeholder-gray-500"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 text-blue-600 dark:text-cyan-400 font-semibold hover:text-blue-700 dark:hover:text-cyan-300 transition"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-linear-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:brightness-110"
            >
              Sign Up
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <Link
              href="#"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              For Clients
            </Link>
            <Link
              href="#"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              For Freelancers
            </Link>
            <Link
              href="#"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              How it Works
            </Link>
            <Link
              href="#"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Blog
            </Link>
            <div className="flex items-center justify-between py-2 px-2">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Theme
              </span>
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400"
              >
                {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 px-4 py-2 text-blue-600 font-semibold border border-blue-600 rounded-lg">
                Login
              </button>
              <button className="flex-1 px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
