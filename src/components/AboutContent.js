import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.webp"
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
             <h1>Who Am I?</h1>
             <p>Im a FullStack Developer. I create responsive secure website for my clients.</p>
             <div className="btns-div">
             <Link to="/contact">
                <button className="btn">Contact</button>
             </Link>
             <a href="../assets/Naga_Sai_Resume.pdf" download="Naga_Sai_Resume.pdf">
                    <button className="btn btn-light">My Resume</button>
             </a>
             </div>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="React img-1" />
                </div>

                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="React img-2" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent