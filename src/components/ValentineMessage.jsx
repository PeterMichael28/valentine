/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';

const ValentineMessage = ({ name }) => {
 return (
  <motion.div
   initial={{ opacity: 0, scale: 0.8 }}
   animate={{ opacity: 1, scale: 1 }}
   exit={{ opacity: 0, scale: 0.8 }}
   transition={{ duration: 0.5 }}
   className="text-center space-y-4"
  >
   <motion.h2
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    className="text-3xl font-bold text-nigerian-red"
   >
    You are now my Valentine,
   </motion.h2>
   <motion.p
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.4, duration: 0.5 }}
    className="text-4xl font-bold text-nigerian-green"
   >
    {name}?
   </motion.p>
   <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{
     delay: 0.6,
     type: 'spring',
     stiffness: 200,
     damping: 10,
    }}
   >
    <span
     role="img"
     aria-label="heart"
     className="text-6xl"
    >
     ❤️
    </span>
   </motion.div>
   <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8, duration: 0.5 }}
    className="text-sm text-gray-600 mt-8"
   >
    Share this link with your Valentine!
   </motion.p>
  </motion.div>
 );
};

export default ValentineMessage;
