import React from "react";
import Layout from "./Layout";
import { Navbar } from "./components/Navbar";
import { SocialRail } from "./components/SocialRail";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Awards } from "./sections/Awards";
import { Contact } from "./sections/Contact";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggle } = useTheme();
  return (
    <Layout>
      <Navbar theme={theme} toggleTheme={toggle} />
      <SocialRail />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Awards />
        <Contact />
      </main>
    </Layout>
  );
}

export default App;
