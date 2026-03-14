import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container" style={{ paddingBottom: "100px" }}>
        <h3 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Ready to scale your brand to 7 figures?</h3>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", marginBottom: "3rem", opacity: 0.8 }}>
          Let's build something great together. Drop me a message and let's talk strategy.
        </p>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Contact Info</h4>
            <p>
              <a href="mailto:Vishalparmar155@gmail.com" data-cursor="disable">
                Vishalparmar155@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+917878551717" data-cursor="disable">
                +91 7878551717
              </a>
            </p>
            <h4 style={{ marginTop: "2rem" }}>Details</h4>
            <p>Available For: Freelance · Full-Time · Consulting</p>
            <p>Response Time: Within 24 Hours</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/vishal-parmar-6853a8133"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/Iamvishparmar"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/heyvishalparmar/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Vishal Parmar</span>
            </h2>
            <h5>
              <MdCopyright /> 2024
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
