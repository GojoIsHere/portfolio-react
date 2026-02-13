import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact(){
  const form = useRef();
  const [formData, setFormData] = useState({ name: '', subject: '', message: '' });
  const [notification, setNotification] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4o2k0on', 'template_yeslvsi', form.current, '79by0facXjvcWd2oG')
      .then((result) => {
        console.log(result.text);
        setNotification('Message sent successfully!');
        setFormData({ name: '', subject: '', message: '' });
      }, (error) => {
        console.log(error.text);
        setNotification('Failed to send message. Please try again.');
      });
  };

  return (
    <motion.section id="contact" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6}}>
      <h2>Contact Me</h2>
      <div style={{display:'flex', gap:'40px', alignItems:'flex-start'}}>
        <div style={{flex:1}}>
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            <div>Email: <a href="mailto:sus.thanet0726@gmail.com">sus.thanet0726@gmail.com</a></div>
            <div>Phone: +1 (343) 843-2968</div>
            <div>LinkedIn: <a href="https://linkedin.com/in/sushilthanet" target="_blank" rel="noreferrer">linkedin.com/in/sushilthanet</a></div>
            <div>Location: Ottawa, ON</div>
          </div>
        </div>
        <div style={{flex:1}}>
          <h3>Send me a message</h3>
          <form ref={form} onSubmit={sendEmail} style={{display:'flex',flexDirection:'column',gap:16}}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{padding:8, border:'1px solid #ccc', borderRadius:4}}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={{padding:8, border:'1px solid #ccc', borderRadius:4}}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              style={{padding:8, border:'1px solid #ccc', borderRadius:4}}
            />
            <button type="submit" style={{padding:10, backgroundColor:'#007bff', color:'white', border:'none', borderRadius:4, cursor:'pointer'}}>
              Send
            </button>
          </form>
          {notification && <p style={{marginTop:16, color: notification.includes('successfully') ? 'green' : 'red'}}>{notification}</p>}
        </div>
      </div>
    </motion.section>
  );
}
