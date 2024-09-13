import React from 'react'
import './nav.css'

const Contact = () => {
  return (
    <div className='social-links'>  
        <h2>How To Reach Me?</h2>
        <ul >
            <li className='social-links'>Email: <a href='mailto: meagmage@gmail.com'>meagmage@gmail.com</a></li>
            <li>Phone: <a href='+251-934-982-039'>+251-934-982-039</a></li>        
        </ul>  
      <div>
        <form action='https://formspree.io/f/xnqeywvo' method='POST' className='form'>
          <label for='name'>Name: </label>
          <input type='text' placeholder='Enter Your Name' name='name' required/><br/><br/>
          <label for='email'>Email: </label>
          <input type='email' placeholder='Enter Your Email' name='email' required/><br/><br/><br/>
          <label for='textarea'>Message: </label>
          <textarea cols={13} rows={12} required name='message' className='message'></textarea><br/><br/><br/><br/>
          <input type='submit' value='Send' className='submit-btn'/>
        </form>
      </div>      
    </div>
    
  )
}

export default Contact
