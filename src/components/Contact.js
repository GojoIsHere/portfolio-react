import React from 'react';
import { motion } from 'framer-motion';

export default function Contact(){
  return (
    <motion.section id="contact" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6}}>
      <h2>Contact Me</h2>
      <div style={{display:'flex',flexDirection:'column',gap:8}}>
        <div>Email: <a href="mailto:sus.thanet0726@gmail.com">sus.thanet0726@gmail.com</a></div>
        <div>Phone: +1 (343) 843-2968</div>
        <div>LinkedIn: <a href="https://linkedin.com/in/sushilthanet" target="_blank" rel="noreferrer">linkedin.com/in/sushilthanet</a></div>
        <div>Location: Ottawa, ON</div>
      </div>
    </motion.section>
  );
}
