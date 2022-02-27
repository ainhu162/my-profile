import React from "react";
import Header from "./components/Header.component";
import Layout from "./Layout";
import Home from "./sections/Home/Home.section";

function App() {
  return (
    <Layout>
      <Header />
      <Home />
    </Layout>
  );
}

export default App;
