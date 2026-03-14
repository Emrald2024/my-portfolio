import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para" style={{ whiteSpace: "pre-wrap" }}>
          Hi, I'm Vishal Parmar — a full-stack E-Commerce strategist with 9+ years of hands-on experience helping brands grow from scratch to seven figures.

I've worked with a UK-based e-commerce company, managing end-to-end operations — from store setup and product research to paid advertising, branding, and fulfillment. I've personally contributed to generating over £20 Million in revenue for clients across the UK, EU, and USA.

Whether you need a high-converting Shopify store, a full-funnel ad strategy, or someone to take over your entire e-com operation — I've done it all, and I do it exceptionally well.
        </p>

        <div style={{ marginTop: "4rem" }}>
          <h3 className="title" style={{ fontSize: "2rem", marginBottom: "2rem" }}>📊 Key Stats</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
            {[
              { label: "Revenue Generated", value: "£20M+" },
              { label: "Years of Experience", value: "9+ Years" },
              { label: "Markets Scaled", value: "UK · EU · USA" },
              { label: "Ad Platforms", value: "5+" },
              { label: "7-Figure Brands Built", value: "Multiple" }
            ].map((stat, i) => (
              <div key={i} style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "1.5rem", borderRadius: "10px", textAlign: "center", background: "rgba(255,255,255,0.02)" }}>
                <h4 style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#fff", marginBottom: "0.5rem" }}>{stat.value}</h4>
                <p style={{ opacity: 0.8, fontSize: "1rem" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "4rem", marginBottom: "2rem" }}>
          <h3 className="title" style={{ fontSize: "2rem", marginBottom: "2rem" }}>🤝 Why Work With Me</h3>
          <ul style={{ listStyleType: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
            {[
              "One Person, Full Team Output — Ads, store, branding, ops & more",
              "Proven Track Record — £20M+ revenue, 9+ years, real results",
              "Data-Driven — Every decision backed by research & analytics",
              "Transparent & Reliable — Regular reporting, clear communication",
              "Global Experience — UK, EU & US markets",
              "Fast Execution — No fluff, no delays — just results"
            ].map((item, i) => (
              <li key={i} style={{ padding: "1rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", background: "rgba(255,255,255,0.02)", display: "flex", gap: "10px", alignItems: "flex-start", lineHeight: "1.5" }}>
                <span style={{ fontSize: "1.2rem" }}>✅</span> <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
