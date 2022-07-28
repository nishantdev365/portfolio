import React from "react";

const Contact = () => {
  return (
    <section>
      <header className="text-2xl font-bold pt-10 text-center contact-txt mx-3" id="contact">
        <h2>Contact</h2>
      </header>

      {/* form------------------- */}
      <div className="wrapper">
        <div className="icon facebook">
          <div className="tooltip">LinkedIn</div>
          <span>
            <i className="fa-brands fa-linkedin"></i>
          </span>
        </div>
        <div className="icon twitter">
          <div className="tooltip">Twitter</div>
          <span>
            <i className="fab fa-twitter"></i>
          </span>
        </div>
        <div className="icon instagram">
          <div className="tooltip">Instagram</div>
          <span>
            <i className="fab fa-instagram"></i>
          </span>
        </div>
        <div className="icon github">
          <div className="tooltip">Github</div>

          <span>
            <i className="fab fa-github"></i>
          </span>
        </div>
        <div className="icon youtube">
          <div className="tooltip">Mail</div>
          <span>
            <i className="fa-solid fa-envelope"></i>
          </span>
        </div>
      </div>

      <div className="contact2">
        <p>
          <span>
            <i className="fa-solid fa-earth-asia"></i>
          </span>{" "}
          India, Delhi
        </p>
        <h5>Email: nishantk322@gmail.com</h5>
      </div>

      <div className="made">
        <p>
          <span>
            <i className="fa-solid fa-code"></i>
          </span>{" "}
          by Nishant Kumar using{" "}
          <span>
            <i className="fa-brands fa-react"></i>
          </span>
        </p>
      </div>

      {/* form-end---------------------- */}
    </section>
  );
};

export default Contact;
