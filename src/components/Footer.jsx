import React from "react";

const Footer = ({ name }) => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} <strong>{name}</strong> — Built with React & Vite.
      </p>
      <p className="footer-sub">IT Infrastructure • Cybersecurity • Software Development</p>
    </footer>
  );
};

export default Footer;