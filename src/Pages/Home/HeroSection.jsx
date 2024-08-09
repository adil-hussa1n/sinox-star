import { ReactTyped } from "react-typed";


export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Welcome To</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              <ReactTyped
                strings={["SINOX STAR FX LIMITED"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </span>
          </h1>
          <p className="hero--section-description">
          Where innovation meets excellence. With a focus on delivering top-tier IT support and cutting-edge software development solutions, we are committed to helping businesses thrive in the digital age.
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/logo.jpeg" alt="Hero Section" />
      </div>
    </section>
  );
}
