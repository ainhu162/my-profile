import React from 'react';
import Header from './components/Header.component';
import Layout from './Layout';
import About from './sections/About.section';
import Home from './sections/Home/Home.section';
import Skills from './sections/Skills.section';

function App() {
  return (
    <Layout>
      <Header />
      <Home />
      <About />
      <Skills />
    </Layout>
  );
}

export default App;
