import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'South Beach Swimsuits',
    desc: 'E-commerce database design with scalable inventory and order management.',
    tech: ['MongoDB', 'Express', 'React', 'Node']
  },
  {
    name: 'Jenny’s Hair Salon & Spa',
    desc: 'Booking system database optimized for scheduling and customer management.',
    tech: ['React','Node','Postgres']
  },
  {
    name: 'AAMA Refrigerator Company',
    desc: 'Inventory management system with scalable architecture for analytics.',
    tech: ['React','Express','MySQL']
  }
];

export default function Projects(){
  return (
    <section id="projects">
      <h2>Projects & Database Design</h2>
      <div className="projects-grid">
        {projects.map(p => (
          <motion.div key={p.name} className="project-card" initial={{opacity:0, y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}}>
            <h3 style={{marginTop:0}}>{p.name}</h3>
            <p>{p.desc}</p>
            <div style={{marginTop:8, display:'flex', flexWrap:'wrap', gap:'8px'}}>
              {p.tech.map(t => <span key={t} className="skill-pill">{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
