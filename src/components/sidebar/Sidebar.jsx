import React from 'react';
import "./sidebar.css";
import Logo from "../../assets/logo.png";

const Sidebar = () => {
  return (
    <aside className='aside'>
      <a href="#home" className="nav__logo">
        <img src={Logo} alt="Logo" width={80} />
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">

            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i> {/* Home */}
              </a>
            </li>

            <li className="nav__item">
              <a href="#books" className="nav__link">
                <i className="icon-user-following"></i> {/* profile*/}
              </a>
            </li>

            <li className="nav__item">
              <a href="#profile" className="nav__link">
                <i className="icon-briefcase"></i> {/* projeyet  */}
              </a>
            </li>
            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <i className="icon-graduation"></i> {/* plan d'etude  resume*/}
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="icon-layers"></i> {/**/}
                
              </a>
            </li>

            <li className="nav__item">
              <a href="#blog" className="nav__link">
                <i className="icon-note"></i> {/* presentation */}
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="icon-bubble"></i> {/* presentation */}
              </a>
            </li>

            

          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className='copyright'>&copy; 2024 - 2025 </span>
      </div>
    </aside>
  )
}

export default Sidebar;
