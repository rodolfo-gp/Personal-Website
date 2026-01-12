import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Experience2 } from "./components/Experience/Experience2";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/NavBar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Experience2 />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
