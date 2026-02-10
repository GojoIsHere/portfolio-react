import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Fellow Software Engineer',
    org: 'TEJ Fellowship',
    location: 'Lalitpur, Nepal',
    date: 'June 2023 – March 2024',
    bullets: [
      'Spearheaded development of full-stack web application collaborating with team of 3 engineers, increasing user engagement by 20%',
      'Optimized application performance through advanced techniques, reducing load time by 30%',
      'Designed and implemented RESTful APIs to streamline data flow between front-end and back-end components',
      'Enhanced database schemas improving data organization and retrieval efficiency by 15%',
      'Led peer code reviews ensuring code quality and adherence to best practices across the team',
      'Integrated third-party services and APIs expanding functionality and delivering robust product offerings',
      'Organized and facilitated workshops to mentor junior developers on React.js and Node.js best practices',
      'Proactively troubleshot and resolved critical bugs, enhancing overall system reliability and user experience'
    ]
  },
  {
    role: 'Junior Software Developer',
    org: 'Essence Engineering Consult Pvt. Ltd.',
    location: 'Bharatpur, Nepal',
    date: 'March 2020 – May 2022',
    bullets: [
      'Developed client-facing web applications using React.js, enhancing user experience and customer satisfaction',
      'Implemented robust back-end functionality with Node.js, reducing server response times by 15%',
      'Built interactive and responsive UI components ensuring seamless user engagement across devices',
      'Optimized SQL queries and designed database schemas, increasing data retrieval speed by 20%',
      'Integrated third-party APIs extending application functionality and enabling new feature development',
      'Participated in code review sessions to uphold quality standards and reduce technical debt',
      'Debugged and resolved software issues swiftly, contributing to smoother deployment cycles',
      'Collaborated with cross-functional teams in regular meetings to discuss milestones and propose solutions'
    ]
  },
  {
    role: 'Apprentice Software Developer',
    org: 'Broadway Infosys',
    location: 'Kathmandu, Nepal',
    date: 'May 2022 – October 2022',
    bullets: [
      'Gained hands-on experience in software development lifecycle and agile methodologies',
      'Contributed to development projects under senior developer guidance',
      'Developed proficiency in version control systems and collaborative development practices'
    ]
  }
];

export default function Experience(){
  return (
    <motion.section id="experience" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}}>
      <h2>Professional Experience</h2>
      <div>
        {experiences.map((e)=> (
          <div className="experience-item" key={e.role + e.org}>
            <h3 style={{margin:'0 0 6px'}}>{e.role} | {e.org}, {e.location} <span style={{fontWeight:500,color:'#9fb9d9',fontSize:'0.9rem'}}>· {e.date}</span></h3>
            <ul>
              {e.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
