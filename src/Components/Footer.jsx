import React from "react";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <h5 className="text-uppercase fw-bold mb-3 text-white">
              CompanyNames
            </h5>
            <p className="text-muted small">
              Building modern web experiences with speed, style, and
              responsiveness.
            </p>
          </div>
          <div className="col-lg-2 col-md-6">
            <h6 className="text-uppercase fw-bold mb-3 text-white">Services</h6>
            <ul className="list-unstyled text-muted small">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-reset">
                  Web Design
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h6 className="text-uppercase fw-bold mb-3 text-white">
              Newsletter
            </h6>
            <form onSubmit={handleSubmit} className="d-flex gap-2">
              <input
                type="email"
                className="form-control form-control-sm bg-secondary text-white border-0"
                placeholder="Your email"
                required
              />
              <button className="btn btn-primary btn-sm px-3" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
