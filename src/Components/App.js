import '../App.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import PlantSearch from "./PlantSearch";
import Header from "./Header";
import PlantOfTheDay from './PlantOfTheDay';
import Footer from "./Footer";


function App() {

  return (
  <div>
  <Header />
  <PlantOfTheDay />
  <PlantSearch />
  <Footer />
  </div>
  )
 
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
