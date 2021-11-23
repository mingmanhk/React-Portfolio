import React from "react";

export default function contact() {
  return (
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-title">
          <h2>Contact</h2>
        </div>
        <div class="row" data-aos="fade-in">
          <div class="col-12 d-flex align-items-stretch">
            <div class="info">
              <div class="row" data-aos="fade-in">
                <div class="email col-12 col-md-5">
                  <i class="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>
                    <a href="mailto: mingmanhk@gmail.com">
                      mingmanhk@gmail.com
                    </a>
                  </p>
                </div>
                <div class="phone col-12 col-md-5">
                  <i class="bi bi-phone"></i>
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
