import "./App.css";
import React from "react";
import Modal from "./components/Modal/Modal.js";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <div className="App-header">
        <button className="open-button" onClick={() => setShow(true)}>
          Open Modal
        </button>
      </div>
      <Modal trigger={show} setTrigger={setShow}></Modal>
    </div>
  );
}

export default App;
