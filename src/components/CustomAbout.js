import React from 'react'
import { Button } from 'antd';
import '../stylesheets/main.css'
import Placeholder from '../img/920x518.jpg'


const CustomAbout = (props) => {
  return (
    <div className="container width-75">
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-6">
            <div className="center-div">
              <h2>Nossa história</h2>
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
                <Button className="custom-cta-btn mb-20" type="primary">
                  Anuncie aqui
                </Button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="center-div">
              <img className="img-placeholder" src={Placeholder} alt=""/>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default CustomAbout
