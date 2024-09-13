import React, { useState } from 'react'
import './SocialMediaIcons.css'
import { Link } from 'react-router-dom';
import Mearg_Gebremedhns_CV from './Mearg_Gebremedhns_CV.pdf';
import { FaDownload } from 'react-icons/fa';
const About = () => {
    const [showMore, setShowMore] = useState(false);
  return (
    <>
        <h1>About Me</h1>
        <div className="about-content"> 
            <p>Hi there! I'm Mearg and welcome to my website.</p>
                   
            <button onClick={()=>setShowMore(!showMore)}>{ showMore ? "Less Info" : "More Info"}</button>
            {showMore && (
                <section>
                    <p><strong>I am a Full Stack Web Developer with expertise in JavaScript, Node.js, Express, React, Redux, MongoDB, MySQL, HTML5/CSS</strong></p>
                    <p><strong>Education:</strong> I am recently graduate in Software Engineering from Adigrat University.</p>
                    <p>I am a software engineer with experience in web development using JavaScript</p>
                </section>
            )}<br/><br/>
            <a href={Mearg_Gebremedhns_CV} download="Resume.pdf" ><FaDownload className='downloadResume' size={12}/></a> Download MY Resume
           
        </div>
        <div className='projects-container'>
            <div className='project-one'>
                <div>
                    <Link to={"#"} onClick={() => window.open("https://github.com/mearggeed", "_blank", "noopener noreferrer")}>
                        <h4>Wdasie Mariam</h4>
                        <p>Orthodox's Religion Native App</p>
                        <p>Developed using React Native</p>
                    </Link>                   
                </div>
                <div>
                    <Link to={"#"} onClick={() => window.open("https://github.com/mearggeed", "_blank", "noopener noreferrer")}>
                        <h4>Pos Machine</h4>
                        <p>Restaurant Food Reciept Native App</p>
                        <p>Developed using React Native</p>
                    </Link>
                </div>
                <div>
                    <Link to={"#"} onClick={() => window.open("https://github.com/mearggeed", "_blank", "noopener noreferrer")}>
                        <h4>E-Commerce</h4>
                        <p>Online Shopping Site</p>
                        <p>Developed using React Js</p>
                    </Link>
                </div>
            </div>
            <div className='project-two'>
                <div>
                <Link to="#" onClick={() => window.open("https://github.com/maggie-ghub/library-management-system", "_blank", "noopener noreferrer")}>
                    <h4>Library Management System</h4>
                    <p>Online site simplifying manual work</p>
                    <p>Developed using Html, CSS, PHP, MySQL</p>
                </Link>
                </div>
                <div>

                </div>
                <div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default About