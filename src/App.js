import React from 'react';
import Header from "./components/header/header";
import LiveMap from "./components/main/map";
import './App.css'
import LocTable from "./components/table/table";


function App() {
  const [toggle, setToggle] = React.useState(true);

  const tableHandler = () => {
        setToggle(false)
  }

  const mapHandler = () => {
        setToggle(true)
  }

  return (
    <div className="App">
      <Header />
      <div className="nav-map">
        <div className="nav">
          <button className="mark" onClick={tableHandler}>View Address Data</button>
          <button className="view" onClick={mapHandler}>View Marked Locations</button>
        </div>
        <div className="map">
          {toggle ? <LiveMap /> : <LocTable />}
        </div>
      </div>
    </div>
  );
}

export default App;
