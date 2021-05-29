import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Shop = () => {

  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])

  return (
    <div className="shop" >
      <div className="container">
        <div className="shop__text" 
          data-aos="zoom-in">
          <div>
            <h2>Free Delivery With</h2>
            <h1>PIZZA OF THE DAY ONLY 8.99 USD</h1>
            <div className="shop__btn">
              <a href="" className="btn btn-smart">
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
