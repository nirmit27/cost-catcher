import React from "react";
import { motion } from "framer-motion";
import { IndianRupee, Users, Zap, Globe, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import TeamMember from "../../components/TeamMember";
import FeatureCard from "../../components/FeatureCard";

export default function About() {
  const features = [
    {
      icon: IndianRupee,
      title: "Save Money",
      description:
        "Our AI-powered algorithms help you find the best deals and save money on your purchases.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Join a community of savvy shoppers sharing tips and experiences to maximize savings.",
    },
    {
      icon: Zap,
      title: "Real-time Tracking",
      description:
        "Get instant notifications on price drops and special offers for your favorite products.",
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description:
        "Track prices across multiple countries and currencies for the best international deals.",
    },
  ];

  const teamMembers = [
    {
      name: "Om Shukla",
      role: "CEO & Co-founder",
      image: "https://avatars.githubusercontent.com/u/121335245?v=4",
      profileLink: "https://github.com/omshukla12",
    },
    {
      name: "Anurag Dubey",
      role: "CTO & Co-founder",
      image: "https://avatars.githubusercontent.com/u/71247280?v=4",
      profileLink: "https://github.com/Anuragd275",
    },
    {
      name: "Nirmit Mishra",
      role: "Head of Product",
      image: "https://avatars.githubusercontent.com/u/93557744?v=4",
      profileLink: "https://github.com/nirmit27",
    },
    {
      name: "Akash Raj Nigam",
      role: "Head of Marketing",
      image: "https://avatars.githubusercontent.com/u/99388525?v=4",
      profileLink: "https://github.com/AkasHRaJNigaM",
    },
    {
      name: "Rohit Pal",
      role: "Head of Customer Success",
      image: "https://avatars.githubusercontent.com/u/176647458?v=4",
      profileLink: "https://github.com/RohitPal8542",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <main className="container mx-auto px-4 py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
            About CostCatcher
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Empowering shoppers with intelligent price tracking and savings
            opportunities since 2024.
          </p>
        </motion.section>

        <motion.section
          id="our-mission"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-200">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to help us
            revolutionize online shopping. Join us in our mission to empower
            shoppers worldwide.
          </p>
          <Link to="/signup">
            <motion.a
              href="/careers"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </motion.a>
          </Link>
        </motion.section>
      </main>
    </div>
  );
}
