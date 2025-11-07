import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <>
      <footer>
        <div className="container">
          <p>Thank you.</p>
          <p>Designed by Victor Lam</p>
          <p>
            <a href="#privacy" onClick={handleShow}>
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <em>Last updated: October 26, 2023</em>
          </p>
          <p>
            This privacy policy explains how we collect, use, and share
            information when you visit this portfolio website.
          </p>
          <h5>Information We Collect</h5>
          <p>
            We use Google Analytics to collect information about your visit.
            This helps us understand how visitors use the site so we can improve
            it. The data collected may include:
          </p>
          <ul>
            <li>The pages you visit on this site</li>
            <li>The time you spend on each page</li>
            <li>The type of browser and operating system you use</li>
            <li>Your general location (e.g., city, country)</li>
            <li>The referring website</li>
          </ul>
          <p>
            This information is processed in a way that does not directly
            identify anyone. We do not make, and do not allow Google to make,
            any attempt to find out the identities of those visiting our
            website.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Footer;
