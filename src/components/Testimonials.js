import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Sushil delivered high-quality code and improved our app's performance significantly.",
    name: "Manager, TEJ Fellowship"
  },
  {
    quote: "Great problem-solving skills and attention to detail in database design.",
    name: "Colleague, Essence Engineering"
  }
];

export default function Testimonials(){
  return (
    <motion.section id="testimonials" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6}}>
      <h2>Testimonials</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'20px'}}>
        {testimonials.map((t, i) => (
          <div key={i} style={{background:'var(--card)',padding:'20px',borderRadius:'12px'}}>
            <p>"{t.quote}"</p>
            <p style={{fontWeight:'bold',marginTop:'10px'}}>- {t.name}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}