import React from 'react';
import { motion } from 'framer-motion';

export default function About(){
  return (
    <motion.section id="about" initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}}>
      <h2>About Me</h2>
      <div className="container">
        <div className="about-card">
          <p>
            Results-driven Full Stack Developer with 4+ years of experience building scalable web applications.
            Proven track record of improving performance by 30% and enhancing engagement by 20%.
            Expert in MERN stack, database design, and API development. Comfortable working across cloud platforms and modern CI/CD pipelines.
          </p>
          <div style={{marginTop:16}}>
            <a href="/Sushil_Thanet_Resume.pdf" download>
              <button className="download-btn">Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
