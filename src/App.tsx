import React from "react";
import Header from "./components/Header.component";
import Layout from "./Layout";
import About from "./sections/About.section";
import Home from "./sections/Home/Home.section";
import Detail from "./sections/Detail";

function App() {
  return (
    <Layout>
      <Header />
      <Home />
      <About />
      <Detail />
    </Layout>
  );
}

export default App;
