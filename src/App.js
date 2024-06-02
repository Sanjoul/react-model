import React from "react";
import Popup from "./components/Popup";
import { useState } from "react";

const App = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="App">
      <main>
        <h1>React popups</h1>
        <br />
        <br />
        <button onClick={() => setButtonPopup(true)}>Open Popup</button>
      </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        {/* <h3>My Popup</h3>
        <p>THis is my button triggered popup</p> */}
      </Popup>
    </div>
  );
};

export default App;
