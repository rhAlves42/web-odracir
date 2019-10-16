import React from 'react';
import { Button, Layout } from 'antd';
import Logo from '../img/logo.png';
import '../stylesheets/main.css';
const { Header } = Layout;
const CustomHeader = (props) => {
  return (
    <Header>
      <div className="grid-container">
        <div className="logo-container">
          <img className="logo-odracir" src={Logo} alt="Orçaki Logo" />
        </div>
        <div className="login-container">
            <span><a href="https://google.com.br">Entrar</a></span>
            <span><a href="https://google.com.br">Registrar</a></span>
        </div>
        <div className="btn-container">
          <Button className="custom-cta-btn" type="primary">Anúncie já</Button>
        </div>
      </div>
    </Header>
  );
}
export default CustomHeader;
