import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>E-Commerce Strategist & Growth Manager</h4>
                <h5>UK-Based E-Commerce Company</h5>
              </div>
              <h3>9+ Years</h3>
            </div>
            <p style={{ marginTop: "1rem", lineHeight: "1.6" }}>
              • Scaled multiple D2C brands across UK, EU, and USA markets <br />
              • Generated £20M+ in revenue through full-funnel ad strategies <br />
              • Managed end-to-end e-commerce operations from store setup to fulfillment <br />
              • Ran high-ROI campaigns across Meta, Google, TikTok, Snapchat & X
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
