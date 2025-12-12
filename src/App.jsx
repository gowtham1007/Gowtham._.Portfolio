// import Navbar from "./Components/Navbar";
// import About from "./Pages/About";
// import Hero from "./Pages/Hero"; 
// import Education from "./Pages/Education";
// import Experience from "./Pages/Experience";
// import Projects from "./Pages/Projects";
// import Skills from "./Pages/Skills";
// import Achieve from "./Pages/Achieve";
// import Contacts from "./Pages/Contacts";
// export default function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero/>
//       <About/>
//       <Education/>
//       <Experience/>
//       <Projects/>
//       <Skills/>
//       <Achieve/>
//       <Contacts/>
      
//     </>
//   );
// }


import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Hero from "./Pages/Hero"; 
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Achieve from "./Pages/Achieve";
import Contacts from "./Pages/Contacts";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className=" scroll-smooth">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="achieve"><Achieve /></section>
        <section id="contacts"><Contacts /></section>
      </main>
    </Router>
  );
}
