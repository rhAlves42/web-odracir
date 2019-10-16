import React from 'react'
import { Icon } from 'antd'
import Logo from '../img/logo.png'
import PsLogo from '../img/google-play-badge.png'
import IosLogo from '../img/epou.svg'
import '../stylesheets/main.css'

const CustomFooter = (props) => {
  return (
    <div className="footer-grid-container">
      <div className="logo-foter-container">
          <img className="logo-odracir" src={Logo} alt="OdraciR Logo" />
      </div>
      <div className="store-container">
      <div className="icons">
            <a href="https://google.com.br">
              <Icon type="instagram" />
            </a>
            <a href="https://google.com.br">
              <Icon type="facebook" />
            </a>
            <a href="https://google.com.br">
              <Icon type="twitter" />
            </a>
          </div>
      </div>
    </div>
  );
}

export default CustomFooter
