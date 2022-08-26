import React from 'react'

export const Footer = () => {
  return (
    <>
  {/* Footer */}
  <footer className="text-center text-lg-start text-muted">

    {/* Section: Links  */}
    <section className="">
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3 text-grayish" />
             Online Converter
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="/!" className="text-reset">
                Angular
              </a>
            </p>
            <p>
              <a href="/!" className="text-reset">
                React
              </a>
            </p>
            <p>
              <a href="/!" className="text-reset">
                Vue
              </a>
            </p>
            <p>
              <a href="/!" className="text-reset">
                Laravel
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="/!" className="text-reset">
                Pricing
              </a>
            </p>
            <p>
              <a href="/!" className="text-reset">
                Settings
              </a>
            </p>
            <p>
              <a href="/!" className="text-reset">
                Orders
              </a>
            </p>
            <p>
              <a href="/!" className="text-reset">
                Help
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
         
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div
      className="text-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
    >
      © 2022 Copyright:
      <a className="text-reset fw-bold" href="https://convertthis.netlify.app/">
      convertthis.netlify.app
      </a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</>

  )
}
