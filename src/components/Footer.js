import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./FooterStyles.css"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>Vijayawada</p>
                        <p>Andhra Pradesh</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/> +91 9014705757
                    </h4>
                </div>

                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/> nagasai6230@gmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <h4>About Me</h4>
                <p>This is me Naga Sai. A FullStack Developer</p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}}/> 
                <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer