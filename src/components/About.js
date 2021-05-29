import React,{useEffect} from "react";
import pizza from '../Images/pizza.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {

  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])


  return (
    <div className="about" >
      <div className="container">
        <div className="row">
          <div className="col-6 p-25" 
          data-aos="zoom-in-right">
            <h3>About Us</h3>
            <h1>WELCOME TO MAESTRO PIZZINI</h1>
            <p>
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius. Claritas est etiam processus dynaus, quise
              sequitur mutationem consuetudium lectorum.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6" 
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom">
            <div className="about__img">
              <img src={pizza} alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
