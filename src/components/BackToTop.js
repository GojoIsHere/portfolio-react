import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

export default function BackToTop(){
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    const onScroll = ()=>{
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return ()=> window.removeEventListener('scroll', onScroll);
  },[]);

  return (
    <button
      className={`back-to-top ${visible? 'visible':''}`}
      onClick={()=>scroll.scrollToTop({duration:500})}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
