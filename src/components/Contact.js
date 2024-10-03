import React from 'react'
import './nav.css'
import {motion} from 'framer-motion';
import { useForm } from '@formspree/react';

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

const buttonVariants = {
  hover: {
    scale: 1.3,
    textShadow: "0px 0px 7px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition:{
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.3
    }
  }
}

const Contact = () => {

  const [state, handleSubmit] = useForm("xnqeywvo");
  if (state.succeeded) {
       alert("Thanks for contacting!");
  }

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
        <form onSubmit={handleSubmit} className='form'>
          <label for='name'>Name: </label>
          <input type='text' placeholder='Enter Your Name' name='name' required/><br/><br/>
          <label for='email'>Email: </label>
          <input type='email' placeholder='Enter Your Email' name='email' required/><br/><br/>
          <label for='textarea'>Message: </label>
          <textarea cols={13} rows={12} required name='message' className='message'></textarea><br/><br/><br/>
          <motion.button type='submit' className='submit-btn'
            variants={buttonVariants}
            whileHover="hover"
          >
            Send
          </motion.button>
        </form>
      </motion.div>      
    </div>
    
  )
}

export default Contact
