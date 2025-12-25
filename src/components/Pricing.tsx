"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for beginners",
    features: [
      "Create profile",
      "Browse projects",
      "5 proposals/month",
      "Basic analytics",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$9.99",
    period: "/month",
    description: "For serious freelancers",
    features: [
      "All Starter features",
      "Unlimited proposals",
      "Advanced analytics",
      "Portfolio website",
      "Priority support",
      "Skills endorsements",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large teams",
    features: [
      "All Pro features",
      "Team collaboration",
      "Custom integrations",
      "Dedicated manager",
      "24/7 phone support",
      "Custom solutions",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
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
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs and start earning today
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.popular
                  ? "bg-linear-to-br from-blue-600 to-purple-600 dark:from-cyan-600 dark:to-blue-700 text-white shadow-2xl scale-105 md:scale-110 z-10"
                  : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={
                    plan.popular
                      ? "opacity-90"
                      : "text-gray-600 dark:text-gray-400"
                  }
                >
                  {plan.description}
                </p>

                <div className="mt-6 mb-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span
                      className={
                        plan.popular
                          ? "opacity-90"
                          : "text-gray-600 dark:text-gray-400"
                      }
                    >
                      {plan.period}
                    </span>
                  )}
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-white text-blue-600 hover:bg-gray-100"
                      : "bg-linear-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-blue-600 text-white hover:brightness-110"
                  }`}
                >
                  {plan.cta}
                </motion.button>

                <div className="mt-8 space-y-4">
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-3">
                      <FaCheck
                        className={
                          plan.popular
                            ? "text-yellow-300"
                            : "text-blue-600 dark:text-cyan-400"
                        }
                      />
                      <span className="text-sm opacity-90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <button className="px-8 py-4 bg-gray-900 dark:bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition">
            View All Features Comparison
          </button>
        </motion.div>
      </div>
    </section>
  );
}
