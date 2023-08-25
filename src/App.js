import React from "react";

import Routes from './routes/Routes'

import Navbar from "./components/navbar/Navbar";

import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";



function App() {
  return(
  <>
  <Layout>
    <Navbar/>
    
    <Routes />
  </Layout>
  <Footer/>
  </>
  );
}

export default App;
