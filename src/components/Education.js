import React from 'react';
import { motion } from 'framer-motion';

const ed = [
  {
    school: 'Lambton College',
    program: 'Full Stack Software Development',
    date: 'Sep 2024 – Sep 2026',
    notes: 'Advanced Web Development, Database Systems, Software Engineering'
  },
  {
    school: 'Tribhuvan University (KIST College)',
    program: 'Information Management',
    date: '2017 – 2022',
    notes: "Bachelor's Degree, Computer Programming"
  }
];

export default function Education(){
  return (
    <motion.section id="education" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6}}>
      <h2>Education</h2>
      <div>
        {ed.map(e => (
          <div key={e.school} style={{marginBottom:12}}>
            <h3 style={{margin:'0 0 6px'}}>{e.school} | {e.program} <span style={{fontWeight:500,color:'#9fb9d9',fontSize:'0.9rem'}}>· {e.date}</span></h3>
            <p style={{margin:0}}>{e.notes}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
