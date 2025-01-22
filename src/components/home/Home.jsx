import React from 'react'
import "./home.css"
import Me from "../../assets/logo.png";
import HeaderSocials from './HeaderSocials';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  return (
    <section className="home container" id="home"> {/*racorcci section.home.container#home*/}
        <div className="intro">
          <img src={Me} alt="" className="home__img" width={180} />  {/*img.home__img */}
          <h1 className="home__name">
              BOUNEB Mohamed
          </h1>
          <span className="home__eduction">
              Developer WEB & IOT and Embedded System <br />
              Actually I'm a Software engineering student <br />
              Founder & CEO @InfoMinds CLUB
          </span>

          <HeaderSocials /> 
          <button>Hire Me</button>
         
          
        </div>
    </section>
  )
}

export default Home