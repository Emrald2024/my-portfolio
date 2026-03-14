import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              VISHAL
              <br />
              <span>PARMAR</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>E-Commerce Expert <br />& 7-Figure Brand Builder</h3>
            <p style={{ fontSize: "1.2rem", maxWidth: "600px", lineHeight: "1.5", opacity: 0.8 }}>
              £20M+ Revenue Generated · 9+ Years Experience<br />
              Scaling Brands Across UK 🇬🇧 EU 🇪🇺 USA 🇺🇸
            </p>
            <p style={{ fontSize: "1.1rem", maxWidth: "600px", lineHeight: "1.5", marginTop: "1rem", opacity: 0.7 }}>
              <i>I don't just run ads — I build empires. From zero to seven figures, I handle everything so you can focus on growth.</i>
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
