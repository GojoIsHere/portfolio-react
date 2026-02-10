import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'Frontend',
    skills: 'React.js, HTML5, CSS3, Responsive Design'
  },
  {
    category: 'Backend',
    skills: 'Node.js, Express.js, RESTful APIs, JAVA, Spring Boot, Python, Flask, C#, .NET, Ruby on Rails,GO Lang, PHP, Django'
  },
  {
    category: 'Database',
    skills: 'MongoDB, SQL, Database Design, PostgreSQL, Redis, Oracle DBMS'
  },
  {
    category: 'DevOps / Cloud',
    skills: 'AWS (S3, EC2, Lambda), CI/CD (GitHub Actions, Jenkins), Docker'
  },
  {
    category: 'Tools & Methods',
    skills: 'Git, Agile, Code Review, Testing, Canva, Figma, Postman, JIRA'
  }
];

export default function Skills(){
  return (
    <motion.section id="skills" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6}}>
      <h2>Technical Skills</h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'20px'}}>
        {skillCategories.map(cat => (
          <div key={cat.category} style={{background:'var(--card)', padding:'16px', borderRadius:'8px'}}>
            <h3 style={{margin:'0 0 8px', color:'var(--accent)'}}>{cat.category}:</h3>
            <p style={{margin:0}}>{cat.skills}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
