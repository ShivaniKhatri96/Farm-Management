import React from 'react'
import "./welcomeBody.scss"
import landscapeImg from "../../images/sheepsLandscapev3.jpg";
import portraitImg from "../../images/sheeps.jpg";
const WelcomeBody = () => {
  return (
     <div>
     <img
      src={landscapeImg}
      alt="Sheeps in the field"
      className="landscapeImg"
    /> 
    <img
      src={portraitImg}
      alt="Sheeps in the field"
      className="portraitImg"
    /> 
  </div>
  )
}

export default WelcomeBody