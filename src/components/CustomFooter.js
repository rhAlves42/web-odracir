import React from 'react'
import { Icon } from 'antd'
import Logo from '../img/logo.png'
import '../stylesheets/main.css'

const CustomFooter = (props) => {
  return (
    <div className="footer-grid-container">
      <div className="logo-foter-container">
          <img className="logo-odracir" src={Logo} alt="OdraciR Logo" />
      </div>
      <div className="store-container">
      <div className="icons">
            <a href="http://instagram.com/rh.alves/">
              <Icon type="instagram" />
            </a>
            <a href="https://www.linkedin.com/in/ricardohenri/">
              <Icon type="linkedin" />
            </a>
            <a href="http://twitter.com/thesamehunter">
              <Icon type="twitter" />
            </a>
          </div>
      </div>
    </div>
  );
}

export default CustomFooter
