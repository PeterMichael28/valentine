import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ValentineForm from './ValentineForm';
import ValentineQuestion from './ValentineQuestion';
import ValentineAccepted from './ValentineAccepted';

const Home = () => {
 const [name, setName] = useState('');
 const [stage, setStage] = useState('form');

 useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const nameParam = urlParams.get('name');
  if (nameParam) {
   setName(nameParam);
   setStage('question');
  }
 }, [setName, setStage]);

 const handleSubmit = (submittedName) => {
  setName(submittedName);
  setStage('question');
  const url = new URL(window.location.href);
  url.searchParams.set('name', submittedName);
  window.history.pushState({}, '', url);
 };

 const handleAccept = () => {
  setStage('accepted');
 };

 return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-red-400 to-orange-500 p-4">
   <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-2xl p-6 max-w-md w-full"
   >
    <AnimatePresence mode="wait">
     {stage === 'form' && (
      <ValentineForm
       key="form"
       onSubmit={handleSubmit}
      />
     )}
     {stage === 'question' && (
      <ValentineQuestion
       key="question"
       name={name}
       onAccept={handleAccept}
      />
     )}
     {stage === 'accepted' && (
      <ValentineAccepted
       key="accepted"
       name={name}
      />
     )}
    </AnimatePresence>
   </motion.div>
  </div>
 );
};

export default Home;
