"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description:
        "Showcase your skills, experience, and portfolio. Add certifications to stand out from the crowd.",
      features: ["Complete profile", "Upload portfolio", "Add certifications"],
    },
    {
      number: "02",
      title: "Browse & Apply",
      description:
        "Discover projects that match your skills. Submit compelling proposals to win work from clients.",
      features: ["Browse projects", "Filter by skill", "Send proposals"],
    },
    {
      number: "03",
      title: "Deliver & Earn",
      description:
        "Complete your work, get paid securely through our escrow system, and build your reputation.",
      features: ["Secure payments", "Milestone tracking", "Build reputation"],
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500">
              It Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get started in minutes and begin your journey to success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -50 : idx === 2 ? 50 : 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative"
            >
              {/* Connection Line */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-1/2 w-full h-1 bg-linear-to-r from-blue-400 to-purple-400 dark:from-cyan-700 dark:to-blue-700 transform -translate-x-1/2"></div>
              )}

              <div className="relative bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-blue-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-cyan-500 transition shadow-lg dark:shadow-none">
                {/* Step Number */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-blue-600 text-white font-bold text-2xl mb-6 mx-auto shadow-lg">
                  {step.number}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                  {step.description}
                </p>

                <ul className="space-y-3">
                  {step.features.map((feature, fidx) => (
                    <li
                      key={fidx}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <FaCheckCircle className="text-blue-600 dark:text-cyan-400 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-cyan-600 dark:to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of professionals who have transformed their careers
            with Delta Hire
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(255, 255, 255, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-blue-600 dark:text-blue-700 rounded-lg font-semibold transition-all duration-300 inline-block"
          >
            Create Your Free Profile Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
