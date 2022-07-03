import React from "react";
import "./App.css";
import About from './componets/about';
import Nav from './componets/Nav/index';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
