import React from "react";
import drum from "../img/drum.png";
const Projects = () => {
  return (
    <section>
      <header className="text-2xl font-bold pt-10 text-center project-txt mx-3" id="projects">
        <h2>Projects</h2>
      </header>
      {/* carousal ---------------------------------------*/}

      <div className="row row-cols-1 row-cols-md-3 g-4 mx-5" id="project-card">
        <div className="col">
          <div className="card h-100">
            <img src={drum} className="card-img-top project-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Drum-Musical Instruments</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={drum} className="card-img-top project-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a short card.</p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={drum} className="card-img-top project-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="githubm">
        <button className="cta2 project">See More On GitHub</button>
      </div>

      {/* carousal-end-------------------------------------- */}
    </section>
  );
};

export default Projects;
