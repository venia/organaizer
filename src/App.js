import logo from './logo.svg';
import './App.css';
import React from 'react';
import  MenuContainer from "./menu/menu-container.component.js";


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MenuContainer>Here</MenuContainer>
                <h1>Hello Venya</h1>
            </div>
        );
    }
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
