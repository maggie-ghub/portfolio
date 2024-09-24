import React from 'react'
import './nav.css'
import {motion} from 'framer-motion';

const contactVariants = {
  hidden:{
      opacity:0,
      x: '100vw'
  },
  visible:{
      opacity:1, 
      x: 0,
      duration: 1.5,
      transition: {
          type: "spring",
          stiffness: 90,
          damping: 12,
      }
  }
} 

const Contact = () => {
  return (
    <div className='social-links'>  
        <h2>How To Reach Me?</h2>
        <ul >
            <li className='social-links'>Email: <a href='mailto: meagmage@gmail.com'>meagmage@gmail.com</a></li>
            <li>Phone: <a href='+251-934-982-039'>+251-934-982-039</a></li>        
        </ul>  
      <motion.div
        variants = {contactVariants}
        initial = "hidden"
        animate = "visible"
      >
        <form action='https://formspree.io/f/xnqeywvo' method='POST' className='form'>
          <label for='name'>Name: </label>
          <input type='text' placeholder='Enter Your Name' name='name' required/><br/><br/>
          <label for='email'>Email: </label>
          <input type='email' placeholder='Enter Your Email' name='email' required/><br/><br/><br/>
          <label for='textarea'>Message: </label>
          <textarea cols={13} rows={12} required name='message' className='message'></textarea><br/><br/><br/><br/>
          <input type='submit' value='Send' className='submit-btn'/>
        </form>
      </motion.div>      
    </div>
    
  )
}

export default Contact
