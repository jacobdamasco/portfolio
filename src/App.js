import './App.css';
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import AboutMe from './components/AboutMe.js'
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
    </>
  );
}

export default App;
