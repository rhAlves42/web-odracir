import React from 'react'
import '../stylesheets/main.css'
import Placeholder from '../img/920x518.jpg'
import { Button } from 'antd';


const CustomCTA = (props) => {
  return (
    <div className="container width-75">
      <div className="row">
        <div className="col-md-12 mt-2rem">
          <div className="col-md-3">
            <div className="center-div">
            <img className="img-placeholder" src={Placeholder} alt=""/>
            </div>
          </div>
          <div className="col-md-8">
            <div className="center-div">
              <h2>Nosso objetivo</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                   cillum dolore eu fugiat nulla pariatur. Excepteur
                   sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
                <Button className="custom-cta-btn" type="primary">
                  Saiba Mais
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomCTA
