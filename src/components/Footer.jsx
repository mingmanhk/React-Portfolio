import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-inner">
        <p>© {year} Victor Lam. Guided by curiosity, empathy, and measurable outcomes.</p>
        <a href="/privacy-policy.html">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
