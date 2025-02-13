/* eslint-disable react/prop-types */

import React, { useCallback, useState } from 'react';
import { motion } from 'framer-motion';

const ValentineQuestion = ({ name, onAccept }) => {
 const [noButtonPosition, setNoButtonPosition] = useState({
  x: 90,
  y: 10,
 });

 const moveNoButton = useCallback(() => {
  const maxDistance =
   Math.min(window.innerWidth, window.innerHeight) / 4;
  const x = (Math.random() - 0.5) * maxDistance * 2;
  const y = (Math.random() - 0.5) * maxDistance * 2;
  setNoButtonPosition({ x, y });
 }, []);

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
    Will you be my Valentine,
   </motion.h2>
   <motion.p
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.4, duration: 0.5 }}
    className="text-4xl font-bold text-red-500"
   >
    {name}?
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
    💖
   </motion.div>
   <div className="flex justify-center space-x-4 mt-8 relative h-20">
    <button
     onClick={onAccept}
     className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 transform hover:scale-110"
    >
     Yes!
    </button>
    <motion.button
     animate={noButtonPosition}
     transition={{
      type: 'spring',
      stiffness: 1000,
      damping: 20,
      mass: 0.5,
      velocity: 100,
     }}
     onMouseEnter={moveNoButton}
     onFocus={moveNoButton}
     whileHover={{ scale: 0.7 }}
     className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-100 absolute"
     style={{ touchAction: 'none' }}
    >
     No
    </motion.button>
   </div>
  </motion.div>
 );
};

export default ValentineQuestion;
