/* eslint-disable react/prop-types */

import React from 'react';
import { motion } from 'framer-motion';

const ValentineAccepted = ({ name }) => {
 return (
  <motion.div
   initial={{ opacity: 0, scale: 0.8 }}
   animate={{ opacity: 1, scale: 1 }}
   exit={{ opacity: 0, scale: 0.8 }}
   transition={{ duration: 0.5 }}
   className="text-center space-y-6"
  >
   <motion.h2
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    className="text-3xl font-bold text-pink-600"
   >
    Yay! 🎉
   </motion.h2>
   <motion.p
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.4, duration: 0.5 }}
    className="text-2xl font-medium text-red-500"
   >
    {/* { name } */}I am now your Valentine!
   </motion.p>
   <motion.div
    animate={{ scale: [1, 1.2, 1] }}
    transition={{
     duration: 2,
     repeat: Infinity,
     ease: 'easeInOut',
    }}
    className="text-6xl"
   >
    💑
   </motion.div>
   <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8, duration: 0.5 }}
    className="md:text-lg text-gray-600 mt-4"
   >
    Time to plan something special for me! 🤗😊
   </motion.p>
  </motion.div>
 );
};

export default ValentineAccepted;
