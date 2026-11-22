import React from "react";
import Layout from "./Layout";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Awards } from "./sections/Awards";
import { Contact } from "./sections/Contact";
import { useTheme } from "./hooks/useTheme";
import { useReveal } from "./hooks/useReveal";

function App() {
  const { theme, toggle } = useTheme();
  useReveal();
  return (
    <Layout>
      <Navbar theme={theme} toggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
        <Contact />
      </main>
    </Layout>
  );
}

export default App;
