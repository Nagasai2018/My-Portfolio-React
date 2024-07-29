import "./HeroImgStyles.css"
import React from 'react'
import Intro from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-image" src={Intro} alt="Home-Screen" />
        </div>

        <div className="content">
            <p>HI, I'M NAGA SAI</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/project" className="btn text-white">Projects</Link>
                <Link to="/contact" className="btn btn-light text-white">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
