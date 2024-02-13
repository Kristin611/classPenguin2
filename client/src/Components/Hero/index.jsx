import React from 'react';
import "./Hero.css"
import HeroPic from "../../assets/KingPenguin.jpeg"
function Hero() {
  return (
    <div className=".heroHead">
       
      <header className="hero">
      <img id= "hero-img" src={HeroPic}/>
        <div className="hero-content">
          <h1>ClassPenguin:</h1>
          <p>Streamlined Learning, Endless Success</p>
          <a href="#learn-more" className="btn">Learn More</a>
        </div>
      </header>

      <section id="learn-more" className="main-content">
        <h2>About Us</h2>
        <p>ClassPenguin is a place where students can create and inspire through blogging. Share and inspire others by creating a social way to connect through creative writing. </p>
        <a href="#learn-more" className="btn">Learn More</a>
      </section>

      <footer>

      </footer>
    </div>
  );
}

export default Hero;
