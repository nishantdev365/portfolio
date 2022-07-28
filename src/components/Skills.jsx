import React from "react";
import html5 from "../img/html5.png";
import css3 from "../img/css3.png";
import javascript from "../img/javascript.png";
import react from "../img/react.png";
import bootstrap from "../img/bootstrap.png";
import git from "../img/git.png";
import vsc from "../img/vsc.png";
import java from "../img/java.png";

const Skills = () => {
  return (
    <section className="mx-3" id="skills">
      {/* 'my-28  px-5' */}
      <header className="text-2xl font-bold pt-10 text-center skill-txt">
        <h2>Skills & Tools</h2>
      </header>

      <div className="skill-para">
        <h4>
          <ol>
            👉 I Have worked with a variety of programming languages &
            framework,
          </ol>
          <ol>
            👉 My areas of expertise are front-end development, React.js &
            javascript!
          </ol>
          <ol>👉 Here are my most frequently used</ol>
        </h4>
      </div>

      <div className="container">
        <div className="row my-5 text-center list">
          <div className="col">
            <img
              src={html5}
              id="skill-img"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          <div className="col">
            <img
              src={css3}
              id="skill-img"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          <div className="col">
            <img
              src={javascript}
              id="skill-img"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          <div className="col">
            <img
              src={react}
              id="skill-img"
              className="img-thumbnail"
              alt="..."
            />
          </div>
        </div>
        <div className="row text-center list2">
          <div className="col">
            <img
              src={bootstrap}
              id="skill-img"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          <div className="col">
            <img
              src={java}
              id="skill-img"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          <div className="col">
            <img src={git} id="skill-img" className="img-thumbnail" alt="..." />
          </div>
          <div className="col">
            <img src={vsc} id="skill-img" className="img-thumbnail" alt="..." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
