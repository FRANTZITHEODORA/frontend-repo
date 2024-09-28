import React from 'react';
import { Link } from 'react-scroll';
import './Navigation.css';
import homeIcon from '../home.png';
import userIcon from '../user.png';
import messageIcon from '../contact-mail.png';
import codeIcon from '../coding.png';

const cors = require('cors');

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="custom-ul">
        <li className="list active custom-li">
          <Link to="home" smooth={true} duration={500}>
            <span className="icon">
              <img src={homeIcon} alt="Home" />
            </span>
            <span className="text">HOME</span>
          </Link>
        </li>
        <li className="list custom-li">
          <Link to="profile" smooth={true} duration={500}>
            <span className="icon">
              <img src={userIcon} alt="USER" />
            </span>
            <span className="text">PROFILE</span>
          </Link>
        </li>
        <li className="list custom-li">
          <Link to="contactDetails" smooth={true} duration={500}>
            <span className="icon">
              <img src={messageIcon} alt="message" />
            </span>
            <span className="text">CONTACT</span>
          </Link>
        </li>
        <li className="list custom-li">
          <Link to="carousel" smooth={true} duration={500}>
            <span className="icon">
              <img src={codeIcon} alt="coding" />
            </span>
            <span className="text">PROJECT</span>
          </Link>
        </li>
      </ul>
      <div className="indicator"></div>
    </div>
  );
};

export default Navigation;