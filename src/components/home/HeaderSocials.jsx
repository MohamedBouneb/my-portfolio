import React from 'react'
import "../home/HeaderSocials.css"
const HeaderSocials = () => {
  return (
        <div className="home__socials">
            <a href="https://www.instagram.com/mohamed.bounebb" className="home__social-link" >
                <i class="fa-brands fa-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/bouneb-mohamed/" className="home__social-link" >
                <i class="fa-brands fa-linkedin"></i>
            </a>

            <a href="https://github.com/MohamedBouneb" className="home__social-link" >
                <i class="fa-brands fa-github"></i>
            </a>
        </div>

        
    )
}

export default HeaderSocials