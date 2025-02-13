/* eslint-disable react/prop-types */
import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ValentineForm = ({ onSubmit }) => {
 const [name, setName] = useState('');

 const handleSubmit = (e) => {
  e.preventDefault();
  if (name.trim()) {
   onSubmit(name.trim());
  }
 };

 return (
  <motion.form
   initial={{ opacity: 0, y: 20 }}
   animate={{ opacity: 1, y: 0 }}
   exit={{ opacity: 0, y: -20 }}
   transition={{ duration: 0.3 }}
   onSubmit={handleSubmit}
   className="space-y-4"
  >
   <h2 className="text-3xl font-bold text-pink-600 text-center mb-6">
    Who&apos;s Your Valentine?
   </h2>
   <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Enter their name"
    className="w-full px-4 py-2 rounded-full border-2 border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
    required
   />
   <button
    type="submit"
    className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 rounded-full hover:from-pink-600 hover:to-red-600 transition duration-300 transform hover:scale-105"
   >
    Continue
   </button>
  </motion.form>
 );
};

export default ValentineForm;
