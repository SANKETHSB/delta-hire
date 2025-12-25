"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Frontend Development",
    icon: "🎨",
    count: "2,450 projects",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Backend Development",
    icon: "⚙️",
    count: "1,890 projects",
    color: "from-purple-400 to-purple-600",
  },
  {
    name: "Full Stack Development",
    icon: "🔧",
    count: "1,560 projects",
    color: "from-pink-400 to-pink-600",
  },
  {
    name: "UI/UX Design",
    icon: "🎭",
    count: "1,230 projects",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    name: "Graphic Design",
    icon: "✏️",
    count: "980 projects",
    color: "from-green-400 to-green-600",
  },
  {
    name: "Data Science",
    icon: "📊",
    count: "760 projects",
    color: "from-indigo-400 to-indigo-600",
  },
  {
    name: "DevOps Engineer",
    icon: "🚀",
    count: "640 projects",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    name: "AI Development",
    icon: "🤖",
    count: "520 projects",
    color: "from-orange-400 to-orange-600",
  },
];

export default function Categories() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Popular{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500">
              Categories
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore trending skill categories and find the perfect freelancers
            for your needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05, translateY: -8 }}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 bg-linear-to-br ${category.color} text-white shadow-lg hover:shadow-2xl dark:shadow-none dark:hover:shadow-lg dark:hover:shadow-cyan-500/20`}
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
              <p className="text-sm opacity-90">{category.count}</p>
              <motion.div
                className="mt-4 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100"
                whileHover={{ x: 5 }}
              >
                Browse Now →
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:brightness-110"
          >
            View All Categories →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
