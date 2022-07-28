import React from "react";
import wave from "../img/Emoji.png";
import me from "../img/me.png";

function Content() {
  return (
    <div className="content" id="About me">
      <main>
        <div>
          <h1>
            Hi <img src={wave} alt="wave" width={40} />
          </h1>
          <h1>
            I'm <b>Nishant Kumar</b>
          </h1>
          <h1>Front-end developer</h1>
          <p>
            I enjoy building awesome softwares that solve practicle problems. I
            work with Figma, HTML5, CSS3, JavaScript, React, Bootstrap etc. And
            I also have interest in Deep learning & Computer Vision!
          </p>
        </div>
        <div className="buttons">
          <button className="cta hire">HIRE ME</button>
          <a href="" target="_blank" download>
            <button className="cta project">SEE MY RESUME</button>
          </a>
        </div>
      </main>
      <figure>
        <img src={me} alt="Programmer" className="me-img" width={350} />
        <div className="img-bg"></div>
      </figure>
    </div>
  );
}

export default Content;
