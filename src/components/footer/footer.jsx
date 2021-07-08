import React from "react";
import "./footer.style.scss";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer-bg">
      <div className="footer">
        <h4>{date} &copy; Copyright Computer Store</h4>
      </div>
    </div>
  );
};

export default Footer;
