import React from "react";

const contactDetails = [
  {
    label: "Email",
    value: "mingmanhk@gmail.com",
    href: "mailto:mingmanhk@gmail.com",
    icon: "bi-envelope"
  },
  {
    label: "Phone",
    value: "+1 832 472 7991",
    href: "tel:+18324727991",
    icon: "bi-phone"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell contact">
      <div className="section-heading">
        <p className="eyebrow">Let&apos;s collaborate</p>
        <h2>Ready to transform your next program.</h2>
        <p>
          Whether you&apos;re optimizing service delivery, modernizing infrastructure, or launching
          a new product, I&apos;d love to help.
        </p>
      </div>

      <div className="contact-grid">
        {contactDetails.map((detail) => (
          <article className="contact-card" key={detail.label}>
            <i className={`bi ${detail.icon}`} aria-hidden="true"></i>
            <p className="contact-label">{detail.label}</p>
            <a href={detail.href} className="contact-value">
              {detail.value}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
