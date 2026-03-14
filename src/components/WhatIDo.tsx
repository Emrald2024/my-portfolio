import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  const services = [
    {
      title: "Store Building & Setup",
      subtitle: "High-Converting Shopify & WordPress",
      desc: "Full Shopify Store Design & Development. WordPress / WooCommerce Store Setup. High-Converting Landing Pages & Product Pages. TikTok Shop Setup & Management. Google My Business Setup.",
      skills: ["Shopify", "WooCommerce", "Landing Pages", "TikTok Shop", "GMB"],
    },
    {
      title: "Paid Advertising",
      subtitle: "Full-Funnel Ad Strategy",
      desc: "Meta Ads, Google Ads (Search, Shopping, PMax), TikTok Ads, X Ads, Snapchat Ads. Full-Funnel Ad Strategy (TOF → MOF → BOF).",
      skills: ["Meta Ads", "Google Ads", "TikTok Ads", "Snapchat Ads", "X Ads"],
    },
    {
      title: "Research & Strategy",
      subtitle: "Market & Competitor Analysis",
      desc: "Product Research & Winning Product Validation. Competitor & Market Analysis. Audience Research & Customer Persona Building. Niche Selection & Brand Positioning.",
      skills: ["Product Research", "Competitor Analysis", "Audience Research", "Brand Positioning"],
    },
    {
      title: "Operations & Fulfillment",
      subtitle: "End-to-End Management",
      desc: "Order Processing & Supplier Management. Inventory Planning & Stock Management. Customer Support Systems Setup. Returns & Refund Process Management.",
      skills: ["Supplier Management", "Inventory Planning", "Customer Support", "Returns Management"],
    },
    {
      title: "Branding & Content",
      subtitle: "Identity & Media Strategy",
      desc: "Brand Identity & Logo Direction. Video Editing for Ads & Social Media. Social Media Content Strategy.",
      skills: ["Brand Identity", "Video Editing", "Content Strategy", "Social Media"],
    },
    {
      title: "SEO & Organic Growth",
      subtitle: "Search Engine Optimization",
      desc: "On-Page SEO for Shopify & WordPress. Product Listing Optimization. TikTok Organic Growth Strategy. Google My Business SEO.",
      skills: ["On-Page SEO", "Product Listing", "TikTok Organic", "GMB SEO"],
    },
  ];

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          S<span className="hat-h2">ERVICES</span>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>
          
          {services.map((service, index) => (
            <div
              key={index}
              className="what-content what-noTouch"
              ref={(el) => setRef(el, index)}
            >
              <div className="what-border1">
                <svg height="100%">
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                  <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                </svg>
              </div>
              <div className="what-corner"></div>

              <div className="what-content-in">
                <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{service.title}</h3>
                <h4 style={{ opacity: 0.8, marginBottom: "1rem" }}>{service.subtitle}</h4>
                <p>{service.desc}</p>
                <h5>Skillset & tools</h5>
                <div className="what-content-flex">
                  {service.skills.map((skill, i) => (
                    <div key={i} className="what-tags">{skill}</div>
                  ))}
                </div>
                <div className="what-arrow"></div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
