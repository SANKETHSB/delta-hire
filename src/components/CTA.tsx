"use client";

import { motion, Variants } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import {
  FaRocket,
  FaLaptopCode,
  FaBriefcase,
  FaUserCheck,
} from "react-icons/fa";

export default function CTA() {
  const floatingIconVariants: Variants = {
    initial: { y: 0, opacity: 0.5 },
    animate: {
      y: [-10, 10, -10],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-cyan-600 dark:via-blue-600 dark:to-purple-600 rounded-[2.5rem] p-12 md:p-20 text-white text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-125 h-125 bg-white/5 rounded-full -mr-64 -mt-64 blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-125 h-125 bg-white/5 rounded-full -ml-64 -mb-64 blur-3xl"
          />

          {/* Floating Icons */}
          <motion.div
            variants={floatingIconVariants}
            initial="initial"
            animate="animate"
            className="absolute top-10 left-10 text-white/20 text-6xl hidden md:block"
          >
            <FaRocket />
          </motion.div>
          <motion.div
            variants={floatingIconVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 1 }}
            className="absolute bottom-10 right-10 text-white/20 text-6xl hidden md:block"
          >
            <FaLaptopCode />
          </motion.div>
          <motion.div
            variants={floatingIconVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5 }}
            className="absolute top-20 right-20 text-white/20 text-4xl hidden md:block"
          >
            <FaBriefcase />
          </motion.div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6 border border-white/30"
            >
              🚀 Join the Revolution
            </motion.span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Ready to Transform Your <br className="hidden md:block" />
              Professional Journey?
            </h2>
            <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of professionals earning up to 10x more by working
              on projects they love. Your next big opportunity is just a click
              away.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(255, 255, 255, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg transition-all duration-300 group"
              >
                Start Earning Now
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Explore Projects
              </motion.button>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-8 text-sm font-medium text-blue-100">
              <div className="flex items-center gap-2">
                <FaUserCheck className="text-lg" /> No credit card required
              </div>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-blue-300/50" />
              <div className="flex items-center gap-2">
                <FaRocket className="text-lg" /> Get started in 2 minutes
              </div>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-blue-300/50" />
              <div className="flex items-center gap-2">
                <FaBriefcase className="text-lg" /> 10k+ New projects weekly
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
