import React from "react";
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import './App.css'
import { Orginals,Action,Comedy,Horror,Romance,Documentaries } from "./urls";
import RowPost from "./Components/RowPost/RowPost";


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={Orginals} title="Netflix Orginals" />
        <RowPost url={Action} title="Action" isSmall/>
        <RowPost url={Comedy} title="Comedy" isSmall/>
        <RowPost url={Horror} title="Horror" isSmall/>
        <RowPost url={Romance} title="Romance" isSmall/>
        <RowPost url={Documentaries} title="Documentaries" isSmall/>
    </div>
  );
}

export default App;
