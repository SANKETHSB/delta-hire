"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { FaUsers, FaLock, FaStar, FaChartLine } from "react-icons/fa";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 pt-20 pb-24 transition-colors duration-300">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-200 dark:bg-cyan-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 dark:bg-blue-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-200 dark:border-blue-800"
              whileHover={{ scale: 1.05 }}
            >
              🚀 Welcome to the Future of Work
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Find Your Next
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500">
                Great Opportunity
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              The world's largest marketplace connecting talented freelancers
              with innovative projects. Get hired for the work you love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/find-work">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:brightness-110"
                >
                  Find Work <FiArrowRight />
                </motion.button>
              </Link>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-600 dark:border-cyan-500 text-blue-600 dark:text-cyan-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-cyan-950/30 transition-all duration-300"
              >
                Hire Talent
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400">
                  10M+
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Freelancers
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  500K+
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Projects
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">
                  $5B+
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Paid Out
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                icon: FaUsers,
                title: "Verified Talent",
                desc: "Pre-screened professionals",
                color:
                  "from-blue-500 to-blue-600 dark:from-cyan-500 dark:to-blue-600",
              },
              {
                icon: FaLock,
                title: "Secure Payments",
                desc: "Safe escrow system",
                color:
                  "from-purple-500 to-purple-600 dark:from-purple-500 dark:to-pink-600",
              },
              {
                icon: FaStar,
                title: "Quality Assured",
                desc: "Verified reviews & ratings",
                color:
                  "from-pink-500 to-pink-600 dark:from-pink-500 dark:to-rose-600",
              },
              {
                icon: FaChartLine,
                title: "Scale Easily",
                desc: "From tasks to large projects",
                color:
                  "from-green-500 to-green-600 dark:from-emerald-500 dark:to-teal-600",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition border border-gray-100 dark:border-gray-700"
              >
                <div
                  className={`inline-flex p-3 rounded-lg bg-linear-to-r ${feature.color} mb-4`}
                >
                  <feature.icon className="text-white text-xl" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
