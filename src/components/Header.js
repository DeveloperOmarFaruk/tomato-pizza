import React, {useEffect} from "react";
import Navbar from "./Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Header = () => {

  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])

  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content" >
        <div className="container" >
          <div className="banner__text" >
            <h3  data-aos="fade-right">Pizza Devlivery</h3>
            <h1 data-aos="fade-up-right">MAESTRO PIZINNI</h1>
            <p  data-aos="fade-down-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              minus ut mollitia error molestiae quia.
            </p>
            <div className="banner__btn" 
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-easing="ease-in-sine">
              <a href="" className="btn btn-smart">
                DEVLERY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
