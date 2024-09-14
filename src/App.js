import { Route, Routes } from 'react-router-dom';
import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/nav';
import { FaFacebook, FaInstagram, FaGithub, FaTiktok, FaYoutube} from 'react-icons/fa';
import './components/SocialMediaIcons.css';
import mearg from './image/mearg.png';
import profile1 from './image/profile1.jpg';
import profile3 from './image/profile3.jpg';
import { FaLinkedin } from 'react-icons/fa6';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import twitter from './image/twitter-x-logo.png';

const App = () => {
    return (
        <div>
            <Nav />
            <img src={mearg} alt='Logo' className='logo'/>
            <img src={profile1} alt='Profile_Picture' className='profile' /> 
            <img src={profile3} alt='pro' className='tocenter' />
            <div className='content'>
                <h1>Welcome to my portfolio!</h1>
                <p>I am Mearg Gebremedhn</p>
                <h3>I am a full stack developer with a passion for creating intuitive and user friendly
                    applications. I have experience in <strong style={{color:'red'}}> HTML, CSS, PHP, JavaScript, React js, React Native, Git, Java, SQL, and
                    currently learning Flutter, and Python </strong>.
                </h3>
                <Routes>
                    <Route exact path='/about' element={<About name="about" />} />
                    <Route exact  path='/contact' element={<Contact name="contact" />} />
                </Routes>
            </div>
            <SocialLinks />
        </div>
    )
};
export default App;
const SocialLinks = () => (
    <>  
       <div  className='footer' >
       <a href="https://www.facebook.com/mearg.gebremedhn.50" target="_blank" rel="noopener noreferrer">
         <FaFacebook size={32} className='facebook' />
       </a>
       <a href="https://www.instagram.com/mearg_g?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer">
         <FaInstagram size={32} className='instagram' />
       </a>
       <a href="https://github.com/mearggeed" target="_blank" rel="noopener noreferrer">
         <FaGithub size={32} className='github' />
       </a>
       <a href="https://www.tiktok.com/@g.maggie" target="_blank" rel="noopener noreferrer">
         <FaTiktok size={32} className='tiktok'/>
       </a>
       <a href="https://x.com/MGmedhn4067" target="_blank" rel="noopener noreferrer" >
        <img style={{width: '32px', height: '32px'}} src={twitter} alt='twitter X'/>
       </a>
       <a href="https://youtube.com/@meag1967" target="_blank" rel="noopener noreferrer">
         <FaYoutube size={32} className='youtube' />
       </a>
       <a href='https://www.linkedin.com/in/mearg-gmedhn-11716119a/' target='_blank' rel='noopener noreferrer'>
        <FaLinkedin size={32} className='linkedin' />
       </a>
       
       {/* <FontAwesomeIcon icon="fa-brands fa-x-twitter" /> */}
     </div>

  </>
  );