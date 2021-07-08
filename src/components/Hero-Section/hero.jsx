import React from "react";
import "./hero.style.scss";

const Hero = () => {
  return (
    <section className="hero is-large is-info hero-img">
      <div className="hero-body">
        <p className="hero-title">Free Delivery on The Dhaka City</p>
        <div className="shop-now">
          <button className="button is-black">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
