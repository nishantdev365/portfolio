import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
import "./App.css";


function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
