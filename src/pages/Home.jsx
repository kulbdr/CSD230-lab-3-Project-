import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center p-6 text-white">
      {/* Consider using a locally hosted image or a CDN with better caching to improve performance and reliability. */}
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxeZyYSJ6pp98SevkMn3LFNqQIXT-k6bxKdw&s" 
        alt="HealTech Logo" 
        className="w-24 h-24 mb-4" 
      />
      
      {/* You might want to test different font sizes or colors for better readability against the background. */}
      <motion.h1 
        className="text-5xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        HealTech: Your Health, Your Way
      </motion.h1>
      
      {/* Adding a slight shadow effect to this text could improve readability on bright backgrounds. */}
      <p className="text-lg text-center max-w-lg">
        Empowering you to take control of your health with advanced tracking, AI-powered recommendations, and personalized insights.
      </p>
      
      <div className="mt-6 flex gap-4">
        {/* Consider increasing the padding slightly to make the button more touch-friendly for mobile users. */}
        <button className="bg-white text-green-600 px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200 transition">
          Start Your Journey
        </button>
        <button variant="outline" className="border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-green-600 transition">
          Discover More
        </button>
      </div>
      
      {/* If you expect more feature cards in the future, consider using a grid layout for better scalability. */}
      <motion.div 
        className="mt-12 flex flex-wrap gap-6 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-64 h-40 bg-white text-green-700 p-4 rounded-lg shadow-xl flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold">AI Health Assistant</h2>
          <p className="text-sm text-center">Get real-time AI-driven insights tailored to your health needs.</p>
        </div>
        <div className="w-64 h-40 bg-white text-green-700 p-4 rounded-lg shadow-xl flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold">Custom Workouts</h2>
          <p className="text-sm text-center">Personalized fitness plans designed for your body and goals.</p>
        </div>
        <div className="w-64 h-40 bg-white text-green-700 p-4 rounded-lg shadow-xl flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold">24/7 Telehealth</h2>
          <p className="text-sm text-center">Instantly connect with doctors and nutritionists anytime.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;