import React from "react";

export default function contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
        </div>
        <div className="row">
          <div className="col-12 d-flex align-items-stretch">
            <div className="info">
              <div className="row">
                <div className="email col-12 col-md-5">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>
                    <a href="mailto:mingmanhk@gmail.com">
                      mingmanhk@gmail.com
                    </a>
                  </p>
                </div>
                <div className="phone col-12 col-md-5">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 832 472 7991</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
