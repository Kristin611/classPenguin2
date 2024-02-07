import React from 'react';

function Hero() {
  return (
    <div>
      <header className="hero">
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
        <p>&copy; 2024 ClassPenguin</p>
      </footer>
    </div>
  );
}

export default Hero;
