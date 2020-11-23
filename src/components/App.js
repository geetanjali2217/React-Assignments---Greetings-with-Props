import React from "react";
import '../styles/App.css';
import Welcome from './Welcome';

const App = () => {
  const Greeting="Geetanjali";
  return (
    <Welcome name={Greeting} />
  )
}


export default App;
