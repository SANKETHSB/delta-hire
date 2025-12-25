"use client";

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Full Stack Developer",
    company: "Tech Startup",
    image: "👨‍💻",
    text: "Delta Hire completely changed my freelancing career. Within 3 months, I went from struggling to find clients to having a waiting list!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer",
    company: "Design Studio",
    image: "👩‍🎨",
    text: "The platform is incredibly user-friendly and the support team is amazing. I love the secure payment system and milestone tracking.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Project Manager",
    company: "Enterprise Client",
    image: "👨‍💼",
    text: "Finding quality talent has never been easier. The verification process gives us confidence in every freelancer we hire.",
    rating: 5,
  },
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Success{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from our community of successful freelancers and satisfied
            clients
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border border-gray-100 dark:border-gray-700"
            >
              <FaQuoteLeft className="text-blue-400 dark:text-cyan-400 text-3xl mb-4" />

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" size={18} />
                ))}
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-blue-600 dark:text-cyan-400 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-linear-to-r from-blue-600 to-purple-600 dark:from-cyan-600 dark:to-blue-700 rounded-2xl p-8 text-white text-center shadow-xl"
        >
          <div>
            <div className="text-4xl font-bold mb-2">98%</div>
            <p className="text-sm">Client Satisfaction</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50K+</div>
            <p className="text-sm">Active Users</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">$2B+</div>
            <p className="text-sm">Payments Made</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">100K+</div>
            <p className="text-sm">Projects Completed</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
