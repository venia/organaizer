import logo from './logo.svg';
import './App.css';
import React from 'react'
import  MenuContainer from "./menu/menu-container.component.js";

function App() {
  return (
    <div className="App">
      <MenuContainer id="MenuContainerID">Here</MenuContainer> <h1>Hello Venya</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// function App() {
//     return (
//         <MenuContainer></MenuContainer>
//         <div className="App">
//
//         </div>
//   );
// }

export default App;
